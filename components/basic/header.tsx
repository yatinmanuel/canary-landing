"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { CanaryWordmarkText } from "@/components/branding/canary-wordmark-text";
import { Canary } from "@/components/ui/icons";
import { ContactLink } from "@/components/basic/contact-link";
import { container } from "@/components/basic/primitives";


function ThemeToggle({ className }: { className: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // false on the server and during hydration, true once running in the browser.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid h-9 w-9 place-items-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      {/* resolvedTheme is unknown on the server; render the icon after mount so
          it can’t hydrate wrong. */}
      {mounted && (dark ? <Sun aria-hidden className="h-4 w-4" /> : <Moon aria-hidden className="h-4 w-4" />)}
    </button>
  );
}

/* Always pinned to the top. On the home page it starts transparent over the
   dark hero with a white lockup, and turns solid once the hero has scrolled
   away; on every other page it is solid from the start. */
export default function BasicHeader() {
  const isHome = usePathname() === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const overHero = isHome && !pastHero;
  const fill = overHero ? "fill-white" : "fill-primary";
  const muted = overHero ? "text-white/85 hover:text-white" : "text-muted-foreground hover:text-foreground";

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-md"
      }`}
    >
      <div className={`${container} flex items-center justify-between py-4`}>
        <Link
          href="/"
          aria-label="Canary home"
          className="flex shrink-0 items-center gap-[7px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
        >
          <Canary aria-hidden style={{ height: 21 }} className={`w-auto shrink-0 ${fill}`} />
          <CanaryWordmarkText aria-hidden style={{ height: 16 }} className={`w-auto shrink-0 ${fill}`} />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className={muted} />
          <ContactLink
            tone={overHero ? "onDark" : "onLight"}
            label="Get in touch"
            className="!h-9 !px-4 !text-[13px]"
          />
        </div>
      </div>
    </header>
  );
}
