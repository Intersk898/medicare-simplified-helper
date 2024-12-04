import { Button } from "./ui/button";
import { ArrowRight, Shield, Calendar, Phone, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-primary min-h-[90vh] flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Navigate Medicare with Confidence in California
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Experience stress-free Medicare planning with our expert guidance. Our licensed professionals ensure you get the coverage that best fits your healthcare needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" />
                <span>Licensed Medicare Agents</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-secondary" />
                <span>Free Plan Review</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-secondary" />
                <span>Local Support Team</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-secondary" />
                <span>Personalized Guidance</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                (213) 322-3542
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/37f2b1e5-0c63-4919-a3a8-94bc8abc379b.png"
              alt="Senior couple reviewing Medicare options"
              className="w-full h-auto rounded-lg shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;