import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { ProductCatalog } from "@/components/product-catalog";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="page-shell grid min-h-[calc(100svh-72px)] gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aqua-deep">
              Water expertise since 2004
            </p>
            <h1 className="mt-5 max-w-3xl break-words text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-aqua-ink sm:text-6xl lg:text-[5.8rem]">
              Better water.
              <span className="block text-[#087c84]">Better everyday.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              RO purification, softening and commercial water-treatment systems selected for
              your source water and daily requirement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-aqua-deep px-6 text-sm font-semibold text-white transition hover:bg-[#064D55]"
              >
                View featured products
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-aqua-line bg-white px-6 text-sm font-semibold text-aqua-ink transition hover:border-aqua-deep"
              >
                Contact us
              </Link>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-aqua-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium text-slate-600">Established</dt>
                <dd className="mt-1 text-xl font-semibold text-aqua-ink">2004</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-600">Domestic customers</dt>
                <dd className="mt-1 text-xl font-semibold text-aqua-ink">1,000+</dd>
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
                    alt="Space-saving domestic RO purifier"
                    fill
                    priority
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-contain p-5"
                  />
                </div>
                <div className="rounded-2xl bg-aqua-deep p-5 text-white">
                  <CheckCircle2 aria-hidden="true" size={22} />
                  <p className="mt-4 text-lg font-semibold">Products, installation and service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog variant="featured" />

      <section className="bg-white py-14 sm:py-16">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-aqua-line bg-aqua-mist p-6 sm:p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-deep">
                Treatment services
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-aqua-ink sm:text-3xl">
                ETP and sewage treatment plant services are available.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-aqua-deep px-6 text-sm font-semibold text-white transition hover:bg-[#064D55]"
            >
              View services
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip
        title="Tell us what your site needs."
        copy="Share the source water and daily requirement for a practical recommendation."
      />
    </>
  );
}
