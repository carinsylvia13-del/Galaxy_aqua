import {
  BadgeCheck,
  Building2,
  Droplets,
  Filter,
  FlaskConical,
  Gauge,
  Leaf,
  Recycle,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Wrench
} from "lucide-react";

export const business = {
  name: "Galaxy Aqua Solutions",
  shortName: "Galaxy Aqua",
  phoneDisplay: "098402 58659",
  phoneHref: "+919840258659",
  whatsappHref: "https://wa.me/919840258659",
  address:
    "2, 6th St, Navaneethan Nagar, Thirumalai Nagar, Sembakkam, Chennai, Tambaram, Tamil Nadu 600073",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=2%2C%206th%20St%2C%20Navaneethan%20Nagar%2C%20Thirumalai%20Nagar%2C%20Sembakkam%2C%20Chennai%2C%20Tambaram%2C%20Tamil%20Nadu%20600073",
  email: ""
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const primaryServices = [
  {
    title: "RO Plants",
    description:
      "Commercial and industrial reverse osmosis systems planned around source-water quality, usage, and maintenance needs.",
    icon: Droplets
  },
  {
    title: "Water Treatment Plants",
    description:
      "Treatment setups for apartments, offices, institutions, hotels, and small industries that need dependable water quality.",
    icon: Filter
  },
  {
    title: "Sewage Treatment Plants",
    description:
      "STP planning and support for sites that need responsible wastewater treatment and reuse-ready output.",
    icon: Recycle
  },
  {
    title: "Effluent Treatment",
    description:
      "ETP solutions for process water and wastewater streams where safe, practical handling is essential.",
    icon: FlaskConical
  }
];

export const serviceCatalog = [
  {
    title: "Reverse Osmosis Systems",
    copy:
      "RO systems for drinking water, process water, packaged water, and commercial utility use.",
    icon: Droplets
  },
  {
    title: "Pressure Sand Filtration",
    copy:
      "Filtration for suspended particles, turbidity reduction, and better pre-treatment performance.",
    icon: Filter
  },
  {
    title: "Water Softening",
    copy:
      "Softener systems that reduce hardness and help protect plumbing, boilers, and equipment.",
    icon: ShowerHead
  },
  {
    title: "STP And Reuse",
    copy:
      "Sewage treatment support for apartments, commercial buildings, and reuse-oriented facilities.",
    icon: Recycle
  },
  {
    title: "ETP Support",
    copy:
      "Effluent treatment guidance for safe handling of industrial and process wastewater.",
    icon: FlaskConical
  },
  {
    title: "Maintenance And Service",
    copy:
      "Filter changes, membrane checks, media replacement, troubleshooting, and regular service visits.",
    icon: Wrench
  },
  {
    title: "Water Quality Checks",
    copy:
      "Practical testing-led recommendations before installation, service, or plant upgrades.",
    icon: Gauge
  },
  {
    title: "Eco-Friendly Reuse",
    copy:
      "Systems planned with lower waste, reuse potential, and operational practicality in mind.",
    icon: Leaf
  }
];

export const trustPoints = [
  {
    title: "Site-led recommendations",
    copy: "We start with the water source, usage pattern, and maintenance realities.",
    icon: ShieldCheck
  },
  {
    title: "Clear service categories",
    copy: "RO, filtration, STP, ETP, softening, recycling, and service support.",
    icon: Sparkles
  },
  {
    title: "Chennai local support",
    copy: "A Tambaram-area business built for reachable, practical customer support.",
    icon: Building2
  },
  {
    title: "Clean handover",
    copy: "Straightforward guidance for operation, care, and next service steps.",
    icon: BadgeCheck
  }
];

export const processSteps = [
  "Understand water source and usage",
  "Recommend the right treatment path",
  "Install or service with a clean handover",
  "Support maintenance and water-quality checks"
];
