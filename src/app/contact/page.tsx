import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Get a Free Quote | Philip B Flooring",
  description:
    "Request a free flooring quote from Philip B Flooring — call, WhatsApp, email or send your details for a job in Dublin, Meath or Louth.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-8">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
