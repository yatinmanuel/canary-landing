"use client";

import { useEffect, useRef, useState } from "react";

import { container } from "@/components/basic/primitives";

const LINE = "Meet the passenger who never looks away.";
const WORDS = LINE.split(" ");

/* The page's one authored motion: the line fills in word by word as it scrolls
   through the viewport, so it reads at the pace of the scroll. Renders fully
   lit on the server and with reduced motion, so it never depends on JS. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(WORDS.length);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the line's top enters the lower 15% of the viewport,
      // 1 once its bottom has risen past the middle.
      const start = vh * 0.85;
      const end = vh * 0.5 - height;
      const p = Math.min(1, Math.max(0, (start - top) / (start - end)));
      setLit(Math.round(p * WORDS.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="bg-background py-28 lg:py-44">
      <div className={container}>
        <p
          ref={ref}
          aria-label={LINE}
          className="mx-auto max-w-[1100px] text-balance text-center text-[clamp(2.4rem,6.4vw,6rem)] font-medium leading-[1.02] tracking-[-0.04em] text-foreground"
        >
          {WORDS.map((w, i) => (
            <span
              key={i}
              aria-hidden
              className={`transition-opacity duration-300 ease-out ${i < lit ? "opacity-100" : "opacity-[0.14]"} ${
                w === "never" ? "text-primary" : ""
              }`}
            >
              {w}
              {i < WORDS.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
