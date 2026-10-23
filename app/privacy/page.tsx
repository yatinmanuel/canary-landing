import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.company} handles information on the Canary website.`,
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <p>
        This policy covers this website only. Canary hardware and apps are in private
        preview; they will come with their own privacy notice before anyone outside the
        preview uses them.
      </p>
    ),
  },
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <>
        <p>We keep this deliberately small. The site has no accounts, forms, ads or analytics trackers.</p>
        <ul>
          <li>
            <strong className="font-medium text-foreground">Emails you send us.</strong> If you
            write to {email}, we receive your email address, name and whatever you include in
            the message.
          </li>
          <li>
            <strong className="font-medium text-foreground">Standard server logs.</strong> Our
            hosting provider automatically records basic request data such as IP address,
            browser type and pages requested, to deliver the site and keep it secure.
          </li>
          <li>
            <strong className="font-medium text-foreground">Theme preference.</strong> Your
            light/dark choice is stored in your browser&apos;s local storage. It never leaves
            your device.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <p>
        We use what you send us to reply to you and, if you asked about early access, to
        follow up about Canary. We use server logs to operate and protect the site. We do
        not sell your information or use it for advertising.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Sharing",
    body: (
      <p>
        We share information only with service providers that help us run the site and our
        email (such as hosting and email providers), under obligations to protect it, or
        when the law requires it.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    body: (
      <p>
        We keep correspondence for as long as it is useful for the conversation it belongs
        to, and delete it on request. Server logs are kept for a limited period by our
        hosting provider.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices",
    body: (
      <p>
        You can ask us what we hold about you, or ask us to correct or delete it, by
        emailing {email}. Depending on where you live, you may have additional rights under
        local law; we&apos;ll honor them.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>This site is not directed to children under 13, and we do not knowingly collect their information.</p>,
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <p>
        If we change this policy, we&apos;ll update the date at the top of this page. Material
        changes will be noted here before they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about privacy go to {site.company} at {email}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 23, 2026"
      intro={
        <p>
          {site.company} (&ldquo;Canary,&rdquo; &ldquo;we&rdquo;) runs this website. This
          page explains what information the site collects and what we do with it.
        </p>
      }
      sections={sections}
    />
  );
}
