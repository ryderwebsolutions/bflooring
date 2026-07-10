import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Process from "@/components/Process";

const title = "Our Process";
const description =
  "From first contact to a finished floor — how a job with Philip B Flooring works, start to finish.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/process",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-8">
        <Process headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
