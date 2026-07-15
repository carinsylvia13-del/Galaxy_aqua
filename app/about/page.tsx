import type { Metadata } from "next";
import Image from "next/image";
import { ContactStrip } from "@/components/contact-strip";
import { SectionHeading } from "@/components/section-heading";
import { business, trustPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet David Santhamohan, sole founder of Galaxy Aqua Solutions, a Chennai water-treatment business established in 2004."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Founder"
              title="Good water guidance should feel clear."
              copy="David Santhamohan is the sole founder of Galaxy Aqua Solutions. After beginning his industry career in 1988 at Titanium Equipment and Anode Manufacturing Company (TEAM), he established the organisation in 2004."
              level="h1"
            />
            <div className="mt-7 rounded-xl border border-aqua-line bg-aqua-mist p-6 text-sm leading-7 text-slate-700">
              <p>
                From Sembakkam near Tambaram, the company manufactures, supplies and services
                water-treatment systems for domestic, commercial and industrial requirements.
                Solutions can be customized by capacity, materials and dimensions to suit the
                source water and operating conditions of each site.
              </p>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="border-l-2 border-[#1699a1] pl-4">
                <dt className="text-xs font-medium text-slate-600">Established</dt>
                <dd className="mt-1 text-2xl font-semibold text-aqua-ink">2004</dd>
              </div>
              <div className="border-l-2 border-[#1699a1] pl-4">
                <dt className="text-xs font-medium text-slate-600">Domestic customers</dt>
                <dd className="mt-1 text-2xl font-semibold text-aqua-ink">1,000+</dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#bfe9e3]" aria-hidden="true" />
            <Image
              src="/images/founder-david-santhamohan.png"
              alt="David Santhamohan, sole founder of Galaxy Aqua Solutions"
              width={1104}
              height={1392}
              priority
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="relative rounded-[1.6rem] object-cover shadow-soft"
            />
            <div className="absolute -bottom-5 right-3 rounded-full bg-aqua-deep px-5 py-4 text-center text-white shadow-soft">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.15em]">Founded</span>
              <strong className="mt-1 block text-2xl">2004</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Principles"
            title="Clear, reachable, and responsible."
            copy="The company works as a manufacturer, supplier and service provider, with recommendations shaped around water quality, usage, maintenance and the needs of each site."
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
