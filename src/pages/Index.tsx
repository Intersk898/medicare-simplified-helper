import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProviderLogos from "@/components/ProviderLogos";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import BusinessHeader from "@/components/BusinessHeader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Medicare Insurance Plans & Support in California | Mazari Health</title>
        <meta name="description" content="Expert Medicare guidance in California. Compare Medicare Advantage, Supplement, and Part D plans. Get free consultation from licensed insurance agents. Serving Los Angeles and surrounding areas." />
        <meta name="keywords" content="Medicare plans California, Medicare insurance Los Angeles, Medicare Advantage plans, Medicare Part D, California Medicare enrollment, Medicare supplement insurance, Medigap plans, Medicare agents near me" />
      </Helmet>
      <BusinessHeader />
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <WhyChooseUs />
        <Services />
        <ProviderLogos />
        <CTASection />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;