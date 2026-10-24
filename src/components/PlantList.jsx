import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  if (plants.length === 0) {
    return (
      <p className="empty">
        No plants match these filters. Reset the filters or try a different name.
      </p>
    );
  }

  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default PlantList;
