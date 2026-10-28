import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Robert Gizelo — Product Builder",
  description:
    "Robert Gizelo is a Product Builder who designs and develops web and mobile applications, independently and with teams, from business idea to release.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Gizelo",
  url: "https://www.gizelo.dev",
  jobTitle: "Product Builder",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frankfurt",
    addressCountry: "Germany",
  },
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
