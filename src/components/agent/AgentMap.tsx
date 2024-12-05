import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AgentMap = () => {
  const [searchZip, setSearchZip] = useState("");
  const [activeRegion, setActiveRegion] = useState("");
  
  const regions = [
    "San Fernando Valley",
    "Greater Los Angeles Area",
    "South Bay",
    "San Gabriel Valley",
    "Long Beach Area"
  ];
  
  return (
    <section className="py-20 bg-gray-50" id="find-agent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Medicare Agents Near You</h2>
          <p className="text-gray-600">
            Our Medicare specialists are strategically located across LA County to provide personalized support in your area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 p-6">
              <div className="mb-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your ZIP code" 
                    value={searchZip}
                    onChange={(e) => setSearchZip(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-full bg-gray-100 rounded-lg">
                {/* Interactive map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Interactive LA County Map
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Coverage Areas Include:</h3>
              <ul className="space-y-3">
                {regions.map((region) => (
                  <li 
                    key={region}
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors cursor-pointer"
                    onMouseEnter={() => setActiveRegion(region)}
                    onMouseLeave={() => setActiveRegion("")}
                  >
                    <MapPin className={`w-5 h-5 ${activeRegion === region ? "text-secondary" : "text-primary"}`} />
                    <span className={activeRegion === region ? "font-medium" : ""}>{region}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-gray-700">
                Each region is served by Medicare specialists who understand the local healthcare landscape, including available providers, plans, and community resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentMap;