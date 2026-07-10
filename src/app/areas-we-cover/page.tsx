import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/ServiceAreas";

const title = "Areas We Cover";
const description =
  "Philip B Flooring supplies and fits timber, laminate, vinyl and carpet flooring across Dublin, Meath and Louth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/areas-we-cover",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/areas-we-cover",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function AreasWeCoverPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-8">
        <ServiceAreas headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
