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
  "I build web, mobile and desktop apps end to end with React, Next.js, TypeScript and Node.js. See the products I’ve built, solo, as lead developer and in teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gizelo.dev"),
  title: {
    default: "Robert Gizelo — Full-Stack Developer",
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
    title: "Robert Gizelo — Full-Stack Developer",
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Robert Gizelo — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Gizelo — Full-Stack Developer",
    description: siteDescription,
    images: ["/og-image.png"],
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
