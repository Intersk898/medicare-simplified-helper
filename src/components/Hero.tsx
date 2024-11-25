import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="min-h-[600px] relative bg-white pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent z-10" />
        <img 
          src="/lovable-uploads/1d0a2002-900e-4cc5-9f01-daa5cbd5b59b.png"
          alt="Senior citizens enjoying life"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Reliable Medicare plans with benefits built to be used
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Find the right Medicare plan for your needs with personalized guidance from our licensed agents.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Enter your ZIP code to see available plans in your area
            </h2>
            <div className="flex gap-3">
              <Input 
                type="text" 
                placeholder="Enter ZIP code"
                className="w-full text-lg"
              />
              <Button 
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white"
              >
                Find Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;