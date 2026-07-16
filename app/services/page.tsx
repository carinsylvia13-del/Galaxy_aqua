import type { Metadata } from "next";
import Image from "next/image";
import { ContactStrip } from "@/components/contact-strip";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { serviceCatalog } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "RO plants, filtration, STP, ETP, water softening, recycling, quality checks, and maintenance support from Galaxy Aqua Solutions."
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Water-treatment support matched to your site."
              copy="RO, softening, filtration, STP, ETP and maintenance for homes and commercial sites."
              level="h1"
            />
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[8px]">
            <Image
              src="/images/hero-water-treatment.png"
              alt="Illustrative RO and water-treatment plant equipment"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Catalog"
            title="Core solutions"
            copy="Services for residential, commercial and industrial water requirements."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceCatalog.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                copy={service.copy}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactStrip
        title="Have a service requirement?"
        copy="Call or message us with the site and water details."
      />
    </>
  );
}
