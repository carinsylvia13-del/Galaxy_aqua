import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/site";

type ContactStripProps = {
  title?: string;
  copy?: string;
};

export function ContactStrip({
  title = "Need help choosing the right water-treatment setup?",
  copy = "Talk to Galaxy Aqua Solutions for RO, STP, ETP, filtration, softening, recycling, or maintenance support."
}: ContactStripProps) {
  return (
    <section className="bg-aqua-deep py-12 text-white">
      <div className="page-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/78">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-aqua-deep"
          >
            <Phone aria-hidden="true" size={18} />
            Call {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <MessageCircle aria-hidden="true" size={18} />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
