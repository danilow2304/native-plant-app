// The app's OWN data: curated native plants and the growing facts we verify.
// Photos and extra reference info come from the iNaturalist API (see usePlantPhoto).
const plants = [
  { id: 1, commonName: "Butterfly Milkweed", scientificName: "Asclepias tuberosa", sunlight: "Full sun", soil: "Sandy", bloomSeason: "Summer", height: "1-2 ft", note: "Host plant for monarch caterpillars." },
  { id: 2, commonName: "Purple Coneflower", scientificName: "Echinacea purpurea", sunlight: "Full sun", soil: "Loamy", bloomSeason: "Summer", height: "2-4 ft", note: "Seed heads feed goldfinches in winter." },
  { id: 3, commonName: "Black-eyed Susan", scientificName: "Rudbeckia hirta", sunlight: "Full sun", soil: "Clay", bloomSeason: "Summer", height: "1-3 ft", note: "Tolerates heavy clay and short droughts." },
  { id: 4, commonName: "New England Aster", scientificName: "Symphyotrichum novae-angliae", sunlight: "Full sun", soil: "Clay", bloomSeason: "Fall", height: "3-6 ft", note: "A late-season nectar source for migrating monarchs." },
  { id: 5, commonName: "Wild Bergamot", scientificName: "Monarda fistulosa", sunlight: "Full sun", soil: "Loamy", bloomSeason: "Summer", height: "2-4 ft", note: "Attracts bees, hummingbirds, and hummingbird moths." },
  { id: 6, commonName: "Virginia Bluebells", scientificName: "Mertensia virginica", sunlight: "Part shade", soil: "Loamy", bloomSeason: "Spring", height: "1-2 ft", note: "Dies back by midsummer, so pair it with ferns." },
  { id: 7, commonName: "Eastern Columbine", scientificName: "Aquilegia canadensis", sunlight: "Part shade", soil: "Rocky", bloomSeason: "Spring", height: "1-2 ft", note: "Early nectar for hummingbirds." },
  { id: 8, commonName: "Foamflower", scientificName: "Tiarella cordifolia", sunlight: "Shade", soil: "Loamy", bloomSeason: "Spring", height: "0.5-1 ft", note: "Spreads slowly into a woodland groundcover." },
  { id: 9, commonName: "Wild Ginger", scientificName: "Asarum canadense", sunlight: "Shade", soil: "Loamy", bloomSeason: "Spring", height: "0.5 ft", note: "Dense groundcover; flowers hide under the leaves." },
  { id: 10, commonName: "Cardinal Flower", scientificName: "Lobelia cardinalis", sunlight: "Part shade", soil: "Clay", bloomSeason: "Summer", height: "2-4 ft", note: "Likes consistently moist soil; hummingbird favorite." },
  { id: 11, commonName: "Joe-Pye Weed", scientificName: "Eutrochium purpureum", sunlight: "Part shade", soil: "Clay", bloomSeason: "Summer", height: "4-6 ft", note: "Tall back-of-border plant that draws swallowtails." },
  { id: 12, commonName: "Showy Goldenrod", scientificName: "Solidago speciosa", sunlight: "Full sun", soil: "Sandy", bloomSeason: "Fall", height: "2-4 ft", note: "Supports more native insects than almost any other plant." },
  { id: 13, commonName: "Little Bluestem", scientificName: "Schizachyrium scoparium", sunlight: "Full sun", soil: "Rocky", bloomSeason: "Fall", height: "2-3 ft", note: "Bunching grass with copper fall color." },
];

export default plants;
