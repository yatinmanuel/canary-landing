"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CanaryWordmarkText } from "@/components/branding/canary-wordmark-text";
import { Canary } from "@/components/ui/icons";
import { container } from "@/components/basic/primitives";

const links = [
  { title: "Platform", href: "/#platform" },
  { title: "Security", href: "/#security" },
];

/* Two states, no menu. Over the dark hero the header floats transparent with a
   white lockup; on every other page it sits in flow with the normal palette. */
export default function BasicHeader() {
  const overHero = usePathname() === "/";

  const fill = overHero ? "fill-white" : "fill-primary";
  const link = overHero
    ? "text-white/85 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const cta = overHero
    ? "bg-white text-[#0c0a09] hover:bg-white/90"
    : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <header
      className={
        overHero
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur"
      }
    >
      <div className={`${container} flex items-center justify-between py-5`}>
        <Link href="/" aria-label="Canary" className="flex shrink-0 items-center gap-[7px]">
          <Canary style={{ height: 21 }} className={`w-auto shrink-0 ${fill}`} />
          <CanaryWordmarkText style={{ height: 16 }} className={`w-auto shrink-0 ${fill}`} />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              className={`hidden text-[13.5px] transition-colors duration-150 sm:block ${link}`}
            >
              {l.title}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-full px-4 pb-[9px] pt-[10px] text-[13px] font-medium leading-none transition-colors duration-150 ${cta}`}
          >
            Get early access
          </Link>
        </nav>
      </div>
    </header>
  );
}
