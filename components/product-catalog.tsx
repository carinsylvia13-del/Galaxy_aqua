"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle, SlidersHorizontal, X } from "lucide-react";
import { business } from "@/lib/site";
import {
  categoryLabels,
  products,
  type Product,
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const visibleProducts = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (!selectedProduct) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProduct(null);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [selectedProduct]);

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

        <div className="mt-6 grid min-w-0 auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => {
            return (
              <article
                key={product.name}
                className="min-w-0 overflow-hidden rounded-2xl border border-aqua-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#9dc9c2] hover:shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="group flex h-full w-full flex-col text-left"
                  aria-label={`View details for ${product.name}`}
                  aria-haspopup="dialog"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-white to-[#edf5f3]">
                    <Image
                      src={`/images/products/${product.image}`}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-5 transition duration-300 group-hover:scale-[1.025]"
                    />
                    <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/90 text-aqua-deep shadow-sm transition group-hover:bg-aqua-deep group-hover:text-white">
                      <ArrowUpRight aria-hidden="true" size={18} />
                    </span>
                  </div>
                  <div className="grid flex-1 grid-rows-[auto_auto_1fr_auto] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-aqua-deep">
                      {categoryLabels[product.category]}
                    </p>
                    <h3 className="product-card-title mt-2 text-lg font-semibold leading-6 text-aqua-ink">
                      {product.name}
                    </h3>
                    <p className="product-card-copy mt-3 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>
                    <div className="mt-5 border-t border-aqua-line pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Best for
                      </p>
                      <p className="product-card-use mt-1 text-sm leading-5 text-aqua-ink">
                        {product.idealFor}
                      </p>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProduct ? (
        <div
          className="fixed inset-0 z-[80] grid items-end bg-[#092f33]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProduct(null);
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
            aria-describedby="product-detail-description"
            className="relative max-h-[92svh] w-full overflow-y-auto rounded-t-[1.75rem] bg-white shadow-2xl sm:mx-auto sm:max-w-4xl sm:rounded-[1.75rem]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-aqua-line bg-white text-aqua-ink shadow-sm transition hover:bg-aqua-mist"
              aria-label="Close product details"
            >
              <X aria-hidden="true" size={20} />
            </button>

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[300px] bg-gradient-to-br from-white to-[#e8f4f1] sm:min-h-[380px] md:min-h-full">
                <Image
                  src={`/images/products/${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-contain p-8 sm:p-10"
                />
              </div>

              <div className="p-6 pt-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-aqua-deep">
                  {categoryLabels[selectedProduct.category]}
                </p>
                <h3
                  id="product-detail-title"
                  className="mt-3 max-w-[90%] text-3xl font-semibold tracking-[-0.035em] text-aqua-ink sm:text-4xl"
                >
                  {selectedProduct.name}
                </h3>
                <p
                  id="product-detail-description"
                  className="mt-5 text-base leading-7 text-slate-700"
                >
                  {selectedProduct.description}
                </p>

                <a
                  href={`${business.whatsappHref}?text=${encodeURIComponent(
                    `Hello Galaxy Aqua Solutions, I would like guidance about ${selectedProduct.name}. My site type and water requirement are:`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-aqua-deep px-5 text-sm font-semibold text-white transition hover:bg-[#064D55] sm:w-auto"
                  aria-label={`Ask about ${selectedProduct.name} on WhatsApp`}
                >
                  <MessageCircle aria-hidden="true" size={18} />
                  Ask about this product
                </a>

                <dl className="mt-7 grid gap-5 border-y border-aqua-line py-6 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-aqua-ink">Best for</dt>
                    <dd className="mt-2 leading-6 text-slate-600">{selectedProduct.idealFor}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-aqua-ink">Selection note</dt>
                    <dd className="mt-2 leading-6 text-slate-600">{selectedProduct.selection}</dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm leading-6 text-slate-600">
                  Share your source water and daily requirement so we can confirm the appropriate capacity and treatment stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
