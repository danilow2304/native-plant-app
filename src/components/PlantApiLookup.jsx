import { useState } from "react";

// API: iNaturalist v1 (public, no key). Docs: https://api.inaturalist.org/v1/docs/
const API_URL = "https://api.inaturalist.org/v1/taxa";

function PlantApiLookup() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();
    const term = query.trim();
    if (!term) {
      setError("Enter a plant name to search.");
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const params = new URLSearchParams({
        q: term,
        rank: "species",
        iconic_taxa: "Plantae",
        per_page: "12",
      });
      const response = await fetch(`${API_URL}?${params}`);
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      setError(`Could not load plant data. ${err.message}`);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <p className="lede">
        Search any plant in the iNaturalist database. These results are reference
        data only; they are not part of our curated native collection.
      </p>

      <form className="lookup-form" onSubmit={handleSearch}>
        <label className="field grow">
          <span>Plant name</span>
          <input
            type="text"
            placeholder="e.g. milkweed, oak, trillium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit" className="primary" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="error" role="alert">{error}</p>}
      {!loading && !error && searched && results.length === 0 && (
        <p className="empty">No plants found. Try a different name.</p>
      )}

      <div className="plant-grid">
        {results.map((taxon) => (
          <article key={taxon.id} className="plant-card">
            <div className="photo">
              {taxon.default_photo ? (
                <img src={taxon.default_photo.medium_url} alt={taxon.preferred_common_name || taxon.name} />
              ) : (
                <span className="photo-note">No photo found</span>
              )}
            </div>
            <div className="plant-body">
              <h3>{taxon.preferred_common_name || "No common name"}</h3>
              <p className="latin">{taxon.name}</p>
              <p className="note">
                {taxon.observations_count.toLocaleString()} observations
                {taxon.wikipedia_url && (
                  <>
                    {" "}
                    <a href={taxon.wikipedia_url} target="_blank" rel="noreferrer">Read on Wikipedia</a>
                  </>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PlantApiLookup;
