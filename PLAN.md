# Lunch Break Insertion Plan

## Information Gathered
- `generateAutoRoute()` function at ~line 3908 in index.html
- Already has lunch break UI: checkbox, pin selector, min/max hours fields
- UI description says: "Lunch break pin will be placed between 5 hrs (25 km) and 7 hrs (35 km) from the start"
- Current code creates routes WITHOUT lunch break insertion
- Walking speed assumed: 5 km/h (MINUTES_PER_KM_DAY = 20 min/km → 3 km/h foot, 40 km/h vehicle)
- Actually, at foot speed of 5 km/h: 25 km = 5 hours, 35 km = 7 hours. This matches the UI labels.
- At vehicle speed 40 km/h: 25 km = 37.5 min, 35 km = 52.5 min. Lunch break only makes sense for foot.

## Implementation Plan

### In `generateAutoRoute()` function:

**Step 1: Detect lunch break conditions**
After route points are selected and `routeTotalKm` is calculated, check:
- `document.getElementById('auto-route-lunch-toggle')?.checked === true`
- `routeTotalKm > 25` (only for routes > 25 km)

**Step 2: Find insertion position**
- Walk along the route points accumulating distances
- Find the segment where accumulated distance falls within [minHrs×5, maxHrs×5] km range
- The ideal position is at the midpoint of lunch range: `(minHrs + maxHrs) / 2 * 5` km

**Step 3: Select lunch break pin**
- If user selected a specific pin (`auto-route-lunch-pin` value != ''), use that pin
- Otherwise, auto-select an intermediate pin closest to the ideal distance point
- If no suitable pin exists among intermediates, pick the pin closest to the ideal distance

**Step 4: Insert lunch break pin into route**
- Insert the selected/auto-selected pin at the correct position in `routePoints` array
- Mark the pin as a lunch break pin for special visualization

**Step 5: Recalculate route with lunch break**
- Rebuild `latlngs` and recalculate `totalMeters`, `routeTotalKm`
- Update route's estimated day/night minutes

**Step 6: Add visual indicator for lunch break**
- Add a distinct marker on the map for the lunch break pin
- Use a special icon or label "🍴 Lunch Break" on the pin

### CSS Addition
- Add a `.lunch-break-marker` class for the lunch break pin with distinct styling (e.g., warm color like orange/yellow)

## No dependent files - all changes are within index.html

## Followup Steps
- Test in browser by creating pins and generating auto routes with lunch break enabled

