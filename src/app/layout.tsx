import type { Metadata } from "next";
import { Inter, Kumbh_Sans, Lato, Red_Hat_Display } from "next/font/google";
import "./globals.css";
// Shared eloxlease.nl theme layer; page stylesheets (imported by each route) load after it.
import "@/components/sites/eloxlease/chrome.css";

// The source declares Inter only at 400 and 600; heavier weights render with the 600 face.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["700"],
});

// Used by the accordion titles on the Over ons page.
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["700"],
});

// The theme's button font, used by the form submit buttons.
const redHatDisplay = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Bezorgfietsen- en scooters leasen? Bekijk onze lease-opties",
  description:
    "Een vast bedrag per maand voor zakelijke bezorgfietsen en bezorgscooters, inclusief onderhoud, verzekering en service.",
  icons: {
    icon: [
      { url: "/sites/eloxlease/icon-32.png", sizes: "32x32" },
      { url: "/sites/eloxlease/icon-192.png", sizes: "192x192" },
    ],
    apple: "/sites/eloxlease/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl-NL"
      className={`${inter.variable} ${kumbhSans.variable} ${redHatDisplay.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
