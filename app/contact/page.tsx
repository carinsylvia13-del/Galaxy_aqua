import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Galaxy Aqua Solutions in Sembakkam, Tambaram, Chennai for RO plants, water treatment, STP, ETP, filtration, and service support."
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Talk to Galaxy Aqua Solutions."
              copy="Share your water-treatment requirement by phone, WhatsApp or email."
              level="h1"
            />
            <div className="mt-8 grid gap-4">
              <a
                href={`tel:${business.phoneHref}`}
                className="flex min-h-16 items-center gap-4 rounded-[8px] border border-aqua-line bg-aqua-mist p-5 text-aqua-ink transition hover:border-aqua-blue"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-white text-aqua-deep">
                  <Phone aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Phone</span>
                  <span className="block text-sm text-slate-600">{business.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={business.whatsappHref}
                className="flex min-h-16 items-center gap-4 rounded-[8px] border border-aqua-line bg-aqua-mist p-5 text-aqua-ink transition hover:border-aqua-blue"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-white text-aqua-deep">
                  <MessageCircle aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">WhatsApp</span>
                  <span className="block text-sm text-slate-600">Send site details directly</span>
                </span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex min-h-16 items-center gap-4 rounded-[8px] border border-aqua-line bg-aqua-mist p-5 text-aqua-ink transition hover:border-aqua-blue"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-white text-aqua-deep">
                  <Mail aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Email</span>
                  <span className="block text-sm text-slate-600">{business.email}</span>
                </span>
              </a>
              <a
                href={business.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 gap-4 rounded-[8px] border border-aqua-line bg-aqua-mist p-5 text-aqua-ink transition hover:border-aqua-blue"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-white text-aqua-deep">
                  <MapPin aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Address</span>
                  <span className="block text-sm leading-6 text-slate-600">{business.address}</span>
                </span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <div className="map-embed overflow-hidden rounded-[8px] border border-aqua-line bg-white shadow-sm">
            <iframe
              title="Galaxy Aqua Solutions map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
