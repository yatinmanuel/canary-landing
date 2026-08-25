/* Phosphor's SSR entry — this is a server component, and the default entry
   ships client-only icon components. */
import { CarProfile, Lock, Moon, Plugs, UsersThree, WifiSlash } from "@phosphor-icons/react/dist/ssr";

import { Section, headingClass } from "@/components/basic/primitives";

/* The six run as a chain, not six unrelated facts: tamper → parked → offline
   covers when Canary is working, then source → unchangeable → who controls it
   covers whether the record it produces can be trusted. Titles are labels; the
   sentence underneath carries the claim. */
const items = [
  {
    icon: Plugs,
    t: "Tamper alerts",
    d: "Unplug it, cut the wiring, pull it out of the car. Each one reaches your phone in seconds, from Canary's own battery, with where the car was the moment before it went dark.",
  },
  {
    icon: Moon,
    t: "Parked, not asleep",
    d: "Overnight, in long-term parking, weeks between rentals. Canary stays awake for movement, towing and anyone getting into the car. Parked is when most of it happens.",
  },
  {
    icon: WifiSlash,
    t: "No signal needed",
    d: "Tunnels, underground garages, dead zones. Canary works out what happened inside the car and sends it the moment it reconnects. Nothing is missed while it's out of range.",
  },
  {
    icon: CarProfile,
    t: "From the car itself",
    d: "Everything comes from the vehicle's own sensors. There's no phone to leave at home, no app to close, and nothing a driver can decline.",
  },
  {
    icon: Lock,
    t: "Can't be edited",
    d: "Every alert is signed by the device that recorded it. Clear a fault code on the car and it's still on your record. The vehicle's memory can be wiped. Yours can't.",
  },
  {
    icon: UsersThree,
    t: "Owners and hosts only",
    d: "Full picture and full controls for whoever owns the car. Not for whoever has the keys this week. That's decided on our side, not by hiding a button in an app.",
  },
];

export function Security() {
  return (
    <Section id="security" tone="dark" className="lg:py-36">
      <h2 className={`max-w-[720px] ${headingClass} text-white`}>
        Built to survive someone trying to stop it.
      </h2>

      <div className="mt-16 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t}>
            <Icon size={22} weight="regular" className="text-primary" />
            <h3 className="mt-5 text-[18px] font-medium tracking-[-0.01em] text-white">{t}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-white/55">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
