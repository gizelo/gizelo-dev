import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const isVercelDeployment = process.env.VERCEL === "1";
const siteDescription =
  "Robert Gizelo is a Technical Product Manager shaping requirements, UX, priorities and cross-functional delivery for web and mobile products, backed by software engineering experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gizelo.dev"),
  title: {
    default: "Robert Gizelo — Technical Product Manager",
    template: "%s — Robert Gizelo",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Robert Gizelo",
    title: "Robert Gizelo — Technical Product Manager",
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Gizelo — Technical Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Gizelo — Technical Product Manager",
    description: siteDescription,
    images: ["/og-image-v2.jpg"],
  },
  icons: {
    icon: "/asterisk-color.svg",
    shortcut: "/asterisk-color.svg",
    apple: "/asterisk-color.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 bg-electric px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        {isVercelDeployment && <Analytics />}
      </body>
    </html>
  );
}
