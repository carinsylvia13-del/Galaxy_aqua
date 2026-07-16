import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Galaxy Aqua Solutions purifiers, water dispensers, softeners, commercial treatment systems, membranes and media."
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-aqua-line bg-white py-14 sm:py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-deep">
              Complete product range
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-aqua-ink sm:text-6xl">
              Find the right solution for your water.
            </h1>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-slate-700">
              Review the full catalogue by application, open any product for practical
              selection details, and enquire directly when you find a suitable starting point.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-aqua-line bg-white px-6 text-sm font-semibold text-aqua-ink transition hover:border-aqua-deep"
            >
              Get a recommendation
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <ProductCatalog />

      <ContactStrip
        title="Need help narrowing the catalogue?"
        copy="Share your source water, site type and daily requirement. We will help identify a suitable treatment path and capacity."
      />
    </>
  );
}
