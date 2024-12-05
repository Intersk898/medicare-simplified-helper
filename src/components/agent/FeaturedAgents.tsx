import { Star, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedAgents = () => {
  const agents = [
    {
      name: "Maria Rodriguez",
      image: "/lovable-uploads/69e99ccc-4612-40c6-955d-c467b1e540b7.png",
      specialty: "San Fernando Valley Medicare Specialist",
      description: "With over 8 years of experience serving the Valley, Maria helps seniors navigate their Medicare options while considering local healthcare provider networks.",
      languages: ["English", "Spanish"],
      rating: 5,
      reviews: 47
    },
    {
      name: "David Chen",
      image: "/lovable-uploads/75168212-b72f-40e0-8071-3870cef7975d.png",
      specialty: "San Gabriel Valley Medicare Expert",
      description: "David specializes in helping diverse communities understand their Medicare benefits and find plans that match their unique needs. 12+ years of experience.",
      languages: ["English", "Mandarin", "Cantonese"],
      rating: 5,
      reviews: 52
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Medicare Specialists</h2>
          <p className="text-gray-600">
            Experienced local agents dedicated to finding the right Medicare coverage for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <div 
              key={agent.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={agent.image}
                  alt={`${agent.name} - ${agent.specialty}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{agent.name}</h3>
                    <p className="text-primary font-medium">{agent.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{agent.rating}</span>
                    <span className="text-gray-500 text-sm">({agent.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{agent.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Languages:</p>
                  <p className="font-medium">{agent.languages.join(", ")}</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.location.href = "tel:2133223542"}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button 
                    className="flex-1 bg-secondary hover:bg-secondary/90"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;