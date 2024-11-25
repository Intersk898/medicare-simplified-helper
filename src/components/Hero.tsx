import { Button } from "./ui/button";
import { ArrowRight, Calendar, Shield, Phone, FileCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-screen flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Navigate Medicare with Confidence in California
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Experience stress-free Medicare planning with our expert guidance. Our licensed professionals ensure you get the coverage that best fits your healthcare needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span>Certified Medicare Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <span>Complimentary Plan Review</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>Dedicated Support Team</span>
            </div>
            <div className="flex items-center gap-3">
              <FileCheck className="w-6 h-6" />
              <span>Free Consultation</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;