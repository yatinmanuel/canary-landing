"use client";

import { useState } from "react";

import { Section, headingClass } from "@/components/basic/primitives";

const faqs: [string, string][] = [
  [
    "What is Canary?",
    "A small device that installs behind the dash. It watches how the car is being driven and what happens to it, then tells you — on your phone, in seconds. Where it is, how it's being treated, and whether anyone is interfering with it.",
  ],
  [
    "What does it actually catch?",
    "Burnouts, donuts, launches, hard stops, impacts, speeding, drifting, missed gears — the things that wear a car out or write it off. Plus the things that aren't about driving at all: the car moving when it shouldn't be, being towed, or someone trying to unplug Canary itself.",
  ],
  [
    "Does it need cell service?",
    "No. Canary works out what happened inside the car itself, so it keeps catching things in tunnels, underground garages and dead zones where ordinary trackers go blind. Everything it saw gets sent the moment it has signal again.",
  ],
  [
    "Can someone just unplug it?",
    "They can try. Canary runs on its own battery when the car's power is cut, so pulling it is itself an alert — you get told where the car was the second before it went dark, and it keeps recording after.",
  ],
  [
    "How do I know what it tells me is true?",
    "Everything comes from the car's own sensors, cross-checked against each other rather than resting on any one reading. Each alert is signed by the device that recorded it, so it can't be altered afterwards — not by a driver, and not by us.",
  ],
  [
    "Is it hard to install?",
    "No. One connector, no splicing, no dealer visit. Anything you add later — like the remote engine cutoff — plugs into the same connector.",
  ],
  [
    "What does it cost, and when can I get one?",
    "Canary is in private preview, so pricing isn't public yet. Join the waitlist and tell us whether it's for your own car, your rentals or a fleet — we'll come back to you with early-access pricing and timing.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <h2 className={`${headingClass} text-[#101513]`}>Frequently asked questions.</h2>

      <div className="mt-7 max-w-[900px] border-t border-black/[0.08] lg:mt-9">
        {faqs.map(([q, a], i) => (
          <div key={q} className="border-b border-black/[0.08]">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left"
            >
              <span className="text-[17px] font-medium tracking-[-0.01em] text-[#101513]">{q}</span>
              {/* A plus that rotates into a minus — one glyph, no icon dependency. */}
              <span className="relative grid h-[18px] w-[18px] shrink-0 place-items-center">
                <span className="absolute h-[1.5px] w-[14px] bg-black/45" />
                <span
                  className={`absolute h-[1.5px] w-[14px] bg-black/45 transition-transform duration-200 ${
                    open === i ? "rotate-0" : "rotate-90"
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <p className="min-h-0 pb-6 pr-10 text-[15px] leading-[1.6] text-black/60">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
