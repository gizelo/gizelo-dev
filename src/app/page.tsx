import type { Metadata } from "next";
import HomePage from "@/views/HomePage";
import JsonLd from "@/components/JsonLd";
import { homeSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <HomePage />
    </>
  );
}
