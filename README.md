# Native Plant Guide

React app (Vite) with a curated native plant collection and live photo/search data from the iNaturalist API.

## Run it
```bash
npm install
npm run dev
```

## Structure
- `src/data/plants.js`: our own plant data (growing facts, wildlife notes)
- `src/hooks/usePlantPhoto.js`: GET request to iNaturalist, handles loading and errors
- `src/components/`: Header, Navigation, PlantFilters, PlantList, PlantCard, PlantApiLookup, Footer

## API vs. our database
**From the API (iNaturalist):** photos, plant search results, observation counts, Wikipedia links.
**From our own data:** which plants are in the native collection, sunlight, soil, bloom season, height, and wildlife notes.
