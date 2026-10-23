"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { CanaryWordmarkText } from "@/components/branding/canary-wordmark-text";
import { Canary } from "@/components/ui/icons";
import { container } from "@/components/basic/primitives";

const links = [
  { title: "Platform", href: "/#platform" },
  { title: "Security", href: "/#security" },
  { title: "How it works", href: "/technology" },
  { title: "About", href: "/about" },
];

function ThemeToggle({ className }: { className: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid h-9 w-9 place-items-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      {/* resolvedTheme is unknown on the server; render the icon after mount so
          it can't hydrate wrong. */}
      {mounted && (dark ? <Sun aria-hidden className="h-4 w-4" /> : <Moon aria-hidden className="h-4 w-4" />)}
    </button>
  );
}

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

        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          {links.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              className={`hidden text-[13.5px] transition-colors duration-150 sm:block ${link}`}
            >
              {l.title}
            </Link>
          ))}
          <ThemeToggle className={link} />
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-full px-4 pb-[9px] pt-[10px] text-[13px] font-medium leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${cta}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
