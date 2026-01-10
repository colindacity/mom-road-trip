import { NextRequest, NextResponse } from 'next/server';
import { enrichLocation, searchPlace } from '@/lib/nominatim';
import { getWikidataEntity, searchCommonsImages } from '@/lib/wikimedia';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name');
    const lat = searchParams.get('lat') ? parseFloat(searchParams.get('lat')!) : undefined;
    const lng = searchParams.get('lng') ? parseFloat(searchParams.get('lng')!) : undefined;

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Enrich location with Nominatim
    const location = await enrichLocation(name, lat, lng);

    if (!location) {
      return NextResponse.json(
        { error: 'Location not found' },
        { status: 404 }
      );
    }

    // If we have a Wikidata ID, fetch entity data
    let wikidataEntity = null;
    if (location.wikidataId) {
      wikidataEntity = await getWikidataEntity(location.wikidataId);
    }

    // Search for images on Wikimedia Commons
    const images = await searchCommonsImages(name, 3);

    return NextResponse.json({
      success: true,
      location: {
        ...location,
        images: wikidataEntity?.image
          ? [{ url: wikidataEntity.image, source: 'wikidata' }, ...images.map(i => ({ url: i.thumbUrl, source: 'commons' }))]
          : images.map(i => ({ url: i.thumbUrl, source: 'commons', author: i.author, license: i.license })),
        wikipedia: wikidataEntity?.wikipedia || location.wikipediaUrl,
        wikidataDescription: wikidataEntity?.description,
      },
    });
  } catch (error) {
    console.error('Error enriching location:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Search for locations
export async function POST(request: NextRequest) {
  try {
    const { query, limit = 5 } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    const results = await searchPlace(query, { limit, countrycodes: 'us' });

    const locations = results.map(place => ({
      name: place.name || place.display_name.split(',')[0],
      displayName: place.display_name,
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
      osmId: place.osm_id,
      osmType: place.osm_type,
      category: place.category,
      type: place.type,
      wikidataId: place.extratags?.wikidata,
    }));

    return NextResponse.json({
      success: true,
      locations,
    });
  } catch (error) {
    console.error('Error searching locations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
