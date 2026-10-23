import { Section, headingClass } from "@/components/basic/primitives";

const columns = [
  {
    t: "Works with your car.",
    d: "Canary reads the car's own network from behind the dash. One connector, no splicing, no dealer visit. Anything you add later plugs into the same place.",
  },
  {
    t: "One car, or a thousand.",
    d: "Every vehicle live on a single screen, with the ones that need you pushed to the top. The view is the same whether it's your weekend car or a fleet.",
  },
  {
    t: "Evidence you can hand over.",
    d: "Signed, timestamped and placed. The kind of record a damage claim or an awkward conversation can actually rest on.",
  },
];

export function BuiltFor() {
  return (
    <Section className="!pb-0">
      <h2 className={`max-w-[760px] ${headingClass} text-foreground`}>
        Built for the complexity of real cars.
      </h2>

      <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3 lg:mt-16">
        {columns.map((c) => (
          <div key={c.t} className="border-t border-foreground/80 pt-6">
            <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.015em] text-foreground">
              {c.t}
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
