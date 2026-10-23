import { Section, headingClass } from "@/components/basic/primitives";

const features = [
  {
    t: "Catches abuse as it happens",
    d: "Burnouts, donuts, launches, hard braking, speeding. Canary works it out from the car's own sensors, in the second it happens.",
  },
  {
    t: "Tells you before the story changes",
    d: "The alert is on your phone while the car is still moving: what happened, where it happened, and the proof to go with it.",
  },
  {
    t: "Works with no signal",
    d: "Tunnels, garages, dead zones. Detection happens inside the car, and everything it saw is sent the moment it reconnects.",
  },
  {
    t: "Can't be quietly removed",
    d: "Unplug it, cut the wiring, disconnect the battery. Each of those is an alert too, sent on Canary's own backup power.",
  },
  {
    t: "Leaves evidence, not opinions",
    d: "Every alert is signed by the device that recorded it, so it can't be edited after the fact. Not by a driver, and not by us.",
  },
];

export function Platform() {
  return (
    <Section id="platform" tone="alt" className="scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className={`${headingClass} max-w-[520px] text-foreground`}>
              Know what happened while it&apos;s still happening.
            </h2>
            <p className="mt-6 max-w-[420px] text-pretty text-[16px] leading-[1.6] text-muted-foreground">
              Most trackers tell you where the car is. Canary tells you what&apos;s being done
              to it.
            </p>
          </div>
        </div>

        <dl className="border-t border-border lg:col-span-6 lg:col-start-7">
          {features.map((f) => (
            <div key={f.t} className="group border-b border-border py-8 lg:py-10">
              <dt className="text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-[1.15] tracking-[-0.02em] text-foreground">
                {f.t}
              </dt>
              <dd className="mt-3 max-w-[560px] text-[16px] leading-[1.6] text-muted-foreground">{f.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
