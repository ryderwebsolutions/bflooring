import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const title = "Our Services";
const description =
  "Timber, laminate, vinyl and carpet flooring supplied and fitted by Philip B Flooring across Dublin, Meath and Louth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/services",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-8">
        <Services headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
