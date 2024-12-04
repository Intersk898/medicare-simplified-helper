import MedicareHero from "@/components/medicare/MedicareHero";
import MedicareOverview from "@/components/medicare/MedicareOverview";
import MedicareParts from "@/components/medicare/MedicareParts";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const MedicareBasics = () => {
  return (
    <div className="min-h-screen">
      <main>
        <MedicareHero />
        <MedicareOverview />
        <MedicareParts />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MedicareBasics;