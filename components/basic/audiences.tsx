import { Section, headingClass } from "@/components/basic/primitives";

/* The three people Canary is for, each with the problem in their own words and
   what changes. Equal weight by design: none of them is the secondary market. */
const audiences = [
  {
    who: "Rental hosts",
    pain: "The car comes back with cooked tires and a story about a pothole.",
    fix: "See exactly how every trip was driven, and hand over proof instead of an argument.",
  },
  {
    who: "Fleets",
    pain: "Dozens of drivers, one budget, and no idea who's wearing the vehicles out.",
    fix: "See which vehicles are being driven hard and by whom — with a record every driver knows exists.",
  },
  {
    who: "Owners",
    pain: "A valet, a shop, a new driver in the family — and you're not in the car.",
    fix: "Know the moment it's being thrashed, moved or tampered with, wherever it is.",
  },
];

export function Audiences() {
  return (
    <Section id="who" className="scroll-mt-20 !pt-0">
      <h2 className={`max-w-[760px] ${headingClass} text-foreground`}>
        For anyone who hands over the keys.
      </h2>
      <div className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-border bg-border md:grid-cols-3 lg:mt-16">
        {audiences.map((a) => (
          <div key={a.who} className="flex flex-col bg-background p-8 lg:p-10">
            <h3 className="text-[14px] font-medium text-primary">{a.who}</h3>
            <p className="mt-5 text-pretty text-[clamp(1.25rem,1.7vw,1.5rem)] font-medium leading-[1.25] tracking-[-0.015em] text-foreground">
              {a.pain}
            </p>
            <p className="mt-auto pt-10 text-[15.5px] leading-[1.6] text-muted-foreground">{a.fix}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
