import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "Diablo Description Generator v3",
	description:
		"An AI-less description generator for musical instrument classifieds",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<JotaiProvider>
					<TRPCReactProvider>{children}</TRPCReactProvider>
				</JotaiProvider>
			</body>
		</html>
	);
}
