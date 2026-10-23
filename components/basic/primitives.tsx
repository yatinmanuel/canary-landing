import React from "react";

/* Shared shell for the basic layout: one 1440px container, one set of page
   gutters, one section rhythm. Every section on the home page is built from
   these three pieces, which is what keeps the layout reading as one system. */

export const container = "mx-auto w-full max-w-[1440px] px-7 md:px-8 lg:px-9 xl:px-10";

/** Section heading scale — one size for every section on the page. */
export const headingClass =
  "text-balance text-[clamp(1.85rem,3.4vw,3rem)] font-medium leading-[1.08] tracking-[-0.025em]";

type Tone = "light" | "alt" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-background text-foreground",
  alt: "bg-background-alt text-foreground",
  dark: "bg-[#0c0a09] text-white dark:border-y dark:border-white/[0.08] dark:bg-[#141210]",
};

export function Section({
  id,
  tone = "light",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${toneClass[tone]} py-24 lg:py-32 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  );
}

/** Opening block for inner pages: same container and rhythm as the home sections. */
export function PageHeader({ title, lede }: { title: React.ReactNode; lede?: React.ReactNode }) {
  return (
    <section className="bg-background pb-16 pt-20 lg:pb-20 lg:pt-28">
      <div className={container}>
        <h1 className="max-w-[820px] text-balance text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-[620px] text-pretty text-[17px] leading-[1.6] text-muted-foreground">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
