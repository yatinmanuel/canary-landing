import type { Metadata } from "next";
import React from "react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import BasicHeader from "@/components/basic/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Canary | Every vehicle, on the record",
  description:
    "Canary lives behind the dash and tells you where your car is, how it's being driven, and the second anyone touches it. Built for rental hosts, fleets and owners. One car, or a thousand.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col bg-background">
        {/* The basic layout is light-only: the dark bands are painted with fixed
            colours, so there is no theme to switch and no toggle in the header. */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <BasicHeader />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
