import { useState } from "react";
import plants from "./data/plants";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PlantFilters from "./components/PlantFilters";
import PlantList from "./components/PlantList";
import PlantApiLookup from "./components/PlantApiLookup";
import Footer from "./components/Footer";

const EMPTY_FILTERS = {
  commonName: "",
  scientificName: "",
  sunlight: "",
  soil: "",
  bloomSeason: "",
};

function App() {
  const [view, setView] = useState("collection");
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  function updateFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }));
  }

  const visiblePlants = plants.filter((plant) => {
    return (
      plant.commonName.toLowerCase().includes(filters.commonName.trim().toLowerCase()) &&
      plant.scientificName.toLowerCase().includes(filters.scientificName.trim().toLowerCase()) &&
      (filters.sunlight === "" || plant.sunlight === filters.sunlight) &&
      (filters.soil === "" || plant.soil === filters.soil) &&
      (filters.bloomSeason === "" || plant.bloomSeason === filters.bloomSeason)
    );
  });

  return (
    <div className="app">
      <Header />
      <Navigation view={view} onChangeView={setView} />
      <main>
        {view === "collection" ? (
          <>
            <PlantFilters
              filters={filters}
              onChange={updateFilter}
              onReset={() => setFilters(EMPTY_FILTERS)}
              resultCount={visiblePlants.length}
            />
            <PlantList plants={visiblePlants} />
          </>
        ) : (
          <PlantApiLookup />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
