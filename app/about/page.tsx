import type { Metadata } from "next";
import Image from "next/image";

import { ContactLink } from "@/components/basic/contact-link";
import { PageHeader, Section, headingClass } from "@/components/basic/primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "Canary is a small team building one thing: a way to know what happens to your car when someone else is driving it.",
};

const beliefs = [
  {
    t: "Proof beats opinion.",
    d: "Almost every argument about a car comes down to two people remembering it differently. The car was there for all of it. It should be the one that settles it.",
  },
  {
    t: "It has to work when it matters.",
    d: "Anything that needs a good signal, a charged phone and nobody interfering will fail on exactly the day you needed it. So Canary decides for itself and runs on its own power.",
  },
  {
    t: "You shouldn't have to think about it.",
    d: "No splicing, no dealer visit, nothing to remember to switch on. It sits behind the dash and stays quiet until there's a reason not to.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="We're building the thing we wanted to exist."
        lede="Canary is a small team working on one problem: your car is somewhere else, someone else is driving it, and you have no idea what's happening to it."
      />

      <Section tone="alt">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <h2 className={`${headingClass} text-foreground`}>
              It starts the moment you hand over the keys.
            </h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-[1.65] text-muted-foreground">
              <p>
                A renter, a valet, a shop, a friend, someone in the family who just got their
                licence. The car drives away, and for the next few hours or days you know
                nothing about what happens to it.
              </p>
              <p>
                Everything comes back to you afterwards, second-hand and already explained. A
                noise that wasn&apos;t there before. A light on the dash. A story about a
                pothole.
              </p>
              <p>
                The strange part is that the car knew the whole time. It measures its own
                speed, revs and faults constantly, then throws it all away. Canary keeps it
                and tells you.
              </p>
            </div>
          </div>
          <figure className="md:col-span-6 md:col-start-7">
            <Image
              src="/civicandbmw_WATERMARK.png"
              alt="A blue BMW and a dark Honda Civic driving along a winding tree-lined road."
              width={1280}
              height={720}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full rounded-[20px]"
            />
            <figcaption className="mt-3 text-[12.5px] text-muted-foreground">Photo: Ahmad Studios</figcaption>
          </figure>
        </div>
      </Section>

      <Section>
        <h2 className={`max-w-[720px] ${headingClass} text-foreground`}>What we build around.</h2>
        <div className="mt-7 grid gap-x-6 gap-y-14 md:grid-cols-3 lg:mt-9">
          {beliefs.map((b) => (
            <div key={b.t}>
              <div className="h-px w-full bg-border" />
              <h3 className="mt-6 text-[15.5px] font-medium tracking-[-0.01em] text-foreground">{b.t}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" className="lg:py-36">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[640px]">
            <h2 className={`${headingClass} text-white`}>We&apos;re early, and that&apos;s the point.</h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-white/55">
              The people you&apos;d be talking to are the ones designing the hardware and
              writing the software — so what you tell us now still changes what gets built.
            </p>
          </div>
          <ContactLink tone="onDark" label="Talk to us" subject="Hello from the Canary site" />
        </div>
      </Section>
    </>
  );
}
