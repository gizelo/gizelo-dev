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

export const metadata: Metadata = {
  metadataBase: new URL("https://gizelo.dev"),
  title: {
    default: "Robert Gizelo — Product Builder",
    template: "%s — Robert Gizelo",
  },
  description:
    "Product builder with 6+ years across SaaS, fintech and crypto, working across product definition, UX, engineering and delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Robert Gizelo",
    title: "Robert Gizelo — Product Builder",
    description: "Turning ideas into working products across SaaS, fintech and crypto.",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Robert Gizelo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Gizelo — Product Builder",
    description: "Turning ideas into working products across SaaS, fintech and crypto.",
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
  themeColor: "#F4F2EB",
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
        <Analytics />
      </body>
    </html>
  );
}
