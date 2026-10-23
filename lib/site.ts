/* Single source for company facts that appear across the site and legal pages. */
export const site = {
  name: "Canary",
  company: "Canary Inc.",
  email: "support@halvex.net",
  description:
    "Canary tells you how your car is being driven and treated, the moment it happens. Built for rental hosts, fleets & owners.",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
