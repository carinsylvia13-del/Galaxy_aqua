import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, copy, icon: Icon }: ServiceCardProps) {
  return (
    <article className="rounded-[8px] border border-aqua-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-aqua-mist text-aqua-deep">
        <Icon aria-hidden="true" size={23} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-aqua-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
    </article>
  );
}
