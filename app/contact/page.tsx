import type { Metadata } from "next";

import { ContactLink } from "@/components/basic/contact-link";
import { PageHeader, Section } from "@/components/basic/primitives";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Canary team about fleets, rentals & early access.",
};

const topics = [
  ["Fleets & rental hosts", "Tell us roughly how many vehicles you run and what abuse costs you today."],
  ["Owners", "Tell us about the car you want to keep an eye on."],
  ["Everything else", "Press, partnerships, or questions about how Canary works."],
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch."
        lede="Canary is in private preview. Email the team and we'll get back to you."
      />
      <Section className="!pt-0">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-5 md:self-start">
            <ContactLink label="Email us" subject="Hello from the Canary site" />
            <a
              href={`mailto:${site.email}`}
              className="text-[15px] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground/60"
            >
              {site.email}
            </a>
          </div>
          <dl className="border-t border-border md:col-span-6 md:col-start-7">
            {topics.map(([t, d]) => (
              <div key={t} className="border-b border-border py-6">
                <dt className="text-[17px] font-medium tracking-[-0.01em] text-foreground">{t}</dt>
                <dd className="mt-1 text-[15px] leading-[1.6] text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
