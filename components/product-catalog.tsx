"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, MessageCircle, SlidersHorizontal } from "lucide-react";
import { business } from "@/lib/site";
import {
  categoryLabels,
  products,
  type ProductCategory
} from "@/lib/products";

type ActiveCategory = "all" | ProductCategory;
type SiteType = "home" | "office" | "commercial" | "industrial";
type Concern = "drinking" | "hardness" | "shared" | "process" | "replacement";

const filterOptions: Array<{ value: ActiveCategory; label: string }> = [
  { value: "all", label: "All products" },
  ...Object.entries(categoryLabels).map(([value, label]) => ({
    value: value as ProductCategory,
    label
  }))
];

function getRecommendation(site: SiteType, concern: Concern) {
  if (concern === "hardness") {
    return {
      category: "softeners" as const,
      copy: "Start with softeners and filtration. A hardness and flow test will confirm vessel and media sizing."
    };
  }

  if (concern === "shared") {
    return {
      category: "dispensers" as const,
      copy: "Start with dispensers. Peak users, tap count, storage and cooling recovery will determine the right model."
    };
  }

  if (concern === "process") {
    return {
      category: "commercial" as const,
      copy: "Start with commercial systems. Feed-water analysis, hourly demand and target quality are essential before selection."
    };
  }

  if (concern === "replacement") {
    return {
      category: "components" as const,
      copy: "Start with membranes and media. Bring the existing model number or housing specification to confirm compatibility."
    };
  }

  if (site === "home") {
    return {
      category: "purifiers" as const,
      copy: "Start with home purification. Source-water TDS, hardness, kitchen space and daily use will narrow the choice."
    };
  }

  if (site === "office") {
    return {
      category: "dispensers" as const,
      copy: "Start with a dispenser or integrated purifier. User count and peak-hour demand will determine capacity."
    };
  }

  return {
    category: "commercial" as const,
    copy: "Start with commercial systems. A site review will determine treatment stages, capacity and service access."
  };
}

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("all");
  const [siteType, setSiteType] = useState<SiteType>("home");
  const [concern, setConcern] = useState<Concern>("drinking");
  const [recommendation, setRecommendation] = useState<string>("");

  const visibleProducts = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  function submitGuide(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = getRecommendation(siteType, concern);
    setActiveCategory(next.category);
    setRecommendation(next.copy);
  }

  return (
    <section id="products" className="scroll-mt-24 bg-[#eef7f5] py-16 sm:py-24">
      <div className="page-shell min-w-0">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-deep">
              Product catalogue
            </p>
            <h2 className="mt-4 break-words text-4xl font-semibold tracking-[-0.04em] text-aqua-ink sm:text-5xl lg:text-6xl">
              Solutions, neatly sorted.
            </h2>
          </div>
          <p className="min-w-0 max-w-xl text-base leading-7 text-slate-700">
            Compare by application, then speak with us before choosing capacity or treatment stages.
            Source water and actual usage should guide every final recommendation.
          </p>
        </div>

        <form
          onSubmit={submitGuide}
          className="mt-10 rounded-2xl border border-aqua-line bg-white p-5 shadow-sm sm:p-7"
          aria-labelledby="selector-heading"
        >
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua-deep text-white">
              <SlidersHorizontal aria-hidden="true" size={19} />
            </span>
            <div>
              <h3 id="selector-heading" className="text-xl font-semibold text-aqua-ink">
                Find a sensible starting point
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Two quick answers will narrow the catalogue. We will confirm the final system after understanding your water.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <label className="grid gap-2 text-sm font-semibold text-aqua-ink">
              Where will it be used?
              <select
                value={siteType}
                onChange={(event) => setSiteType(event.target.value as SiteType)}
                className="min-h-12 min-w-0 rounded-xl border border-aqua-line bg-aqua-mist px-4 text-base font-normal text-aqua-ink"
              >
                <option value="home">Home</option>
                <option value="office">Office or clinic</option>
                <option value="commercial">Commercial site</option>
                <option value="industrial">Industrial or process site</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-aqua-ink">
              What do you need to solve?
              <select
                value={concern}
                onChange={(event) => setConcern(event.target.value as Concern)}
                className="min-h-12 min-w-0 rounded-xl border border-aqua-line bg-aqua-mist px-4 text-base font-normal text-aqua-ink"
              >
                <option value="drinking">Drinking-water purification</option>
                <option value="hardness">Hard water or scale</option>
                <option value="shared">Shared drinking-water access</option>
                <option value="process">High-volume or process water</option>
                <option value="replacement">Replacement membrane or media</option>
              </select>
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-aqua-deep px-5 text-sm font-semibold text-white transition hover:bg-[#064D55]"
            >
              Show recommendation
            </button>
          </div>

          {recommendation ? (
            <div
              className="mt-5 flex gap-3 rounded-xl border border-[#b8d8d2] bg-[#f0faf7] p-4 text-sm leading-6 text-aqua-ink"
              aria-live="polite"
            >
              <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-aqua-deep" size={19} />
              <p>{recommendation}</p>
            </div>
          ) : null}
        </form>

        <div className="mt-9 flex min-w-0 flex-wrap gap-2" role="group" aria-label="Filter products">
          {filterOptions.map((filter) => {
            const selected = activeCategory === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setActiveCategory(filter.value);
                  setRecommendation("");
                }}
                className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${
                  selected
                    ? "border-aqua-deep bg-aqua-deep text-white"
                    : "border-[#bfd7d2] bg-transparent text-aqua-ink hover:border-aqua-deep hover:bg-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-sm font-medium text-slate-700" aria-live="polite">
          Showing {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
        </p>

        <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => {
            const message = `Hello Galaxy Aqua Solutions, I would like guidance about ${product.name}. My site type and water requirement are:`;
            return (
              <article
                key={product.name}
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-aqua-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-[#edf5f3] p-5">
                  <Image
                    src={`/images/products/${product.image}`}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-5"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-aqua-deep">
                    {categoryLabels[product.category]}
                  </p>
                  <h3 className="mt-2 break-words text-lg font-semibold text-aqua-ink">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <dl className="mt-5 grid gap-3 border-t border-aqua-line pt-4 text-sm">
                    <div>
                      <dt className="font-semibold text-aqua-ink">Best for</dt>
                      <dd className="mt-1 leading-5 text-slate-600">{product.idealFor}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-aqua-ink">Selection note</dt>
                      <dd className="mt-1 leading-5 text-slate-600">{product.selection}</dd>
                    </div>
                  </dl>
                  <a
                    href={`${business.whatsappHref}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-aqua-deep px-4 text-sm font-semibold text-white transition hover:bg-[#064D55]"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                  >
                    <MessageCircle aria-hidden="true" size={17} />
                    Ask about this product
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
