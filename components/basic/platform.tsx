"use client";

import { useState } from "react";

import { Canary } from "@/components/ui/icons";
import { Section, headingClass } from "@/components/basic/primitives";

const features = [
  {
    t: "Catches abuse as it happens",
    d: "Burnouts, donuts, launches, hard stops, impacts. Canary works it out from the car's own sensors, in the second it happens.",
  },
  {
    t: "Tells you before the story changes",
    d: "The alert is on your phone while the car is still moving — what happened, where it happened, and the proof to go with it.",
  },
  {
    t: "Works with no signal",
    d: "Tunnels, garages, dead zones. Detection happens inside the car, and everything it saw is sent the moment it reconnects.",
  },
  {
    t: "Can't be quietly removed",
    d: "Unplug it, cut the wiring, drop the battery — each of those is an alert too, sent from Canary's own power.",
  },
  {
    t: "Leaves evidence, not opinions",
    d: "Every alert is signed by the device that recorded it, so it can't be edited after the fact — not by a driver, and not by us.",
  },
];

function NotificationCard() {
  return (
    <div className="flex items-start gap-3 rounded-[22px] border border-black/[0.07] bg-white p-4 shadow-[0_2px_4px_rgba(16,14,10,0.05),0_14px_30px_-12px_rgba(16,14,10,0.22)]">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-primary">
        <Canary className="h-5 w-auto fill-white" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-[12px] font-medium tracking-[-0.005em] text-black/50">Canary</span>
          <span className="text-[12px] text-black/40">now</span>
        </div>
        <div className="mt-0.5 text-[14px] font-medium tracking-[-0.01em] text-[#101513]">
          Burnout — your Civic, Ashburn
        </div>
        <p className="text-[13px] leading-[1.5] text-black/55">
          11 seconds of wheelspin, two minutes ago. Tap to see it.
        </p>
      </div>
    </div>
  );
}

export function Platform() {
  const [active, setActive] = useState(0);

  return (
    <Section id="platform" tone="alt">
      <h2 className={`max-w-[720px] ${headingClass} text-[#101513]`}>
        Know what happened while it&apos;s still happening.
      </h2>

      <div className="mt-7 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-6 lg:mt-9">
        <div className="md:col-span-5">
          {features.map((f, i) => (
            <button
              key={f.t}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              className="w-full cursor-pointer border-b border-black/[0.07] py-6 text-left last:border-b-0"
            >
              <h3
                className={`text-[18px] font-medium tracking-[-0.01em] text-[#101513] transition-opacity duration-200 ${
                  active === i ? "opacity-100" : "opacity-25 hover:opacity-50"
                }`}
              >
                {f.t}
              </h3>
              <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                  active === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <p
                  className={`min-h-0 pt-4 text-[15.5px] leading-[1.6] text-black/55 transition-opacity duration-200 ${
                    active === i ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  {f.d}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="md:col-span-7">
          <div className="rounded-[24px] border border-black/[0.06] bg-white/60 p-8 sm:p-14">
            <div className="mx-auto max-w-sm">
              <NotificationCard />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
