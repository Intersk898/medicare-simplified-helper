import { MapPin } from "lucide-react";

const AgentHero = () => {
  return (
    <div className="bg-primary text-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Local Medicare Experts in Los Angeles County
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with dedicated Medicare specialists who understand your neighborhood's unique healthcare needs. Our team serves every community across Los Angeles County.
          </p>
          <div className="flex items-center justify-center gap-2 text-secondary">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">Serving all of Los Angeles County</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHero;