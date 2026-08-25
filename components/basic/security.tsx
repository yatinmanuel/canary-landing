import { Section, headingClass } from "@/components/basic/primitives";

const items = [
  {
    t: "Its own power",
    d: "When the car's power goes, Canary keeps running on its own battery and keeps reporting.",
  },
  {
    t: "Tamper-evident",
    d: "Unplugged, cut, or pulled from the car — each of those is an alert, sent the second it happens.",
  },
  {
    t: "Works offline",
    d: "Detection runs inside the car, so nothing is missed in tunnels, garages or dead zones.",
  },
  {
    t: "Signed at the source",
    d: "Every alert is signed by the device that recorded it, so it can't be altered afterwards.",
  },
  {
    t: "Encrypted end to end",
    d: "Data is encrypted in transit and at rest, and reaches nobody outside your account.",
  },
  {
    t: "Your record, yours",
    d: "It's your car and your history. Export it or delete it, whenever you want.",
  },
];

export function Security() {
  return (
    <Section id="security" tone="dark" className="lg:py-36">
      <h2 className={`max-w-[720px] ${headingClass} text-white`}>
        Security built for evidence that has to hold up.
      </h2>

      <div className="mt-16 grid gap-x-14 gap-y-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.t}>
            <div className="h-px w-full bg-white/15" />
            <h3 className="mt-7 text-[18px] font-medium tracking-[-0.01em] text-white">{i.t}</h3>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/55">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
