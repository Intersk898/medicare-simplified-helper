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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Medicare Insurance Plans & Support in California | Mazari Health</title>
        <meta name="description" content="Expert Medicare guidance in California. Compare Medicare Advantage, Supplement, and Part D plans. Get free consultation from licensed insurance agents. Serving Los Angeles and surrounding areas." />
        <meta name="keywords" content="Medicare plans California, Medicare insurance Los Angeles, Medicare Advantage plans, Medicare Part D, California Medicare enrollment, Medicare supplement insurance, Medigap plans, Medicare agents near me" />
        <meta property="og:title" content="Medicare Insurance Plans & Support in California | Mazari Health" />
        <meta property="og:description" content="Expert Medicare guidance in California. Compare plans, get enrollment assistance, and find the perfect coverage. Free consultation from licensed insurance agents." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mazarihealth.com" />
      </Helmet>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <ProviderLogos />
      <CTASection />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;