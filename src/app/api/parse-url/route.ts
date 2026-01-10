import { NextRequest, NextResponse } from 'next/server';
import { parseUrl, detectUrlType } from '@/lib/urlParser';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    const urlType = detectUrlType(url);
    const result = parseUrl(url);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to parse URL' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      urlType,
      activity: result.activity,
    });
  } catch (error) {
    console.error('Error parsing URL:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
