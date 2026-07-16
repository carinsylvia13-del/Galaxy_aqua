"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { business, navigation } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aqua-line/80 bg-aqua-mist/95 backdrop-blur">
      <div className="page-shell flex min-h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Galaxy Aqua Solutions home"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[8px] bg-white p-1 shadow-sm">
            <Image
              src="/images/galaxy-aqua-logo.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold text-aqua-ink">
              Galaxy Aqua Solutions
            </span>
            <span className="block truncate text-xs font-medium uppercase tracking-[0.14em] text-aqua-deep">
              Water Treatment
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[8px] px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-aqua-deep shadow-sm"
                    : "text-aqua-ink hover:bg-white/70 hover:text-aqua-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-[8px] border border-aqua-line bg-white px-4 text-sm font-semibold text-aqua-deep shadow-sm transition hover:border-aqua-blue hover:text-aqua-ink"
          >
            <Phone aria-hidden="true" size={17} />
            {business.phoneDisplay}
          </a>
        </div>

        <button
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] border border-aqua-line bg-white text-aqua-deep shadow-sm md:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-aqua-line bg-aqua-mist md:hidden">
          <nav className="page-shell grid gap-2 py-4" aria-label="Mobile primary">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`min-h-11 rounded-[8px] px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-white text-aqua-deep shadow-sm"
                      : "text-aqua-ink hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-aqua-deep px-4 text-sm font-semibold text-white"
            >
              <Phone aria-hidden="true" size={17} />
              {business.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
