import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-screen flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Trusted Medicare Specialist Broker
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Simplifying Medicare so you can focus on what matters most. Get personalized guidance for your healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Compare Plans Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn About Medicare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;