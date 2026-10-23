/* Phosphor's SSR entry — this is a server component, and the default entry
   ships client-only icon components. */
import { CarProfile, Lock, Moon, Plugs, UsersThree, WifiSlash } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@/components/basic/primitives";

/* The six run as a chain, not six unrelated facts: tamper → parked → offline
   covers when Canary is working, then source → unchangeable → who controls it
   covers whether the record it produces can be trusted. Titles are labels; the
   sentence underneath carries the claim. */
const items = [
  {
    icon: Plugs,
    t: "Tamper alerts",
    d: "Unplug it, cut the wiring or disconnect the battery. Each one reaches your phone in seconds, sent on Canary's own backup battery, with where the car was the moment before it went dark.",
  },
  {
    icon: Moon,
    t: "Parked, not asleep",
    d: "Overnight, in long-term parking, between rentals. Canary sleeps light and wakes the moment the car moves — including when it's being towed.",
  },
  {
    icon: WifiSlash,
    t: "No signal needed",
    d: "Tunnels, underground garages, dead zones. Canary works out what happened inside the car, holds onto it, and sends it the moment it reconnects.",
  },
  {
    icon: CarProfile,
    t: "From the car itself",
    d: "Everything comes from the vehicle's own sensors. There's no phone to leave at home, no app to close, and nothing a driver can decline.",
  },
  {
    icon: Lock,
    t: "Can't be edited",
    d: "Every alert is signed by the device that recorded it. Clear a warning light on the car and it's still on your record. The car's memory can be wiped. Yours can't.",
  },
  {
    icon: UsersThree,
    t: "Owners and hosts only",
    d: "Full picture and full controls for whoever owns the car — not whoever has the keys this week. Renters and drivers never get access.",
  },
];

export function Security() {
  return (
    <Section id="security" tone="dark" className="canary-noise relative scroll-mt-20 lg:py-40">
      <h2 className="max-w-[1000px] text-balance text-[clamp(2.4rem,5.6vw,5rem)] font-medium leading-[1.0] tracking-[-0.035em] text-white">
        Built to survive someone <span className="text-primary">trying to stop it.</span>
      </h2>

      <dl className="mt-16 grid gap-x-16 md:grid-cols-2 lg:mt-24">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="border-t border-white/[0.12] py-8">
            <dt className="flex items-center gap-3 text-[20px] font-medium tracking-[-0.015em] text-white">
              <Icon aria-hidden size={20} weight="regular" className="shrink-0 text-primary" />
              {t}
            </dt>
            <dd className="mt-3 max-w-[520px] text-[15.5px] leading-[1.65] text-white/60">{d}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
