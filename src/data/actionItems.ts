import { ActionItem } from '@/types/actions';
import { tripData } from './tripData';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // --- FLIGHTS ---
  for (const flight of tripData.flights) {
    items.push({
      id: `flight-${flight.id}`,
      category: 'flight',
      title: `${flight.passenger === 'colin' ? 'Colin' : flight.passenger === 'mom' ? 'Mom' : 'Wife'}: ${flight.from}→${flight.to} (${flight.airline})`,
      description: flight.notes ?? undefined,
      status: 'pending',
      deadline: undefined, // Flights bookable now
      tripDay: flight.type === 'outbound' ? 1 : tripData.days.length,
      estimatedCost: flight.price,
      bookingUrl: flight.bookingUrl,
      notes: `${flight.duration ?? ''} ${flight.date}`.trim(),
      updatedAt: now(),
    });
  }

  // --- CAR RENTAL ---
  if (tripData.carRental) {
    const cr = tripData.carRental;
    items.push({
      id: 'car-rental',
      category: 'car_rental',
      title: `${cr.pickupLocation.split('(')[0].trim()} → ${cr.dropoffLocation.split('(')[0].trim()}`,
      description: `${cr.vehicleType}, ${cr.totalDays} days`,
      status: 'pending',
      deadline: '2026-04-15',
      tripDay: 1,
      estimatedCost: cr.totalCost,
      bookingUrl: 'https://www.costcotravel.com/Rental-Cars',
      notes: cr.notes ?? undefined,
      updatedAt: now(),
    });
  }

  // --- ACCOMMODATIONS (unique stays only, not "same as previous night") ---
  const seenAccommodations = new Set<string>();
  for (const day of tripData.days) {
    const acc = day.accommodation;
    if (!acc?.name || acc.name.includes('same as') || acc.name.includes('Same as')) continue;
    // Deduplicate by name
    const key = acc.name.replace(/\s*\(.*$/, '').trim();
    if (seenAccommodations.has(key)) continue;
    seenAccommodations.add(key);

    // Count nights at this accommodation
    let nights = 1;
    const dayIdx = tripData.days.indexOf(day);
    for (let i = dayIdx + 1; i < tripData.days.length; i++) {
      const nextAcc = tripData.days[i].accommodation;
      if (nextAcc?.name?.includes('same as') || nextAcc?.name?.includes('Same as')) {
        nights++;
      } else {
        break;
      }
    }

    items.push({
      id: `acc-day${day.dayNumber}`,
      category: 'accommodation',
      title: `${key} (${nights}n)`,
      description: `${day.overnight ?? day.location.name} — Day ${day.dayNumber}${nights > 1 ? `-${day.dayNumber + nights - 1}` : ''}`,
      status: 'pending',
      deadline: day.dayNumber <= 6 ? '2026-04-01' : day.dayNumber <= 12 ? '2026-04-01' : '2026-04-15',
      tripDay: day.dayNumber,
      estimatedCost: (acc.pricePerNight ?? 0) * nights,
      bookingUrl: acc.bookingUrl ?? acc.website ?? undefined,
      notes: acc.notes ?? undefined,
      updatedAt: now(),
    });
  }

  // --- IMPORTANT RESERVATIONS (activities, dining, passes) ---
  if (tripData.importantReservations) {
    for (const res of tripData.importantReservations) {
      // Skip items already covered (car rental, lodging references)
      if (res.item.includes('Car Rental')) continue;
      if (res.item.includes('Lodging') && !res.item.includes('Paddle Ridge')) continue;

      const isPass = res.item.includes('Pass') || res.item.includes('pass');
      const isDining = res.item.includes('Tovar') || res.item.includes('Dining');
      const isActivity = res.item.includes('Canyon') || res.item.includes('Arches') || res.item.includes('Glacier') || res.item.includes('Vehicle');

      let category: ActionItem['category'] = 'activity';
      if (isPass) category = 'pass';
      if (isDining) category = 'dining';

      items.push({
        id: `res-${res.item.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`,
        category,
        title: res.item,
        description: res.notes ?? undefined,
        status: 'pending',
        deadline: res.bookBy === 'N/A' ? undefined : res.bookBy,
        bookingUrl: res.website,
        notes: res.notes ?? undefined,
        updatedAt: now(),
      });
    }
  }

  // --- PARK PASSES (explicit) ---
  items.push({
    id: 'pass-colin-atb',
    category: 'pass',
    title: 'America the Beautiful Pass (Colin)',
    description: '$80 annual pass — covers all NPS parks for vehicle occupants',
    status: 'pending',
    deadline: '2026-05-15',
    estimatedCost: 80,
    bookingUrl: 'https://www.nps.gov/planyourvisit/passes.htm',
    notes: 'Buy at first park entrance (Grand Canyon) or online at recreation.gov',
    updatedAt: now(),
  });

  items.push({
    id: 'pass-mom-nonresident',
    category: 'pass',
    title: 'Nonresident Annual Pass (Mom)',
    description: '$250 pass covers $100 surcharge at Grand Canyon, Teton, Yellowstone, Glacier',
    status: 'pending',
    deadline: '2026-05-15',
    estimatedCost: 250,
    bookingUrl: 'https://store.usgs.gov/2026-non-resident-annual-pass',
    notes: 'Saves $150 vs paying $100 x 4 parks. Buy at first park entrance or USGS store.',
    updatedAt: now(),
  });

  // Sort: urgent deadlines first, then by trip day
  items.sort((a, b) => {
    // Items with deadlines come first
    if (a.deadline && !b.deadline) return -1;
    if (!a.deadline && b.deadline) return 1;
    if (a.deadline && b.deadline) {
      const da = new Date(a.deadline).getTime();
      const db = new Date(b.deadline).getTime();
      if (da !== db) return da - db;
    }
    // Then by trip day
    return (a.tripDay ?? 99) - (b.tripDay ?? 99);
  });

  return items;
}
