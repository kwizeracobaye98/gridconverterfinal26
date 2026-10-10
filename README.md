# Rwanda Grid Converter

![Rwanda Grid Converter](image.png)

A mobile-first single-file field tool for converting Rwanda grid references, WGS84 coordinates, and building grid-to-grid navigation on a phone. Fully functional both online and offline.

## Overview

This project is designed for field use, touch screens, and quick tactical workflows. The app supports grid conversion, live location, map tools, pin history, route building, grid-to-grid navigation, compass bearing, ETA, track recording, and in-map navigation controls.

This edition covers four supported map sheets in Rwanda: **GAKO**, **GABIRO**, **MIHINDI**, and **NYAGATARE**.

## Key Features

- **Grid → Geo**: Convert 6-digit grid references to WGS84 geographic coordinates (Decimal° and DMS)
- **Geo → Grid**: Convert WGS84 coordinates (Decimal° or DMS) back to 6-digit grid references
- **Full-screen Interactive Map** (Leaflet) with Street, Satellite, and Topographic layers; works online and offline
- **Live Connection Indicator**: Shows whether the app is online or offline
- **Current Location**: Center the map on your live GPS position with `Me` button
- **Pin Management**: Add pins from conversion results, by tapping the map, or by entering a grid reference manually
- **Pin Search**: Search pins by name or grid reference
- **Pin Name Labels**: Toggle white-on-black name labels on pins
- **Route Builder**: Build routes with a multi-field form, autocomplete from existing pins, preview and save
- **Auto Route Generator**: Generate intermediate route points between two grids using configurable interval, group, and lunch break settings
- **Route Groups**: Organize routes into Ungrouped, Group A, Group B, and Group C with visibility toggles
- **Route Visibility**: Show/hide individual routes, show only one route, toggle route name labels and point name labels
- **Grid-to-Grid Navigation**: Build navigation legs across supported sheets, with distance, ETA, bearing, back bearing, and movement vector
- **Navigation Modes**: Start navigation from current GPS location or a manual start grid
- **Travel Modes**: Foot (~5 km/h) or Vehicle (~40 km/h) speed estimates
- **Live Navigation**: Real-time updates of remaining distance, remaining time, bearing, heading, and guidance instructions
- **Floating Navigation Bar**: A minimized live navigation bar that auto-collapses while moving
- **Map Navigation Card**: A compact card on the map showing remaining distance, time, and objective with Start/End Navigation buttons
- **Compass Screen**: A full-device compass dial with rotating needle, bearing line, remaining distance, ETA, live position, magnetic field reading, and heading sensor integration
- **Military Mils Bearing**: Bearings displayed in both degrees and 6400 mils (true and magnetic)
- **Magnetic Declination**: Configurable magnetic declination (currently -2.2°) for magnetic bearing calculations
- **Compass Sensor**: Uses DeviceOrientation API with motion sensor fusion for smooth heading updates
- **ETA Calculation**: Estimated time of arrival based on distance and selected travel mode
- **Google Maps Integration**: Open any location or route in Google Maps for turn-by-turn guidance
- **Report Generation**: Generate a detailed HTML report with pin table and checkpoint summaries, plus CSV download
- **Track Recording**: Record GPS tracks, pause/resume, and export as GPX files
- **GPX Import**: Import GPX files and display them on the map
- **Ruler Tool**: Measure distance from your live location to any point on the map
- **Map Info Bar**: Toggle a heads-up display showing grid reference, coordinates, TM easting/northing, and distance from your location
- **Map Fullscreen**: Enter fullscreen mode on the map for maximum visibility
- **Search Bar**: Search the map by grid reference, decimal coordinates, or DMS coordinates
- **Data Export/Import**: Export and import pin data as JSON
- **Offline Support**: Service worker caches core files and map tiles for offline use
- **Responsive UI**: Optimized for phones, tablets, and desktops with adaptive layouts

