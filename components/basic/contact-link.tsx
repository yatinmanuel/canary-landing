import { mailto } from "@/lib/site";

const tones = {
  /** White pill, for the dark hero and dark bands. */
  onDark: "bg-white text-[#0c0a09] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#0c0a09]",
  /** Pink pill, for light sections. */
  onLight: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary focus-visible:ring-offset-background",
} as const;

/* Canary is pre-launch with no signup flow, so every call to action opens an
   email to the team. */
export function ContactLink({
  tone = "onLight",
  label = "Get early access",
  subject = "Canary early access",
  className = "",
}: {
  tone?: keyof typeof tones;
  label?: string;
  subject?: string;
  className?: string;
}) {
  return (
    <a
      href={mailto(subject)}
      className={`inline-flex h-[46px] shrink-0 items-center justify-center rounded-full px-6 text-[13.5px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${tones[tone]} ${className}`}
    >
      {label}
    </a>
  );
}
