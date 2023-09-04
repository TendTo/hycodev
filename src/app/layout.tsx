"use client";

import Navigation from "./components/navigation";
import global from "../../styles/globals.scss";
import { Providers } from "./providers";

import React from "react";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className={global.container}>
            <Navigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