## Supported Sheets

| Sheet       | Type  | Notes |
|-------------|-------|-------|
| **GAKO**    | GPS   | Original GPS-calibrated base constants |
| **GABIRO**  | REF   | Configured sheet ranges and reference points |
| **MIHINDI** | REF   | Configured sheet ranges and reference points |
| **NYAGATARE** | REF | Configured sheet ranges and reference points |

`GAKO` uses its original GPS-calibrated base constants. `GABIRO`, `MIHINDI`, and `NYAGATARE` use configured sheet ranges and reference points stored in `index.html`.

## Project Files

| File | Description |
|------|-------------|
| `index.html` | Complete mobile app UI, styles, map tools, sheet setup, navigation logic, and conversion logic |
| `sw.js` | Service worker for offline caching and app shell management |
| `offline.html` | Offline fallback page shown when the network is unavailable |
| `offline-map-layer.js` | Offline placeholder tile renderer for Leaflet (generates SVG-based tiles) |
| `manifest.json` | Web App Manifest for home screen installation |
| `leaflet.css` | Leaflet map library stylesheet |
| `leaflet.js` | Leaflet map library script |
| `image.png` | Logo shown on the unlock screen |

## How To Open On Mobile

1. Copy the project to your phone, or host the files on a local/internal server (e.g., GitHub Pages, local HTTP server).
2. Open `index.html` in a mobile browser such as Chrome or Safari.
3. Enter the PIN to unlock the app.
4. Start working from the bottom navigation tabs.

> **Note**: The unlock password is configurable in the JavaScript section of `index.html` (variable `CORRECT_PASSWORD`). Default build: `kwizera2026`.

For the best experience, add the page to the home screen if your browser supports it (PWA features enabled via `manifest.json`).

## How To Use

### Grid → Geo

1. Choose the sheet you want to use from the top sheet bar.
2. Go to the **Grid→Geo** tab.
3. Enter a **6-digit grid reference** (e.g., `201515`).
4. Tap **Convert Grid**.
5. View the resulting WGS84 coordinates in both DMS and decimal formats.
6. Use **Show on Map** to see the location, or **Google Maps** for external navigation.

### Geo → Grid

1. Go to the **Geo→Grid** tab.
2. Choose **Decimal°** or **DMS** input mode.
3. Enter the coordinates (latitude as positive South value, longitude as East value).
4. Tap **Convert Coordinates**.
5. View the resulting 6-digit grid reference along with TM easting/northing values.

### Grid Navigation

1. Go to the **Grid Nav** tab.
2. Choose **Current Location** or **Manual Grid** as the start source.
3. Enter the **destination grid** (6 digits).
4. If using manual start, also enter the **start grid**.
5. Choose travel mode: **Foot** (~5 km/h) or **Vehicle** (~40 km/h).
6. Tap **Build Navigation Leg**.
7. Review the **distance**, **ETA**, **bearing** (degrees and mils), **back bearing**, **magnetic bearing**, and route details.
8. Tap **Start Navigation** to begin live navigation with the floating bar and compass screen.
9. Tap **End Navigation** to stop.

### Map Workflow

1. Go to the **Map** tab.
2. Use **Me** to center on your current location.
3. Tap the map to save named pins at any location.
4. Use **Pins** button to toggle the pin sheet (history list and route sections).
5. Use **Nav** button to toggle the navigation card on the map.
6. Use **Info** button to toggle the heads-up info bar.
7. Use **Ruler** to measure distances from your location.
8. Use **Sheet** to fit the active sheet bounds on the map.
9. Use **Full** to toggle full-screen mode.
10. Use **Track** to start/stop GPS track recording.
11. Use the **Search Bar** at the top to find locations by grid, decimal, or DMS.
12. Toggle **Street**, **Sat**, or **Topo** map layers.
13. Toggle the **Grid** overlay on/off.

### Route Building

