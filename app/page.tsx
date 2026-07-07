import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { business, primaryServices, processSteps, trustPoints } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-water-treatment.png"
          alt="Illustrative modern reverse osmosis and water-treatment equipment in a clean facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="image-overlay absolute inset-0" />
        <div className="page-shell hero-min relative z-10 flex items-center py-16">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
              Chennai Water Treatment Support
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-normal md:text-7xl">
              Galaxy Aqua Solutions
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/84 md:text-lg">
              Practical RO plants, water treatment, STP, ETP, filtration, softening,
              recycling, and maintenance support for homes, apartments, commercial sites,
              and small industries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-aqua-deep"
              >
                <Phone aria-hidden="true" size={18} />
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsappHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
              >
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="page-shell grid gap-4 md:grid-cols-3">
          <div className="rounded-[8px] border border-aqua-line bg-aqua-mist p-5">
            <p className="text-sm font-semibold text-aqua-deep">Local base</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sembakkam, Tambaram, Chennai
            </p>
          </div>
          <div className="rounded-[8px] border border-aqua-line bg-aqua-mist p-5">
            <p className="text-sm font-semibold text-aqua-deep">Core work</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              RO, water treatment, STP, ETP, filtration
            </p>
          </div>
          <div className="rounded-[8px] border border-aqua-line bg-aqua-mist p-5">
            <p className="text-sm font-semibold text-aqua-deep">Fast enquiry</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Call or WhatsApp for site-specific guidance
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Solutions"
            title="Clean systems for everyday water challenges."
            copy="The site, water source, usage pattern, and service expectations shape every recommendation. Galaxy Aqua Solutions keeps the path clear and practical."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {primaryServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                copy={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center gap-2 rounded-[8px] bg-aqua-deep px-5 text-sm font-semibold text-white transition hover:bg-[#064D55]"
            >
              View all services
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[8px]">
            <Image
              src="/images/water-process.png"
              alt="Illustrative water-treatment process showing raw water, filtration media, membranes, and clear treated water"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Process"
              title="A simple path from water concern to working solution."
              copy="Good treatment starts with a clear diagnosis. The goal is not to oversell machinery, but to match the plant or service plan to the water and the site."
            />
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[8px] border border-aqua-line bg-aqua-mist p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-aqua-deep text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm font-medium leading-6 text-aqua-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Why Galaxy Aqua"
            title="Built for customers who want clear answers."
            copy="The website is intentionally calm, direct, and easy to scan because water-treatment decisions already have enough technical noise."
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
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Service Area"
              title="Based in Sembakkam, serving Chennai and nearby sites."
              copy="Reach out with your water source, approximate usage, and requirement. Galaxy Aqua Solutions can guide the next practical step."
            />
            <div className="mt-7 flex gap-3 rounded-[8px] border border-aqua-line bg-aqua-mist p-5 text-sm leading-6 text-slate-700">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-aqua-deep" size={20} />
              <span>{business.address}</span>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[8px]">
            <Image
              src="/images/technician-service.png"
              alt="Illustrative technician checking water quality beside treatment equipment"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
