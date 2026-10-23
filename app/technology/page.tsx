import type { Metadata } from "next";

import { ContactLink } from "@/components/basic/contact-link";
import { PageHeader, Section, headingClass } from "@/components/basic/primitives";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Canary works: it decides inside the car, double-checks everything, keeps working without signal, and keeps a record no one can rewrite.",
};

const principles = [
  {
    t: "The thinking happens in the car.",
    d: "Canary decides what happened on its own, in the moment — so “you'll know in seconds” still holds in an underground garage with no signal.",
  },
  {
    t: "Nothing rests on a single reading.",
    d: "Speed comes from the car itself, location from GPS, and motion from a separate sensor. An alert has to look right to more than one of them, so a pothole isn't mistaken for hard braking.",
  },
  {
    t: "Losing signal doesn't lose the event.",
    d: "With no connection, Canary saves everything and sends it when it's back. Incidents are never thrown away to make room.",
  },
  {
    t: "Removing it is the alarm.",
    d: "Disconnect the battery or pull the unit out and Canary switches to its own backup battery, sends you the car's last location, and keeps watching long enough to catch a tow.",
  },
  {
    t: "Records can't be rewritten.",
    d: "A security chip in every part signs what it records. No one can change an entry afterwards — not a driver, not a renter, not us. Clear a warning light on the car and Canary still keeps its copy.",
  },
  {
    t: "It can't be turned against the car.",
    d: "Only official Canary updates install, and each part checks them itself. The starter immobilizer is wired so that if it ever loses power, the car still starts normally.",
  },
];

const parts = [
  {
    tag: "The hub",
    name: "Canary Core",
    d: "Sits out of sight behind the dash. Holds the cell connection, GPS and storage, and makes every call about what just happened. Has its own backup battery.",
  },
  {
    tag: "Included",
    name: "CAN Harness",
    d: "Plugs into the car's diagnostic port and gives Canary the car's own view of itself: speed, revs, braking and warning lights.",
  },
  {
    tag: "Optional",
    name: "Starter Immobilizer",
    d: "Stop a parked car from being started, right from your phone. It can't stop a car that's already running.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        title="How Canary works."
        lede="Most trackers collect a location and let a server decide what it means. Canary works the other way around: the car works out what happened, and the network is just how it tells you."
      />

      <Section tone="alt">
        <h2 className={`max-w-[720px] ${headingClass} text-foreground`}>Six decisions that make the difference.</h2>
        <div className="mt-7 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:mt-9 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.t}>
              <div className="h-px w-full bg-border" />
              <h3 className="mt-6 text-[15.5px] font-medium tracking-[-0.01em] text-foreground">{p.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className={`max-w-[720px] ${headingClass} text-foreground`}>One hub. Everything else plugs into it.</h2>
        <p className="mt-4 max-w-[620px] text-[15.5px] leading-[1.6] text-muted-foreground">
          Every part uses the same sealed, weatherproof connector, and the hub recognises it
          the moment it&apos;s plugged in. Adding a part later is just plugging it in.
        </p>
        <dl className="mt-10 border-t border-border">
          {parts.map((p) => (
            <div key={p.name} className="grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:gap-6">
              <dt className="sm:col-span-4">
                <span className="block text-[17px] font-medium tracking-[-0.01em] text-foreground">{p.name}</span>
                <span className="mt-1 block text-[13px] text-primary">{p.tag}</span>
              </dt>
              <dd className="text-[15px] leading-[1.6] text-muted-foreground sm:col-span-7 sm:col-start-6">{p.d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="dark" className="lg:py-36">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className={`max-w-[640px] ${headingClass} text-white`}>
            Questions we haven&apos;t answered here? Ask us directly.
          </h2>
          <ContactLink tone="onDark" label="Ask a question" subject="Question about Canary" />
        </div>
      </Section>
    </>
  );
}
