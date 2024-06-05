"use client";
import "@/styles/globals.css";
import { Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { title } from "@/components/primitives";

import TradingViewWidget from "@/components/TradingViewWidget";
import Stock from "@/components/Stock";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Navbar2 } from "@/components/navbar2";
import { Hero } from "@/components/hero";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen ">
            <Navbar />
            <section className="flex items-center pb-5 justify-center gap-4 py-8 md:py-10">
              <Hero />
            </section>
            <section className="flex mt-5 p-10 border-gray-400 border-small  shadow-2xl shadow-gray-700 rounded-xl">
              <div className="flex items-center justify-between h-full w-full rounded-lg border-gray-300 bg-opacity-6">
                <Stock />
                <TradingViewWidget />
              </div>
            </section>

            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/jdrumgole"
              >
                <span className="text-default-600">Created by</span>
                <p className="text-primary">Johnny Drumgole</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
