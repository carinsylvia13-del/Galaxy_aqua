"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { business } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  requirement: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  requirement: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello Galaxy Aqua Solutions,",
      "",
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Requirement: ${form.requirement || "Please call me back."}`
    ].join("\n");

    window.location.href = `${business.whatsappHref}?text=${encodeURIComponent(message)}`;
  }

  return (
    <form onSubmit={submitForm} className="rounded-[8px] border border-aqua-line bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-aqua-ink">
          Name
          <input
            className="min-h-12 rounded-[8px] border border-aqua-line bg-aqua-mist px-4 text-base font-normal text-aqua-ink"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-aqua-ink">
          Phone
          <input
            className="min-h-12 rounded-[8px] border border-aqua-line bg-aqua-mist px-4 text-base font-normal text-aqua-ink"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="Your phone number"
            autoComplete="tel"
            inputMode="tel"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-aqua-ink">
          Requirement
          <textarea
            className="min-h-36 resize-y rounded-[8px] border border-aqua-line bg-aqua-mist px-4 py-3 text-base font-normal leading-7 text-aqua-ink"
            value={form.requirement}
            onChange={(event) => updateField("requirement", event.target.value)}
            placeholder="RO plant, STP, service visit, water softener, or filtration support"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-aqua-deep px-5 text-sm font-semibold text-white transition hover:bg-[#064D55]"
        >
          <Send aria-hidden="true" size={18} />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
