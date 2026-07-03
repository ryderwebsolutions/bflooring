import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const title = "Get a Free Quote";
const description =
  "Get a free flooring quote from Philip B Flooring — call, WhatsApp, email or find us on Instagram for a job in Dublin, Meath or Louth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/contact",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-8">
        <Contact headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
