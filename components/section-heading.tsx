type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  level = "h2"
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-aqua-deep">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="mt-3 text-3xl font-semibold tracking-normal text-aqua-ink md:text-4xl">
        {title}
      </HeadingTag>
      {copy ? <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p> : null}
    </div>
  );
}
