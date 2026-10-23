"use client";

import { useState } from "react";

import { Section, headingClass } from "@/components/basic/primitives";
import { site } from "@/lib/site";

const faqs: [string, string][] = [
  [
    "What is Canary?",
    "A small device that installs behind the dash. It watches how the car is being driven and what happens to it, then tells you on your phone, in seconds: where it is, how it's being treated, and whether anyone is interfering with it.",
  ],
  [
    "What does it actually catch?",
    "Burnouts, donuts, launches, hard braking and cornering, and speeding past a limit you set — the things that wear a car out. Plus the things that aren't about driving at all: the car moving when it shouldn't be, or someone trying to unplug Canary itself.",
  ],
  [
    "Does it need cell service?",
    "No. Canary works out what happened inside the car itself, so it keeps catching things in tunnels, underground garages and dead zones. Everything it saw gets sent the moment it has signal again.",
  ],
  [
    "Can someone just unplug it?",
    "They can try. Canary has its own backup battery, so pulling it is itself an alert. You get told where the car was the second before it went dark, and it keeps watching long enough to catch a tow.",
  ],
  [
    "How do I know what it tells me is true?",
    "Everything comes from the car's own sensors, checked against each other rather than resting on any one reading. Each alert is signed by the device that recorded it, so it can't be altered afterwards — not by a driver, and not by us.",
  ],
  [
    "Is it hard to install?",
    "No. It plugs into the car's diagnostic port — no splicing, no dealer visit. Anything you add later, like the starter immobilizer, plugs into the same unit.",
  ],
  [
    "What does it cost, and when can I get one?",
    `Canary is in private preview, so pricing isn't public yet. Email ${site.email} and tell us whether it's for your own car, your rentals or a fleet, and we'll come back to you with early-access pricing and timing.`,
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq">
      {/* Heading holds column one and the rows take the remaining two, so the
          questions start where the section's own text column does. */}
      <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-[18px]">
        <h2 className={`${headingClass} text-foreground md:col-span-1`}>
          Frequently asked
          <br />
          questions.
        </h2>

        <div className="border-t border-border md:col-span-2">
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
                className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <span className="text-[18px] font-medium tracking-[-0.01em] text-foreground">
                  {q}
                </span>
                {/* A plus that rotates into a minus: one glyph, no icon dependency. */}
                <span className="relative grid h-[18px] w-[18px] shrink-0 place-items-center">
                  <span className="absolute h-[1.5px] w-[14px] bg-muted-foreground" />
                  <span
                    className={`absolute h-[1.5px] w-[14px] bg-muted-foreground transition-transform duration-200 ${
                      open === i ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </span>
              </button>
              {/* The animating track collapses to 0fr and the inner div does the
                  clipping. A grid child needs its own min-h-0 and overflow-hidden,
                  or its text can spill past a zero-height row. `inert` (React 19)
                  keeps a closed answer out of tab order and out of a screen
                  reader, so collapsed means hidden by every measure. */}
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                aria-hidden={open !== i}
                inert={open !== i}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-[640px] pb-7 pr-10 text-[16px] leading-[1.6] text-muted-foreground">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