1. Go to the **Map** tab and open the pin sheet.
2. Select pins using the **Include in Route** checkbox, then tap **Route**.
3. Or use **Build** to open the Route Builder modal with autocomplete fields.
4. Use **Auto Route** to automatically generate intermediate waypoints between two grids.
5. Organize routes into **Groups** (A, B, C) for better management.
6. Use the route controls to **Show/Hide**, **Focus**, **Edit**, or **Delete** routes.

### Compass

1. Start a navigation from the **Grid Nav** tab or by tapping **Nav** on a pin.
2. Go to the **Compass** tab.
3. Tap **Enable Compass** to allow device orientation access.
4. The compass dial shows the bearing to your objective.
5. Follow the needle — when the arrow points straight up, you're heading toward the target.
6. View live position, remaining distance, ETA, magnetic field strength, and heading.
7. Tap **End Navigation** when you arrive.

### Reports

1. From the pin sheet, tap **Report**.
2. A new window opens with an HTML report showing all pins and routes (if any).
3. A CSV file download is also generated automatically.
4. Pop-ups must be allowed in the browser for the report window.

### Track Recording

1. On the **Map** tab, tap **Track** to open the track control card.
2. Tap **Start** to begin recording your GPS track.
3. Use **Pause** / **Resume** to control recording.
4. Tap **Stop** to finish the recording session.
5. Tap **Export GPX** to download the track as a GPX file.
6. Use **Import GPX** to load an external GPX file onto the map.

## Navigation Notes

- **Current Location** mode uses browser GPS permission (requires HTTPS on most browsers).
- Live navigation updates **remaining distance**, **remaining time**, and **bearing** as you move.
- The internal map shows a straight navigation leg between points (great-circle path).
- **Google Maps Route** is useful when you want road-based routing outside the app.
- If your current GPS point is outside the loaded sheets, the app can still navigate by latitude/longitude even when a local sheet grid is unavailable.
- **Magnetic bearing** is calculated using a declination of -2.2° (adjustable in `index.html`).
- The compass uses sensor fusion (DeviceOrientation + DeviceMotion) for smooth heading updates.

## Mobile Notes

- The layout is optimized for phones and touch interaction.
- Geolocation depends on browser permission being allowed on the phone.
- For the best experience, add the page to the home screen (PWA support).
- The app caches its core files and map assets via a service worker for offline use.
- Some browsers may block the report popup until popups are allowed.
- The compass sensor requires device orientation permission (iOS 13+ requires explicit permission request).

## Technical Notes

- **No build step** is required.
- **No package installation** is required.
- All logic is contained in `index.html` (single-file application).
- Sheet calibration, anchors, and grid constants are stored directly in the `SHEETS` configuration in `index.html`.
- Navigation UI, floating bar, map navigation card, compass, and track recording are implemented directly in `index.html`.
- A service worker (`sw.js`) and offline assets allow the app to run online and offline with the same interface.
- The offline map layer (`offline-map-layer.js`) provides placeholder tiles when the network is unavailable.
- The app uses the **Transverse Mercator** projection with Central Meridian 30°E (UTM zone 36S).
- All coordinates are based on the **WGS84** ellipsoid.

## Navigation Formulas

- **Distance**: Haversine formula (great-circle distance)
- **Bearing**: Great-circle initial bearing (forward azimuth)
- **Mils**: Bearing converted to 6400 mils (`mils = degrees × 6400/360`)
- **Magnetic**: True bearing adjusted by magnetic declination
- **ETA**: Distance / speed (Foot: 5 km/h, Vehicle: 40 km/h)

## Security

- The unlock screen prevents unauthorized access to the tool.
- The default password is configurable in `index.html` by changing the `CORRECT_PASSWORD` variable.
- Authentication state is persisted in `localStorage` (cleared on sign-out).

## Support

This mobile app was created by **Kwizera**.

Help line: **0781845528**

---

*Copyright © 2026 · All rights reserved.*

