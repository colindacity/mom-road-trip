// Nominatim (OpenStreetMap) geocoding client
// Free API, no key required, but requires proper User-Agent

const BASE_URL = 'https://nominatim.openstreetmap.org';
const USER_AGENT = 'MomRoadTripPlanner/1.0';

// Rate limiting: max 1 request per second
let lastRequestTime = 0;

async function rateLimitedFetch(url: string): Promise<Response> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < 1000) {
    await new Promise(resolve => setTimeout(resolve, 1000 - timeSinceLastRequest));
  }

  lastRequestTime = Date.now();

  return fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      'Accept': 'application/json',
    },
  });
}

export interface NominatimPlace {
  place_id: number;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  name?: string;
  category: string;
  type: string;
  address?: {
    tourism?: string;
    amenity?: string;
    natural?: string;
    place?: string;
    city?: string;
    town?: string;
    village?: string;
    county?: string;
    state?: string;
    country?: string;
    postcode?: string;
  };
  extratags?: {
    wikipedia?: string;
    wikidata?: string;
    website?: string;
    phone?: string;
    opening_hours?: string;
    image?: string;
  };
  boundingbox?: [string, string, string, string];
}

export interface EnrichedLocation {
  name: string;
  displayName: string;
  lat: number;
  lng: number;
  osmId?: number;
  osmType?: string;
  wikidataId?: string;
  wikipediaUrl?: string;
  website?: string;
  phone?: string;
  openingHours?: string;
  category: string;
  type: string;
  address?: {
    city?: string;
    state?: string;
    country?: string;
  };
}

// Search for a place by name
export async function searchPlace(
  query: string,
  options?: {
    limit?: number;
    countrycodes?: string;
    viewbox?: [number, number, number, number];
  }
): Promise<NominatimPlace[]> {
  try {
    const params = new URLSearchParams({
      q: query,
      format: 'json',
      addressdetails: '1',
      extratags: '1',
      limit: String(options?.limit || 5),
    });

    if (options?.countrycodes) {
      params.set('countrycodes', options.countrycodes);
    }

    if (options?.viewbox) {
      params.set('viewbox', options.viewbox.join(','));
      params.set('bounded', '1');
    }

    const response = await rateLimitedFetch(`${BASE_URL}/search?${params}`);

    if (!response.ok) {
      throw new Error(`Nominatim search failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Nominatim search error:', error);
    return [];
  }
}

// Reverse geocode coordinates to get place details
export async function reverseGeocode(
  lat: number,
  lng: number,
  zoom?: number
): Promise<NominatimPlace | null> {
  try {
    const params = new URLSearchParams({
      lat: String(lat),
      lon: String(lng),
      format: 'json',
      addressdetails: '1',
      extratags: '1',
      zoom: String(zoom || 18),
    });

    const response = await rateLimitedFetch(`${BASE_URL}/reverse?${params}`);

    if (!response.ok) {
      throw new Error(`Nominatim reverse failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Nominatim reverse error:', error);
    return null;
  }
}

// Look up a specific OSM object
export async function lookupOsmId(
  osmType: string,
  osmId: number
): Promise<NominatimPlace | null> {
  try {
    const osm_ids = `${osmType.charAt(0).toUpperCase()}${osmId}`;
    const params = new URLSearchParams({
      osm_ids,
      format: 'json',
      addressdetails: '1',
      extratags: '1',
    });

    const response = await rateLimitedFetch(`${BASE_URL}/lookup?${params}`);

    if (!response.ok) {
      throw new Error(`Nominatim lookup failed: ${response.status}`);
    }

    const results = await response.json();
    return results[0] || null;
  } catch (error) {
    console.error('Nominatim lookup error:', error);
    return null;
  }
}

// Enrich a location with OSM data
export async function enrichLocation(
  name: string,
  lat?: number,
  lng?: number
): Promise<EnrichedLocation | null> {
  try {
    let place: NominatimPlace | null = null;

    // If we have coordinates, try reverse geocoding first
    if (lat && lng) {
      place = await reverseGeocode(lat, lng);
    }

    // If no result or no coordinates, search by name
    if (!place) {
      const results = await searchPlace(name, { countrycodes: 'us', limit: 1 });
      place = results[0] || null;
    }

    if (!place) return null;

    // Extract wikidata ID if available
    const wikidataId = place.extratags?.wikidata;
    const wikipediaUrl = place.extratags?.wikipedia
      ? `https://en.wikipedia.org/wiki/${place.extratags.wikipedia.replace(/^en:/, '')}`
      : undefined;

    return {
      name: place.name || name,
      displayName: place.display_name,
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
      osmId: place.osm_id,
      osmType: place.osm_type,
      wikidataId,
      wikipediaUrl,
      website: place.extratags?.website,
      phone: place.extratags?.phone,
      openingHours: place.extratags?.opening_hours,
      category: place.category,
      type: place.type,
      address: {
        city: place.address?.city || place.address?.town || place.address?.village,
        state: place.address?.state,
        country: place.address?.country,
      },
    };
  } catch (error) {
    console.error('Error enriching location:', error);
    return null;
  }
}

// Search for nearby points of interest
export async function searchNearby(
  lat: number,
  lng: number,
  type: string,
  radiusKm: number = 10
): Promise<NominatimPlace[]> {
  try {
    // Create a bounding box around the point
    const latDelta = radiusKm / 111; // ~111km per degree of latitude
    const lngDelta = radiusKm / (111 * Math.cos(lat * Math.PI / 180));

    const viewbox: [number, number, number, number] = [
      lng - lngDelta,
      lat - latDelta,
      lng + lngDelta,
      lat + latDelta,
    ];

    const results = await searchPlace(type, {
      viewbox,
      limit: 10,
    });

    return results;
  } catch (error) {
    console.error('Error searching nearby:', error);
    return [];
  }
}
