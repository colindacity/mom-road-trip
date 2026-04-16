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

## Bookings Page (/bookings)

### Purpose
Collaborative trip booking tracker for Colin + Robin. Dense spreadsheet-style interface showing all trip segments, accommodation options, activities, and booking statuses in one place.

### Architecture
- **Client component** (`src/app/bookings/page.tsx`) with Redis persistence via `/api/bookings-notes`
- **API v2 schema**: Single Redis key `mom-road-trip-bookings-v2` stores all dynamic data:
  - `notes` - per-section text notes (auto-saving)
  - `statuses` - per-item booking status badges (not-started, researching, booked, skipped)
  - `customItems` - user-added items per section
  - `checks` - signup/task checkboxes per item
- **Data flow**: Static trip data from `tripData.ts` (days, activities, accommodationOptions, weather) merged with dynamic user data from Redis API at render time

### Key Features
- Clickable status badges (cycle through: not-started, researching, booked, skipped)
- Inline add-item rows per section for custom entries
- Auto-saving note areas (debounced writes to Redis)
- Signup checkboxes (who's responsible for booking what)
- Accordion drill-down into day-by-day details, activities, and accommodation options pulled live from tripData
- Mobile horizontal scroll for dense tables

### User Identity
- Stored in `localStorage` as `bookings-user-name`
- Displayed as Colin (blue badges) or Robin (purple badges)
- Used to attribute notes and checkbox signups

### STAYS Array vs tripData
The `STAYS` array in `page.tsx` is a simplified subset of `tripData` defining the high-level booking segments (location, dates, nights). The full `accommodationOptions`, `activities`, historical weather, etc. are pulled live from `tripData.days` at render time and displayed in the accordion expansion for each stay.

### Files
```
src/
├── app/
│   ├── bookings/
│   │   └── page.tsx          # Bookings page (client component)
│   └── api/
│       └── bookings-notes/
│           └── route.ts      # GET/POST for bookings v2 data
```

## Bookings Roadmap

### DONE
- Dense spreadsheet-style tables with all tripData fields exposed
- Clickable status badges (not-started / researching / booked / skipped)
- Inline add-item rows per section
- Signup checkboxes per item
- Mobile horizontal scroll
- Auto-expanding, auto-saving notes per section
- Accordion drill-down into day-by-day activities and accommodation options

### TODO
- West Yellowstone accommodation still needs booking
- All flights need booking (Colin SEA, Mom YYZ, Robin SEA-FCA)
- Car rental needs booking
- Signup checkboxes incomplete (not all items assigned)

### FUTURE
- Real-time sync (currently last-write-wins on Redis)
- Flight price tracking / alerts
- Cost totals dashboard with per-person breakdown
