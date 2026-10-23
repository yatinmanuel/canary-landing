import type { Metadata, Viewport } from "next";
import React from "react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import BasicHeader from "@/components/basic/header";
import Footer from "@/components/footer";
import { site } from "@/lib/site";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const title = "Canary — Every vehicle, on the record";

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title: { default: title, template: "%s — Canary" },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: "website", siteName: site.name, title, description: site.description },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#0c0a09" };

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col bg-background">
        {/* Dark by default; the header toggle switches to light. */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#0c0a09] focus:px-4 focus:py-2 focus:text-[14px] focus:text-white"
          >
            Skip to content
          </a>
          <BasicHeader />
          <main id="main" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
