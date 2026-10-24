import { useEffect, useState } from "react";

// API: iNaturalist v1 taxa (public, no key). Looks up a photo by scientific name.
const API_URL = "https://api.inaturalist.org/v1/taxa";

export default function usePlantPhoto(scientificName) {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          q: scientificName,
          rank: "species",
          iconic_taxa: "Plantae",
          per_page: "1",
        });
        const response = await fetch(`${API_URL}?${params}`);
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const data = await response.json();
        const taxon = data.results?.[0];
        if (!cancelled) setPhoto(taxon?.default_photo?.medium_url ?? null);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [scientificName]);

  return { photo, loading, error };
}
