import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-up">
            Ready to Find Your Perfect Medicare Plan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized assistance from our licensed insurance agents. We're here to help you make the right choice for your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="default"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (213) 322-3542
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;