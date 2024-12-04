import MedicareHero from "@/components/medicare/MedicareHero";
import MedicareOverview from "@/components/medicare/MedicareOverview";
import MedicareParts from "@/components/medicare/MedicareParts";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";

const MedicareBasics = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <MedicareHero />
        <MedicareOverview />
        <MedicareParts />
        <CTASection />
        <Contact />
      </div>
    </div>
  );
};

export default MedicareBasics;