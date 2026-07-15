import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { ProductCatalog } from "@/components/product-catalog";
import { business } from "@/lib/site";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    copy: "Share your source water, site type, daily use and the problem you want to solve."
  },
  {
    number: "02",
    title: "Recommend",
    copy: "We narrow the treatment stages and capacity around the water—not a generic product pitch."
  },
  {
    number: "03",
    title: "Support",
    copy: "Get a clear installation path, operating guidance and practical service support."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="page-shell grid min-h-[calc(100svh-72px)] gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aqua-deep">
              Water expertise since 2014
            </p>
            <h1 className="mt-5 max-w-3xl break-words text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-aqua-ink sm:text-6xl lg:text-[5.8rem]">
              Better water.
              <span className="block text-[#087c84]">Better everyday.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Purification, filtration, softening and commercial water systems for homes,
              workplaces and industry—selected around your source water and actual usage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-aqua-deep px-6 text-sm font-semibold text-white transition hover:bg-[#064D55]"
              >
                Explore products
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-aqua-line bg-white px-6 text-sm font-semibold text-aqua-ink transition hover:border-aqua-deep"
              >
                Find your solution
              </Link>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-aqua-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium text-slate-600">Established</dt>
                <dd className="mt-1 text-xl font-semibold text-aqua-ink">2014</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-600">Catalogue</dt>
                <dd className="mt-1 text-xl font-semibold text-aqua-ink">5 categories</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-600">Local support</dt>
                <dd className="mt-1 text-xl font-semibold text-aqua-ink">Chennai</dd>
              </div>
            </dl>
          </div>

          <div className="relative min-w-0 rounded-[2rem] bg-[#e8f5f3] p-5 sm:p-8">
            <div className="grid min-w-0 gap-4 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-white sm:min-h-[520px]">
                <Image
                  src="/images/products/a134e12e-9807-47fb-abf5-60576c6e1564.JPG"
                  alt="Compact commercial reverse-osmosis plant"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[230px] overflow-hidden rounded-2xl bg-white sm:min-h-0">
                  <Image
                    src="/images/products/50d646ab-7a5b-4898-b536-38f66973c00b.JPG"
                    alt="Mitty Nano domestic RO purifier"
                    fill
                    priority
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-contain p-5"
                  />
                </div>
                <div className="rounded-2xl bg-aqua-deep p-5 text-white">
                  <CheckCircle2 aria-hidden="true" size={22} />
                  <p className="mt-4 text-lg font-semibold">From assessment to aftercare.</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    One clear path from water concern to serviceable solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-deep">
              Why Galaxy Aqua
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-aqua-ink sm:text-5xl">
              The right treatment begins with understanding the water.
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-base leading-8 text-slate-700">
              Since 2014, Galaxy Aqua Solutions has helped customers navigate purification,
              filtration, softening and dispensing with direct, site-aware guidance. Compare
              categories here, then speak with us to confirm the treatment and capacity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-aqua-deep px-5 text-sm font-semibold text-white"
              >
                <Phone aria-hidden="true" size={17} />
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-aqua-line bg-white px-5 text-sm font-semibold text-aqua-ink"
              >
                <MessageCircle aria-hidden="true" size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog />

      <section id="founder" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#bfe9e3]" aria-hidden="true" />
            <Image
              src="/images/founder-david-santhamohan.png"
              alt="David Santhamohan, sole founder of Galaxy Aqua Solutions"
              width={1104}
              height={1392}
              className="relative rounded-[1.6rem] object-cover shadow-soft"
              sizes="(min-width: 1024px) 34vw, 90vw"
            />
            <div className="absolute -bottom-5 right-3 rounded-full bg-aqua-deep px-5 py-4 text-center text-white shadow-soft sm:right-[-1.25rem]">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.15em]">Founded</span>
              <strong className="mt-1 block text-2xl">2014</strong>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-deep">
              Founder&apos;s note
            </p>
            <h2 className="mt-4 break-words text-4xl font-semibold tracking-[-0.04em] text-aqua-ink sm:text-5xl">
              Good water guidance should feel clear.
            </h2>
            <blockquote className="mt-7 border-l-4 border-[#1699a1] pl-5 text-xl font-semibold leading-8 text-aqua-ink sm:text-2xl">
              “Every customer deserves a solution that fits their water, their space and the way
              they actually live or work.”
            </blockquote>
            <div className="mt-7 grid gap-4 text-base leading-8 text-slate-700">
              <p>
                <strong className="text-aqua-ink">David Santhamohan</strong> is the sole founder
                of Galaxy Aqua Solutions. He started the organisation in 2014 to make dependable
                water-treatment products and practical guidance easier to access.
              </p>
              <p>
                The business brings domestic, commercial and component solutions into one
                considered portfolio, supported from Sembakkam for customers across Chennai and
                nearby sites.
              </p>
            </div>
            <p className="mt-7 font-semibold text-aqua-ink">David Santhamohan</p>
            <p className="mt-1 text-sm text-slate-600">Sole Founder · Galaxy Aqua Solutions</p>
          </div>
        </div>
      </section>

      <section className="bg-aqua-deep py-16 text-white sm:py-24">
        <div className="page-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9fe1db]">
            How we help
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A clearer route to better water.
          </h2>
          <div className="mt-10 grid border-t border-white/20 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={`py-8 md:px-8 ${index === 0 ? "md:pl-0" : "border-t border-white/20 md:border-l md:border-t-0"}`}
              >
                <span className="text-xs font-bold text-[#9fe1db]">{step.number}</span>
                <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip
        title="Not sure which system fits?"
        copy="Share your source water, daily requirement and site type. We will help identify the right next step."
      />
    </>
  );
}
