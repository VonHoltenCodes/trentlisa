# Honeymoon Tracker Feature

## Overview
The travel page has been converted into a honeymoon tracker that displays your Highway 101 cruise route on an interactive map with location pins.

## Features
- Interactive Mapbox map showing Highway 101 route
- Location pins with dates and descriptions
- Admin interface to add/remove locations
- Data stored in browser's local storage

## Setup
1. Make sure you have your Mapbox public token in `.env.local`:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_public_token_here
   ```

2. Start the development server:
   ```
   npm run dev
   ```

## Usage

### Viewing the Tracker
- Visit `/travel` to see the honeymoon tracker map
- Click on heart icons to see location details
- The sidebar shows a chronological list of your journey

### Admin Interface
- Visit `/admin/honeymoon` (only visible in development mode)
- Add new locations with:
  - Location name
  - Date
  - Latitude/Longitude (see instructions on the page)
  - Description
- Delete locations using the trash icon

## Finding Coordinates
1. Go to Google Maps
2. Search for your desired location
3. Right-click on the exact spot
4. Click on the latitude/longitude that appears
5. Copy and paste into the admin form

## Default Locations
The tracker includes default pins for:
- San Francisco (Starting point)
- Santa Cruz
- Monterey
- Big Sur

## Technical Details
- Uses react-map-gl for map rendering
- Stores data in localStorage (key: 'honeymoonPins')
- Responsive design with mobile support
- Map style: Mapbox Streets v12

## Future Enhancements
- Photo uploads for each location
- Message board for friends/family
- Export journey as PDF
- Real-time updates via database instead of localStorage