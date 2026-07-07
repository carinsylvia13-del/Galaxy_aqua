import type { Metadata } from "next";
import Image from "next/image";
import { ContactStrip } from "@/components/contact-strip";
import { SectionHeading } from "@/components/section-heading";
import { business, trustPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Galaxy Aqua Solutions, a Chennai-based water-treatment business serving homes, apartments, commercial sites, and small industries."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A local Chennai business focused on practical water solutions."
              copy="Galaxy Aqua Solutions helps customers make sense of RO plants, filtration, treatment systems, wastewater handling, and maintenance decisions with direct, site-aware guidance."
              level="h1"
            />
            <div className="mt-7 rounded-[8px] border border-aqua-line bg-aqua-mist p-6 text-sm leading-7 text-slate-700">
              <p>
                The company is based in Sembakkam near Tambaram and supports water-treatment
                needs across local homes, apartments, commercial spaces, and smaller industrial
                facilities. The priority is simple: understand the site, recommend clearly, and
                keep the system serviceable.
              </p>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[8px]">
            <Image
              src="/images/technician-service.png"
              alt="Illustrative technician inspecting water-treatment equipment"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Principles"
            title="Clear, reachable, and responsible."
            copy="The brand should feel calm and trustworthy because customers are usually trying to solve a real operational problem, not browse a product marketplace."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article key={point.title} className="rounded-[8px] border border-aqua-line bg-white p-6 shadow-sm">
                <point.icon aria-hidden="true" className="text-aqua-deep" size={24} />
                <h3 className="mt-5 text-lg font-semibold text-aqua-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{point.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[8px]">
            <Image
              src="/images/water-process.png"
              alt="Illustrative water-treatment flow from raw water to clear output"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Based near Tambaram for practical local access."
              copy={business.address}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-aqua-deep px-5 text-sm font-semibold text-white"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-aqua-line bg-aqua-mist px-5 text-sm font-semibold text-aqua-deep"
              >
                Open map
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
