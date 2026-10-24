import usePlantPhoto from "../hooks/usePlantPhoto";

// Our database supplies the growing facts (props); the API supplies the photo.
function PlantCard({ plant }) {
  const { photo, loading, error } = usePlantPhoto(plant.scientificName);

  return (
    <article className="plant-card">
      <div className="photo">
        {loading && <span className="photo-note">Loading photo...</span>}
        {!loading && photo && <img src={photo} alt={plant.commonName} />}
        {!loading && !photo && (
          <span className="photo-note">
            {error ? "Photo unavailable right now" : "No photo found"}
          </span>
        )}
      </div>
      <div className="plant-body">
        <h3>{plant.commonName}</h3>
        <p className="latin">{plant.scientificName}</p>
        <dl>
          <div><dt>Sunlight</dt><dd>{plant.sunlight}</dd></div>
          <div><dt>Soil</dt><dd>{plant.soil}</dd></div>
          <div><dt>Blooms</dt><dd>{plant.bloomSeason}</dd></div>
          <div><dt>Height</dt><dd>{plant.height}</dd></div>
        </dl>
        <p className="note">{plant.note}</p>
      </div>
    </article>
  );
}

export default PlantCard;
