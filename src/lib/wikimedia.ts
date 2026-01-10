// Wikimedia Commons API client for fetching free images
// No API key required

const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const WIKIDATA_API = 'https://www.wikidata.org/w/api.php';

export interface WikimediaImage {
  title: string;
  url: string;
  thumbUrl: string;
  width: number;
  height: number;
  description?: string;
  author?: string;
  license?: string;
}

export interface WikidataEntity {
  id: string;
  label: string;
  description?: string;
  image?: string;
  wikipedia?: string;
  coordinates?: { lat: number; lng: number };
}

// Search for images on Wikimedia Commons
export async function searchCommonsImages(
  query: string,
  limit: number = 5
): Promise<WikimediaImage[]> {
  try {
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      origin: '*',
      generator: 'search',
      gsrnamespace: '6', // File namespace
      gsrsearch: `${query} filetype:bitmap`,
      gsrlimit: String(limit),
      prop: 'imageinfo',
      iiprop: 'url|size|extmetadata',
      iiurlwidth: '800',
    });

    const response = await fetch(`${COMMONS_API}?${params}`);
    if (!response.ok) throw new Error('Commons API failed');

    const data = await response.json();
    const pages = data.query?.pages || {};

    return Object.values(pages)
      .map((page: any) => {
        const info = page.imageinfo?.[0];
        if (!info) return null;

        const metadata = info.extmetadata || {};

        return {
          title: page.title.replace('File:', ''),
          url: info.url,
          thumbUrl: info.thumburl || info.url,
          width: info.width,
          height: info.height,
          description: metadata.ImageDescription?.value?.replace(/<[^>]*>/g, ''),
          author: metadata.Artist?.value?.replace(/<[^>]*>/g, ''),
          license: metadata.LicenseShortName?.value,
        } as WikimediaImage;
      })
      .filter(Boolean) as WikimediaImage[];
  } catch (error) {
    console.error('Error searching Commons:', error);
    return [];
  }
}

// Get images associated with a Wikidata entity
export async function getWikidataImages(
  wikidataId: string
): Promise<WikimediaImage[]> {
  try {
    const params = new URLSearchParams({
      action: 'wbgetentities',
      format: 'json',
      origin: '*',
      ids: wikidataId,
      props: 'claims',
    });

    const response = await fetch(`${WIKIDATA_API}?${params}`);
    if (!response.ok) throw new Error('Wikidata API failed');

    const data = await response.json();
    const entity = data.entities?.[wikidataId];
    if (!entity) return [];

    // Get image from P18 (image) claim
    const imageClaims = entity.claims?.P18 || [];
    const images: WikimediaImage[] = [];

    for (const claim of imageClaims.slice(0, 3)) {
      const filename = claim.mainsnak?.datavalue?.value;
      if (!filename) continue;

      // Fetch image info from Commons
      const imageInfo = await getCommonsImageInfo(filename);
      if (imageInfo) images.push(imageInfo);
    }

    return images;
  } catch (error) {
    console.error('Error fetching Wikidata images:', error);
    return [];
  }
}

// Get detailed info about a specific Commons file
export async function getCommonsImageInfo(
  filename: string
): Promise<WikimediaImage | null> {
  try {
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      origin: '*',
      titles: `File:${filename}`,
      prop: 'imageinfo',
      iiprop: 'url|size|extmetadata',
      iiurlwidth: '800',
    });

    const response = await fetch(`${COMMONS_API}?${params}`);
    if (!response.ok) throw new Error('Commons API failed');

    const data = await response.json();
    const pages = data.query?.pages || {};
    const page: any = Object.values(pages)[0];

    if (!page || page.missing) return null;

    const info = page.imageinfo?.[0];
    if (!info) return null;

    const metadata = info.extmetadata || {};

    return {
      title: filename,
      url: info.url,
      thumbUrl: info.thumburl || info.url,
      width: info.width,
      height: info.height,
      description: metadata.ImageDescription?.value?.replace(/<[^>]*>/g, ''),
      author: metadata.Artist?.value?.replace(/<[^>]*>/g, ''),
      license: metadata.LicenseShortName?.value,
    };
  } catch (error) {
    console.error('Error fetching Commons image info:', error);
    return null;
  }
}

// Get Wikidata entity info by ID
export async function getWikidataEntity(
  wikidataId: string
): Promise<WikidataEntity | null> {
  try {
    const params = new URLSearchParams({
      action: 'wbgetentities',
      format: 'json',
      origin: '*',
      ids: wikidataId,
      props: 'labels|descriptions|claims|sitelinks',
      languages: 'en',
    });

    const response = await fetch(`${WIKIDATA_API}?${params}`);
    if (!response.ok) throw new Error('Wikidata API failed');

    const data = await response.json();
    const entity = data.entities?.[wikidataId];
    if (!entity) return null;

    // Extract coordinates from P625 (coordinate location)
    let coordinates: { lat: number; lng: number } | undefined;
    const coordClaim = entity.claims?.P625?.[0];
    if (coordClaim?.mainsnak?.datavalue?.value) {
      const { latitude, longitude } = coordClaim.mainsnak.datavalue.value;
      coordinates = { lat: latitude, lng: longitude };
    }

    // Extract main image from P18
    const imageClaim = entity.claims?.P18?.[0];
    const image = imageClaim?.mainsnak?.datavalue?.value;

    return {
      id: wikidataId,
      label: entity.labels?.en?.value || '',
      description: entity.descriptions?.en?.value,
      image: image ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(image)}?width=800` : undefined,
      wikipedia: entity.sitelinks?.enwiki?.title
        ? `https://en.wikipedia.org/wiki/${encodeURIComponent(entity.sitelinks.enwiki.title)}`
        : undefined,
      coordinates,
    };
  } catch (error) {
    console.error('Error fetching Wikidata entity:', error);
    return null;
  }
}

// Search Wikidata for places
export async function searchWikidataPlaces(
  query: string,
  limit: number = 5
): Promise<WikidataEntity[]> {
  try {
    const params = new URLSearchParams({
      action: 'wbsearchentities',
      format: 'json',
      origin: '*',
      search: query,
      language: 'en',
      limit: String(limit),
      type: 'item',
    });

    const response = await fetch(`${WIKIDATA_API}?${params}`);
    if (!response.ok) throw new Error('Wikidata search failed');

    const data = await response.json();
    const results = data.search || [];

    // Fetch full entity data for each result
    const entities: WikidataEntity[] = [];
    for (const result of results.slice(0, 3)) {
      const entity = await getWikidataEntity(result.id);
      if (entity) entities.push(entity);
    }

    return entities;
  } catch (error) {
    console.error('Error searching Wikidata:', error);
    return [];
  }
}
