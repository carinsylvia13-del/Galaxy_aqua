import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { business, navigation } from "@/lib/site";

type SiteFooterProps = {
  businessName: string;
};

export function SiteFooter({ businessName }: SiteFooterProps) {
  return (
    <footer className="border-t border-aqua-line bg-white">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-aqua-deep text-base font-bold text-white">
              GA
            </span>
            <div>
              <p className="text-base font-semibold text-aqua-ink">{businessName}</p>
              <p className="text-sm text-slate-600">Water treatment support in Chennai</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            RO plants, filtration, STP, ETP, softening, recycling, and service support for
            homes, apartments, commercial sites, and small industries.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
            Pages
          </h2>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-aqua-deep"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
            Reach Us
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-700">
            <a className="flex gap-3 hover:text-aqua-deep" href={`tel:${business.phoneHref}`}>
              <Phone aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>{business.phoneDisplay}</span>
            </a>
            <a className="flex gap-3 hover:text-aqua-deep" href={business.whatsappHref}>
              <MessageCircle aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>WhatsApp enquiry</span>
            </a>
            <a
              className="flex gap-3 leading-6 hover:text-aqua-deep"
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>{business.address}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-aqua-line">
        <div className="page-shell py-5 text-sm text-slate-500">
          © {new Date().getFullYear()} Galaxy Aqua Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
