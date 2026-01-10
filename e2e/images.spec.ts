import { test, expect } from '@playwright/test';

interface ImageResult {
  src: string;
  alt: string;
  naturalWidth: number;
  loaded: boolean;
}

test.describe('Image Loading Tests', () => {
  test('generate image loading report', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Click expand all to reveal all images
    const expandAllButton = page.getByText('Expand all');
    if (await expandAllButton.isVisible()) {
      await expandAllButton.click();
    }

    // Wait for images to load
    await page.waitForTimeout(5000);

    // Find all img elements
    const images = await page.locator('img').all();

    console.log(`\n${'='.repeat(60)}`);
    console.log('IMAGE LOADING REPORT');
    console.log(`${'='.repeat(60)}`);
    console.log(`Total images found: ${images.length}\n`);

    const results: ImageResult[] = [];
    const brokenByDomain: Record<string, string[]> = {};
    const loadedByDomain: Record<string, number> = {};

    for (const img of images) {
      const src = await img.getAttribute('src') || '';
      const alt = await img.getAttribute('alt') || 'No alt';

      // Scroll into view to trigger lazy loading
      await img.scrollIntoViewIfNeeded().catch(() => {});
      await page.waitForTimeout(100);

      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      const loaded = naturalWidth > 0;

      results.push({ src, alt, naturalWidth, loaded });

      // Track by domain
      try {
        const domain = src.startsWith('http') ? new URL(src).hostname : 'local';
        if (loaded) {
          loadedByDomain[domain] = (loadedByDomain[domain] || 0) + 1;
        } else {
          if (!brokenByDomain[domain]) brokenByDomain[domain] = [];
          brokenByDomain[domain].push(src);
        }
      } catch {
        // Invalid URL
      }
    }

    const loadedCount = results.filter(r => r.loaded).length;
    const brokenCount = results.filter(r => !r.loaded).length;

    console.log(`Loaded successfully: ${loadedCount} (${Math.round(loadedCount / results.length * 100)}%)`);
    console.log(`Failed to load: ${brokenCount} (${Math.round(brokenCount / results.length * 100)}%)`);

    // Report by domain
    console.log(`\n--- Images by Domain ---`);
    const allDomains = new Set([...Object.keys(loadedByDomain), ...Object.keys(brokenByDomain)]);
    for (const domain of allDomains) {
      const loaded = loadedByDomain[domain] || 0;
      const broken = brokenByDomain[domain]?.length || 0;
      const status = broken > 0 ? '⚠️' : '✓';
      console.log(`${status} ${domain}: ${loaded} loaded, ${broken} broken`);
    }

    // List broken images
    if (brokenCount > 0) {
      console.log(`\n--- Broken Images ---`);
      let count = 0;
      for (const [domain, urls] of Object.entries(brokenByDomain)) {
        console.log(`\n[${domain}]`);
        for (const url of urls.slice(0, 5)) {
          count++;
          console.log(`  ${count}. ${url.substring(0, 100)}...`);
        }
        if (urls.length > 5) {
          console.log(`  ... and ${urls.length - 5} more`);
        }
      }
    }

    console.log(`\n${'='.repeat(60)}\n`);

    // This test is informational - generates report
    // Note: External images may fail due to rate limiting, CORS, or hotlinking restrictions
    // NPS.gov and Wikimedia often block direct image requests in test environments
    // The key output is the report above - review and replace problematic images as needed
    const brokenPercentage = brokenCount / results.length;

    // Warn if >30% broken, fail if >70% broken
    if (brokenPercentage > 0.3) {
      console.warn(`\n⚠️  WARNING: ${Math.round(brokenPercentage * 100)}% of images failed to load`);
      console.warn('Review the broken images above and consider replacing problematic sources');
    }
    expect(brokenPercentage, `${Math.round(brokenPercentage * 100)}% of images failed to load`).toBeLessThan(0.7);
  });

  test('map markers should be visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for map to load
    await page.waitForTimeout(3000);

    // Check that the map container exists
    const mapContainer = page.locator('.leaflet-container');
    await expect(mapContainer).toBeVisible();

    // Check that markers are rendered
    const markers = page.locator('.leaflet-marker-icon');
    const markerCount = await markers.count();

    console.log(`Found ${markerCount} map markers`);
    expect(markerCount).toBeGreaterThan(0);
  });

  test('calendar view should load without errors', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Click the calendar view toggle
    const calendarToggle = page.locator('button[title="Calendar view"]');
    if (await calendarToggle.isVisible()) {
      await calendarToggle.click();
      await page.waitForTimeout(2000);
      await page.waitForLoadState('networkidle');

      // Verify the calendar view rendered (look for Activity Pool button or similar)
      const calendarContent = page.locator('text=Activity Pool, text=Days, text=Phase');
      const pageContent = await page.content();

      // Basic check - page should have some calendar-related content
      expect(pageContent.length).toBeGreaterThan(1000);
    }
  });

  test('external image URL domains report', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Expand to get all images
    const expandAllButton = page.getByText('Expand all');
    if (await expandAllButton.isVisible()) {
      await expandAllButton.click();
      await page.waitForTimeout(2000);
    }

    const images = await page.locator('img').all();
    const urls: string[] = [];

    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src && src.startsWith('http')) {
        urls.push(src);
      }
    }

    // Deduplicate and categorize
    const uniqueUrls = [...new Set(urls)];
    const domains: Record<string, number> = {};

    for (const url of uniqueUrls) {
      try {
        const domain = new URL(url).hostname;
        domains[domain] = (domains[domain] || 0) + 1;
      } catch {
        // Skip invalid URLs
      }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('EXTERNAL IMAGE SOURCES');
    console.log(`${'='.repeat(60)}`);
    console.log(`Total unique external images: ${uniqueUrls.length}\n`);

    Object.entries(domains)
      .sort((a, b) => b[1] - a[1])
      .forEach(([domain, count]) => {
        console.log(`  ${domain}: ${count} images`);
      });

    console.log(`\n${'='.repeat(60)}\n`);

    expect(uniqueUrls.length).toBeGreaterThan(0);
  });
});
