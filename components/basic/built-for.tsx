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
    <Section>
      <h2 className={`max-w-[720px] ${headingClass} text-[#101513]`}>
        Built for the complexity of real cars.
      </h2>

      <div className="mt-7 grid gap-x-6 gap-y-14 md:grid-cols-3 lg:mt-9">
        {columns.map((c) => (
          <div key={c.t}>
            <div className="h-px w-full bg-black/[0.08]" />
            <h3 className="mt-6 text-[15.5px] font-medium tracking-[-0.01em] text-black">{c.t}</h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-black/50">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
