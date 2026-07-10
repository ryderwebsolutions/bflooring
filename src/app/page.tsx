import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Process />
        <ServiceAreas />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
