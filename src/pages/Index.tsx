import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProviderLogos from "@/components/ProviderLogos";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Medicare Insurance Plans & Support | Mazari Health</title>
        <meta name="description" content="Expert Medicare guidance in California. Compare plans, get enrollment assistance, and find the perfect coverage. Free consultation available. Licensed insurance agents ready to help." />
        <meta name="keywords" content="Medicare plans, Medicare insurance, Medicare Advantage, Medicare Part D, California Medicare, Medicare enrollment" />
        <meta property="og:title" content="Medicare Insurance Plans & Support | Mazari Health" />
        <meta property="og:description" content="Expert Medicare guidance in California. Compare plans, get enrollment assistance, and find the perfect coverage. Free consultation available." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <ProviderLogos />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;