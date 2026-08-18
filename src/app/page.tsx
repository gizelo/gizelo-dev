import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Robert Gizelo — Product Builder",
  description:
    "Product builder with 6+ years across SaaS, fintech and crypto, working across product definition, UX, engineering and delivery.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Gizelo",
  url: "https://gizelo.dev",
  jobTitle: "Product Builder",
  sameAs: ["https://www.linkedin.com/in/gizelo/", "https://t.me/gizelo"],
  knowsAbout: [
    "Product management",
    "Product design",
    "Software engineering",
    "SaaS",
    "Fintech",
    "Crypto products",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <HomePage />
    </>
  );
}
