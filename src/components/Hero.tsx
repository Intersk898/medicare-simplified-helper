import { Button } from "./ui/button";
import { ArrowRight, Calendar, Shield, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-screen flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Medicare Plan in California
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Licensed insurance agents ready to help you navigate Medicare with confidence. Get personalized guidance and find the right coverage for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span>Licensed Insurance Agents</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <span>Free Medicare Consultation</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>Immediate Support Available</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              Compare Plans Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Learn About Medicare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;