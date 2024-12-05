import { useState } from "react";
import { MapPin } from "lucide-react";

const AgentMap = () => {
  const [activeRegion, setActiveRegion] = useState("");
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Coverage Throughout Los Angeles County</h2>
          <p className="text-gray-600">
            Our Medicare specialists are strategically located across LA County to provide personalized support in your area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for interactive map - would be replaced with actual map implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Interactive LA County Map</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Coverage Areas Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Fernando Valley</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Greater Los Angeles Area</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>South Bay</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Gabriel Valley</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Long Beach Area</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentMap;