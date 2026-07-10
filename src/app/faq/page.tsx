import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

const title = "FAQ";
const description =
  "Answers to common questions about flooring supply, fitting, areas covered and the process with Philip B Flooring.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/faq",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-8">
        <Faq headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
