import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProviderLogos from "@/components/ProviderLogos";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
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