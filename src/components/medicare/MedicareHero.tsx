import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MedicareHero = () => {
  return (
    <div className="relative h-[500px] mb-16">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/c2234e30-84cf-4187-b4d3-c8566efe3ec0.png"
          alt="Senior couple reviewing Medicare documents"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6 animate-fade-up">
          Understanding Medicare
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8 animate-fade-up delay-100">
          Your comprehensive guide to Medicare coverage, eligibility, and enrollment options.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule Free Consultation
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call (213) 322-3542
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedicareHero;