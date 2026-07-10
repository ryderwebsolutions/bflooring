import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";

const title = "Why Choose Us";
const description =
  "Philip B Flooring: the person who quotes the job is the person who fits it. No call centre, no sales team, no subcontractors.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/why-us",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/why-us",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-8">
        <WhyUs headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
