import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Diablo Description Generator v3",
  description:
    "An AI-less description generator for musical instrument classifieds",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
