import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using the Canary website, operated by ${site.company}`,
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Using this site",
    body: (
      <p>
        By using this website you agree to these terms. If you don&apos;t agree, please
        don&apos;t use the site. These terms cover the website only; Canary hardware and
        services will be offered under separate agreements.
      </p>
    ),
  },
  {
    id: "preview",
    title: "Pre-release information",
    body: (
      <p>
        Canary is in private preview. Product descriptions, features and specifications on
        this site describe products under development and may change before release.
        Nothing here is an offer to sell or a guarantee of availability, pricing or
        performance.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <p>
        Don&apos;t misuse the site: no attempts to disrupt it, access it in unauthorized
        ways, scrape it at a volume that degrades service, or use it for anything unlawful.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        The site&apos;s content — including text, graphics, video, the Canary name and logo
        — belongs to {site.company} or its licensors. You may view and share links to it,
        but you may not copy, modify or reuse it commercially without our written
        permission.
      </p>
    ),
  },
  {
    id: "feedback",
    title: "Feedback",
    body: (
      <p>
        If you send us ideas or feedback, we may use them without obligation to you. Please
        don&apos;t send anything confidential.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        The site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
        warranties of any kind, express or implied, including fitness for a particular
        purpose and non-infringement.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent the law allows, {site.company} is not liable for any
        indirect, incidental, special or consequential damages arising from your use of the
        site.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How we handle information is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <p>
        We may update these terms. The date at the top of this page shows when they last
        changed; continuing to use the site after a change means you accept it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about these terms go to {site.company} at {email}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="October 23, 2026"
      intro={
        <p>
          These terms govern your use of the Canary website, operated by {site.company}{" "}
          (&ldquo;Canary,&rdquo; &ldquo;we&rdquo;).
        </p>
      }
      sections={sections}
    />
  );
}
