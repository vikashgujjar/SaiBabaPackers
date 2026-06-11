import Topbar from "@/app/components/Topbar";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import FeaturesStrip from "@/app/components/FeaturesStrip";
import AboutIntro from "@/app/components/AboutIntro";
import Services from "@/app/components/Services";
import CtaBanner from "@/app/components/CtaBanner";
import QuoteForm from "@/app/components/QuoteForm";
import AboutUs from "@/app/components/AboutUs";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import ClientsCounters from "@/app/components/ClientsCounters";
import PricingTable from "@/app/components/PricingTable";
import LocationsSection from "@/app/components/LocationsSection";
import SeoContent from "@/app/components/SeoContent";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
        <Hero />
        <FeaturesStrip />
        <AboutIntro />
        <Services />
        <CtaBanner />
        <QuoteForm />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <ClientsCounters />
        <PricingTable />
        <SeoContent />
        <LocationsSection />
    </>
  );
}
