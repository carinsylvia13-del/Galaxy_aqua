export type ProductCategory =
  | "purifiers"
  | "dispensers"
  | "softeners"
  | "commercial"
  | "components";

export type Product = {
  name: string;
  category: ProductCategory;
  description: string;
  idealFor: string;
  selection: string;
  image: string;
  featured?: boolean;
};

export const categoryLabels: Record<ProductCategory, string> = {
  purifiers: "Home purification",
  dispensers: "Water dispensers",
  softeners: "Softeners & filters",
  commercial: "Commercial systems",
  components: "Membranes & media"
};

export const products: Product[] = [
  {
    name: "Floor-Standing RO Purifier",
    category: "purifiers",
    description: "An integrated purifier and dispenser for convenient everyday drinking-water access.",
    idealFor: "Homes, clinics and compact workplaces",
    selection: "Confirm source-water TDS and daily drinking-water use.",
    image: "3f398381-d8db-47d1-a26f-9f69ff5f003d.JPG",
    featured: true
  },
  {
    name: "Compact Domestic RO Purifier",
    category: "purifiers",
    description: "A compact reverse-osmosis package for domestic drinking-water purification.",
    idealFor: "Kitchens and small households",
    selection: "Check installation space, inlet pressure and source water.",
    image: "4287e7c6-e383-4325-8238-464af3596652.JPG"
  },
  {
    name: "Space-Saving RO Purifier",
    category: "purifiers",
    description: "A space-conscious domestic purifier package for routine kitchen use.",
    idealFor: "Apartments and compact kitchens",
    selection: "Confirm storage, recovery and service-access requirements.",
    image: "50d646ab-7a5b-4898-b536-38f66973c00b.JPG"
  },
  {
    name: "Advanced Domestic RO Purifier",
    category: "purifiers",
    description: "A feature-rich domestic purifier package for convenient drinking-water treatment.",
    idealFor: "Families wanting an integrated purifier",
    selection: "Choose after checking TDS, hardness and expected daily use.",
    image: "a133fd67-dbce-4b31-8637-88356399bf45.JPG"
  },
  {
    name: "BGT Under-Sink RO System",
    category: "purifiers",
    description: "A concealed under-counter purifier with a storage tank and dedicated faucet.",
    idealFor: "Minimal kitchens and premium counters",
    selection: "Allow cabinet space for the purifier, tank and service access.",
    image: "c2b10ca4-a593-48a0-aa3d-6a85f97931dd.JPG"
  },
  {
    name: "Stainless Water Dispenser",
    category: "dispensers",
    description: "A durable stainless-steel dispenser for convenient multi-user drinking-water access.",
    idealFor: "Schools, offices and shared facilities",
    selection: "Size cooling and storage around peak-hour demand.",
    image: "160f4d66-acdb-4c53-8f9e-73bd7f71c9b4.JPG",
    featured: true
  },
  {
    name: "Twin-Outlet Water Dispenser",
    category: "dispensers",
    description: "A floor-standing dispenser with two outlets for busy shared spaces.",
    idealFor: "Workplaces, retail and public areas",
    selection: "Confirm desired temperature options and user volume.",
    image: "1b749f96-4e1b-4849-877c-89b4c3b9cdaa.JPG"
  },
  {
    name: "Hot & Cold Water Dispenser",
    category: "dispensers",
    description: "A compact countertop dispenser offering convenient hot and cold water service.",
    idealFor: "Pantries, reception areas and clinics",
    selection: "Review heating, cooling and supply-water requirements.",
    image: "235fcd52-d6d3-4e66-b3eb-dfc37625aecb.JPG"
  },
  {
    name: "Floor-Standing Stainless Water Dispenser",
    category: "dispensers",
    description: "A stainless-steel water dispenser built for dependable everyday use.",
    idealFor: "Institutions and commercial premises",
    selection: "Match outlet count and cooling recovery to expected demand.",
    image: "3072fa2c-ee80-48ac-a67a-e17a97e27bdb.JPG"
  },
  {
    name: "Compact Hot-Water Unit",
    category: "dispensers",
    description: "A space-saving wall-mounted unit for readily available treated hot water.",
    idealFor: "Small pantries and service counters",
    selection: "Confirm electrical load, mounting and required output.",
    image: "30ff9236-cc56-48cc-87ea-1467acf9a1ad.JPG"
  },
  {
    name: "Sand Filter & Softener System",
    category: "softeners",
    description: "A paired treatment system for suspended matter and hard-water scale control.",
    idealFor: "Homes, apartments and small facilities",
    selection: "Media and vessel size depend on flow, hardness and turbidity.",
    image: "2114990d-b4f4-44ac-907e-d425a7a60d7c.JPG"
  },
  {
    name: "Automatic Water Softener",
    category: "softeners",
    description: "An automated ion-exchange softener for reducing hardness in incoming water.",
    idealFor: "Whole-home and utility-water treatment",
    selection: "Test hardness and calculate peak flow before sizing.",
    image: "2a4108c0-6595-4d8f-9663-284cfdbb3fe5.JPG",
    featured: true
  },
  {
    name: "Single-Tank Water Softener",
    category: "softeners",
    description: "A streamlined softening system that helps limit hard-water scale formation.",
    idealFor: "Homes and light commercial sites",
    selection: "Confirm regeneration frequency, salt access and peak flow.",
    image: "50e8c38f-2363-4a3e-ab4d-20b3fe9c27f6.JPG"
  },
  {
    name: "Cabinet Water Softener",
    category: "softeners",
    description: "An automatic cabinet-style softener with a tidy enclosed footprint.",
    idealFor: "Residential utility rooms and premium spaces",
    selection: "Plan drainage, salt refilling and maintenance clearance.",
    image: "b764ce89-8aa4-41ac-982f-16cf39e90336.JPG"
  },
  {
    name: "Premium Cabinet Softener",
    category: "softeners",
    description: "An enclosed automatic softener for hard-water control in a clean residential form.",
    idealFor: "Villas, apartments and compact plant rooms",
    selection: "Choose capacity from hardness, occupancy and daily use.",
    image: "ebc4069f-574a-48a2-b9fe-c2a8e7786b46.JPG"
  },
  {
    name: "Dual-Stage Filter System",
    category: "commercial",
    description: "A rugged twin-housing system for staged sediment and contaminant control.",
    idealFor: "Pre-treatment and process-water applications",
    selection: "Cartridge choice depends on source quality and target flow.",
    image: "3a4bcd03-6382-4cb1-9591-5c97cba8fc17.JPG"
  },
  {
    name: "PGM Stainless Purifier",
    category: "commercial",
    description: "A stainless commercial purifier for higher-demand treated drinking water.",
    idealFor: "Offices, schools and institutions",
    selection: "Confirm peak demand, inlet quality and outlet requirement.",
    image: "5cb49ded-e2fb-472c-bffa-da6d7870ba48.JPG"
  },
  {
    name: "High-Capacity Stainless Water Dispenser",
    category: "commercial",
    description: "A high-capacity stainless station with multiple dispensing points.",
    idealFor: "Factories, campuses and shared facilities",
    selection: "Match purification, storage and dispensing outlets to shift demand.",
    image: "7c2d8276-fbfd-417d-9d48-b045cbb5bba9.JPG"
  },
  {
    name: "Compact Commercial RO Plant",
    category: "commercial",
    description: "An open-frame reverse-osmosis plant designed for straightforward service access.",
    idealFor: "Restaurants, offices and light industry",
    selection: "Capacity follows feed-water analysis and hourly demand.",
    image: "a134e12e-9807-47fb-abf5-60576c6e1564.JPG",
    featured: true
  },
  {
    name: "250 LPH Commercial RO Plant",
    category: "commercial",
    description: "A packaged reverse-osmosis plant for higher-volume treated-water production.",
    idealFor: "Commercial and institutional applications",
    selection: "Rated at 250 LPH; actual output depends on feed water and operating conditions.",
    image: "b0869941-68fd-4587-b9eb-f63a0a33903f.JPG"
  },
  {
    name: "Portable Demineralisation Plant",
    category: "commercial",
    description: "A compact demineralisation unit for lower-mineral process-water requirements.",
    idealFor: "Labs, service applications and light process use",
    selection: "Confirm feed analysis, target conductivity and regeneration needs.",
    image: "db9ebf4c-2c4e-4446-a338-d823b8a177ce.JPG"
  },
  {
    name: "CSM RO Membrane",
    category: "components",
    description: "A high-rejection reverse-osmosis membrane element for dissolved-solids reduction.",
    idealFor: "Compatible RO purifier servicing",
    selection: "Match size, housing, flow and system specification before replacement.",
    image: "1595f466-2335-4e0f-b460-938be026d4ec.JPG"
  },
  {
    name: "ORG Scale-Free Cartridge",
    category: "components",
    description: "A compact anti-scale cartridge that helps protect downstream equipment.",
    idealFor: "Point-of-use equipment protection",
    selection: "Confirm connection size, flow and replacement interval.",
    image: "23e1c64d-b5ee-4ba8-8d73-25c3cec2b5dd.JPG"
  },
  {
    name: "Ruzo Alkaline Cartridge",
    category: "components",
    description: "A post-treatment cartridge used as an alkaline finishing stage.",
    idealFor: "Compatible domestic purifier upgrades",
    selection: "Check purifier compatibility and required replacement cycle.",
    image: "3ed83e2c-46c0-400e-ba9c-127fe6a317f7.JPG"
  },
  {
    name: "JCI RO Membrane",
    category: "components",
    description: "A replacement reverse-osmosis membrane for compatible purifier systems.",
    idealFor: "Domestic RO maintenance",
    selection: "Match membrane rating and housing before installation.",
    image: "4d874ca2-fe52-4872-9861-c6fa8844051c.JPG"
  },
  {
    name: "DuPont FilmTec RO Membrane",
    category: "components",
    description: "A FilmTec reverse-osmosis element for efficient dissolved-solids removal.",
    idealFor: "Compatible RO systems requiring membrane replacement",
    selection: "Confirm model, housing dimensions and operating specification.",
    image: "filmtec-membrane.JPG"
  }
];

export const featuredProducts = products.filter((product) => product.featured);
