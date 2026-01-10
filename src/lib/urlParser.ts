// URL Parser for importing activities from various sources

export interface ParsedActivity {
  name: string;
  description?: string;
  duration?: string;
  difficulty?: 'easy' | 'moderate' | 'challenging';
  seniorFriendly?: boolean;
  coordinates?: { lat: number; lng: number };
  distance?: string;
  elevation?: string;
  source: string;
  sourceUrl: string;
  category?: string;
  reservationRequired?: boolean;
}

interface ParseResult {
  success: boolean;
  activity?: ParsedActivity;
  error?: string;
}

// Google Maps URL patterns
const GOOGLE_MAPS_PATTERNS = [
  /google\.com\/maps\/place\/([^/@]+)/,
  /google\.com\/maps\?.*q=([^&]+)/,
  /maps\.app\.goo\.gl/,
  /goo\.gl\/maps/,
];

// AllTrails URL pattern
const ALLTRAILS_PATTERN = /alltrails\.com\/trail\/([^?]+)/;

// NPS.gov URL pattern
const NPS_PATTERN = /nps\.gov\/([a-z]+)\//i;

// Yelp URL pattern
const YELP_PATTERN = /yelp\.com\/biz\/([^?]+)/;

// TripAdvisor pattern
const TRIPADVISOR_PATTERN = /tripadvisor\.com\/[^/]+\/([^/]+)-([^.]+)/;

export function detectUrlType(url: string): string {
  if (GOOGLE_MAPS_PATTERNS.some(p => p.test(url))) return 'google_maps';
  if (ALLTRAILS_PATTERN.test(url)) return 'alltrails';
  if (NPS_PATTERN.test(url)) return 'nps';
  if (YELP_PATTERN.test(url)) return 'yelp';
  if (TRIPADVISOR_PATTERN.test(url)) return 'tripadvisor';
  return 'unknown';
}

export function parseGoogleMapsUrl(url: string): ParseResult {
  try {
    // Extract place name from URL
    let name = '';

    // Try different URL patterns
    const placeMatch = url.match(/place\/([^/@]+)/);
    if (placeMatch) {
      name = decodeURIComponent(placeMatch[1]).replace(/\+/g, ' ');
    }

    const queryMatch = url.match(/q=([^&]+)/);
    if (!name && queryMatch) {
      name = decodeURIComponent(queryMatch[1]).replace(/\+/g, ' ');
    }

    // Try to extract coordinates
    let coordinates: { lat: number; lng: number } | undefined;
    const coordMatch = url.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/);
    if (coordMatch) {
      coordinates = {
        lat: parseFloat(coordMatch[1]),
        lng: parseFloat(coordMatch[2]),
      };
    }

    if (!name) {
      return { success: false, error: 'Could not extract place name from URL' };
    }

    return {
      success: true,
      activity: {
        name: name.split(',')[0].trim(), // Take first part before comma
        source: 'Google Maps',
        sourceUrl: url,
        coordinates,
        seniorFriendly: true, // Default, user can change
      },
    };
  } catch (error) {
    return { success: false, error: 'Failed to parse Google Maps URL' };
  }
}

export function parseAllTrailsUrl(url: string): ParseResult {
  try {
    const match = url.match(ALLTRAILS_PATTERN);
    if (!match) {
      return { success: false, error: 'Invalid AllTrails URL' };
    }

    // Extract trail name from URL path
    const pathParts = match[1].split('/');
    const trailSlug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
    const name = trailSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      success: true,
      activity: {
        name,
        source: 'AllTrails',
        sourceUrl: url,
        category: 'hike',
        difficulty: 'moderate', // Default, would need scraping for real data
        seniorFriendly: false, // Default for hikes
      },
    };
  } catch (error) {
    return { success: false, error: 'Failed to parse AllTrails URL' };
  }
}

export function parseNpsUrl(url: string): ParseResult {
  try {
    const match = url.match(NPS_PATTERN);
    if (!match) {
      return { success: false, error: 'Invalid NPS URL' };
    }

    const parkCode = match[1].toLowerCase();

    // Map common park codes to names
    const parkNames: Record<string, string> = {
      grca: 'Grand Canyon National Park',
      zion: 'Zion National Park',
      brca: 'Bryce Canyon National Park',
      cany: 'Canyonlands National Park',
      arch: 'Arches National Park',
      yell: 'Yellowstone National Park',
      grte: 'Grand Teton National Park',
      glac: 'Glacier National Park',
      yose: 'Yosemite National Park',
    };

    const name = parkNames[parkCode] || `${parkCode.toUpperCase()} National Park`;

    return {
      success: true,
      activity: {
        name,
        source: 'National Park Service',
        sourceUrl: url,
        category: 'park',
        seniorFriendly: true,
      },
    };
  } catch (error) {
    return { success: false, error: 'Failed to parse NPS URL' };
  }
}

export function parseYelpUrl(url: string): ParseResult {
  try {
    const match = url.match(YELP_PATTERN);
    if (!match) {
      return { success: false, error: 'Invalid Yelp URL' };
    }

    const bizSlug = match[1];
    const name = bizSlug
      .split('-')
      .slice(0, -1) // Remove city/location at end
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      success: true,
      activity: {
        name: name || bizSlug,
        source: 'Yelp',
        sourceUrl: url,
        category: 'restaurant',
        seniorFriendly: true,
      },
    };
  } catch (error) {
    return { success: false, error: 'Failed to parse Yelp URL' };
  }
}

export function parseUrl(url: string): ParseResult {
  const type = detectUrlType(url);

  switch (type) {
    case 'google_maps':
      return parseGoogleMapsUrl(url);
    case 'alltrails':
      return parseAllTrailsUrl(url);
    case 'nps':
      return parseNpsUrl(url);
    case 'yelp':
      return parseYelpUrl(url);
    default:
      // For unknown URLs, try to extract a reasonable name
      try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        const lastPart = pathParts[pathParts.length - 1] || urlObj.hostname;
        const name = lastPart
          .replace(/[-_]/g, ' ')
          .replace(/\.(html?|php|aspx?)$/i, '')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return {
          success: true,
          activity: {
            name,
            source: urlObj.hostname,
            sourceUrl: url,
            seniorFriendly: true,
          },
        };
      } catch {
        return { success: false, error: 'Invalid URL format' };
      }
  }
}
