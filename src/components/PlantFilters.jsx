// Controlled inputs: App owns the state, this component reports changes upward.
const SUNLIGHT = ["Full sun", "Part shade", "Shade"];
const SOIL = ["Clay", "Loamy", "Sandy", "Rocky"];
const BLOOM = ["Spring", "Summer", "Fall"];

function Select({ label, value, options, onChange }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Any</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function PlantFilters({ filters, onChange, onReset, resultCount }) {
  const hasFilters = Object.values(filters).some((v) => v !== "");

  return (
    <section className="filters" aria-label="Search and filter plants">
      <label className="field">
        <span>Common name</span>
        <input
          type="search"
          placeholder="e.g. coneflower"
          value={filters.commonName}
          onChange={(e) => onChange("commonName", e.target.value)}
        />
      </label>
      <label className="field">
        <span>Scientific name</span>
        <input
          type="search"
          placeholder="e.g. Asclepias"
          value={filters.scientificName}
          onChange={(e) => onChange("scientificName", e.target.value)}
        />
      </label>
      <Select label="Sunlight" value={filters.sunlight} options={SUNLIGHT} onChange={(v) => onChange("sunlight", v)} />
      <Select label="Soil type" value={filters.soil} options={SOIL} onChange={(v) => onChange("soil", v)} />
      <Select label="Bloom season" value={filters.bloomSeason} options={BLOOM} onChange={(v) => onChange("bloomSeason", v)} />

      <div className="filters-footer">
        <p role="status">
          Showing {resultCount} {resultCount === 1 ? "plant" : "plants"}
        </p>
        {hasFilters && (
          <button type="button" className="link-button" onClick={onReset}>
            Reset filters
          </button>
        )}
      </div>
    </section>
  );
}

export default PlantFilters;
