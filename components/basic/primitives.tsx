import React from "react";

/* Shared shell for the basic layout: one 1440px container, one set of page
   gutters, one section rhythm. Every section on the home page is built from
   these three pieces, which is what keeps the layout reading as one system. */

export const container = "mx-auto w-full max-w-[1440px] px-7 md:px-8 lg:px-9 xl:px-10";

/** Section heading scale — one size for every section on the page. */
export const headingClass =
  "text-balance text-[clamp(1.45rem,2.2vw,2rem)] font-medium leading-[1.35] tracking-[-0.02em]";

type Tone = "light" | "alt" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-background text-foreground",
  alt: "bg-background-alt text-foreground",
  dark: "bg-[#0c0a09] text-white",
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
