import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const MedicareHero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-primary pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Understanding Medicare
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-up delay-100">
            Your comprehensive guide to Medicare coverage, eligibility, and enrollment options. Let our experts help you navigate your healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
            <Link to="/contact">
              <Button 
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto transition-all duration-300 hover:translate-y-[-2px]"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (213) 322-3542
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicareHero;