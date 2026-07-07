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
              copy="Galaxy Aqua Solutions helps customers choose, maintain, and improve treatment systems without making the first conversation complicated."
              level="h1"
            />
            <div className="mt-7 grid gap-4 rounded-[8px] border border-aqua-line bg-aqua-mist p-5 text-sm leading-7 text-slate-700">
              <p>
                Share the source water, daily usage, site type, and current issue. The
                recommendation can then focus on the right treatment path rather than a generic
                product list.
              </p>
            </div>
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
            copy="A practical service menu for residential, apartment, commercial, and industrial water-treatment requirements."
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

      <section className="bg-white py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-[8px]">
            <Image
              src="/images/water-process.png"
              alt="Illustrative filtration process moving from raw water to clear treated water"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Approach"
              title="Treatment choices should follow the water, not the other way around."
              copy="RO, filtration, softening, STP, and ETP systems work best when they are selected after understanding source quality, capacity needs, disposal or reuse goals, and service access."
            />
            <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-700">
              <p className="rounded-[8px] border border-aqua-line bg-aqua-mist p-5">
                For new installations, the first step is a clear requirement review.
              </p>
              <p className="rounded-[8px] border border-aqua-line bg-aqua-mist p-5">
                For existing systems, the first step is checking symptoms, service history,
                filters, membranes, media, and actual output quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip title="Have a specific service requirement?" copy="Call or WhatsApp the site details and Galaxy Aqua Solutions will help identify the right next step." />
    </>
  );
}
