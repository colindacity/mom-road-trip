# mom-road-trip - Claude Code Instructions

## Git Workflow

**ALWAYS follow this workflow after making changes:**

1. **Test locally** - Run `npm run build` to catch TypeScript/build errors
2. **Commit and push** - Commit with descriptive message, push to GitHub
3. **Verify CI/CD** - Check GitHub Actions for test results
4. **Verify deployment** - Confirm changes are live on Vercel production
5. **Run E2E tests** - Run `npm run test:e2e` against production URL

```bash
# Full workflow
npm run build                    # 1. Test locally
git add -A && git commit -m "..." && git push  # 2. Commit & push
gh run list --limit 1            # 3. Check CI status
curl -s https://mom-road-trip.vercel.app | grep "expected-text"  # 4. Verify deploy
npm run test:e2e                 # 5. E2E tests
```

## Dev Server Port

**Assigned Port: 4012**

```bash
npm run dev              # Starts on port 4012
npm run start            # Production build on port 4012
```

## Deployment

**Platform:** Vercel (auto-deploys from main branch)
**URL:** https://mom-road-trip.vercel.app

### E2E Tests on Deploy
- GitHub Actions workflow triggers on `deployment_status` event
- Runs Playwright image tests against the deployed Vercel URL
- Also runs on push/PR against local build
- Reports uploaded as artifacts

```bash
npm run test:e2e         # Run E2E tests locally
npm run test:e2e:ui      # Run with Playwright UI
```

## Key Features

### Drag-Drop Calendar
- Toggle between Timeline/Calendar views (icons in header)
- Activity pool with filters (difficulty, senior-friendly)
- Add custom activities via URL import (Google Maps, AllTrails, Yelp, NPS)
- Redis persistence (falls back to in-memory in dev)

### Historical Weather
- 3-year historical data from Open-Meteo (free API)
- Shows in expanded day view
- Displays average temps, condition probabilities, precipitation chance

### Map Enrichment
- Nominatim (OpenStreetMap) for geocoding
- Wikimedia Commons for free images
- No Google API required

## Environment Variables (Vercel)

```
REDIS_URL=<optional - uses in-memory fallback if not set>
```

## Image Issues

E2E tests report broken images by domain:
- **NPS.gov**: Blocks hotlinking - consider downloading/hosting locally
- **Wikimedia**: May rate-limit - use Commons API for reliable access
- **Unsplash/Pexels**: Generally reliable

## File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── schedule/        # DnD schedule persistence
│   │   ├── custom-events/   # Custom activity CRUD
│   │   ├── parse-url/       # URL import parsing
│   │   ├── weather/         # Historical weather
│   │   └── locations/       # Nominatim enrichment
│   └── page.tsx             # Main app with view toggle
├── components/
│   ├── DndCalendar.tsx      # Drag-drop calendar view
│   ├── ActivityPoolPanel.tsx
│   ├── CompactDayRow.tsx    # Timeline view rows
│   ├── HistoricalWeather.tsx
│   └── AddCustomEventModal.tsx
├── hooks/
│   ├── useSchedule.ts       # Schedule state management
│   └── useHistoricalWeather.ts
├── lib/
│   ├── redis.ts             # Redis client
│   ├── urlParser.ts         # URL parsing utilities
│   ├── nominatim.ts         # OpenStreetMap geocoding
│   ├── wikimedia.ts         # Commons image search
│   └── historicalWeather.ts # Open-Meteo client
└── data/
    └── tripData.ts          # Trip itinerary data
```
