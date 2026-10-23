import Image from "next/image";

import { ContactLink } from "@/components/basic/contact-link";
import { container } from "@/components/basic/primitives";

/* Closes the page on the hero's photograph, cropped tighter on the road, so the
   page opens and ends in the same place. */
export function BasicCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c0a09] text-white">
      <Image
        src="/hero-road.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-[30%_70%] opacity-70"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.85)_0%,rgba(12,10,9,0.55)_45%,rgba(12,10,9,0.9)_100%)]" />

      <div className={`${container} relative flex min-h-[70svh] flex-col items-center justify-center py-28 text-center`}>
        <h2 className="max-w-[980px] text-balance text-[clamp(2.4rem,5.6vw,5rem)] font-medium leading-[1.0] tracking-[-0.035em]">
          See what happens when you&apos;re not in the car.
        </h2>
        <p className="mt-6 max-w-[480px] text-pretty text-[16.5px] leading-[1.55] text-white/70">
          Canary is in private preview. Tell us about your cars and we&apos;ll be in
          touch.
        </p>
        <div className="mt-10">
          <ContactLink tone="onDark" />
        </div>
      </div>
    </section>
  );
}
