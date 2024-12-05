const FeaturedAgents = () => {
  const agents = [
    {
      name: "Maria Rodriguez",
      image: "/lovable-uploads/69e99ccc-4612-40c6-955d-c467b1e540b7.png",
      specialty: "San Fernando Valley Medicare Specialist",
      description: "With deep roots in the Valley, Maria helps seniors navigate their Medicare options while considering local healthcare provider networks.",
      years: 8
    },
    {
      name: "David Chen",
      image: "/lovable-uploads/75168212-b72f-40e0-8071-3870cef7975d.png",
      specialty: "San Gabriel Valley Medicare Expert",
      description: "David specializes in helping diverse communities understand their Medicare benefits and find plans that match their unique needs.",
      years: 12
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Featured Agents</h2>
          <p className="text-gray-600">
            Experienced Medicare specialists dedicated to serving your community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div 
              key={agent.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p className="text-primary font-medium mb-2">{agent.specialty}</p>
                <p className="text-gray-600 mb-4">{agent.description}</p>
                <p className="text-sm text-gray-500">
                  {agent.years} years of Medicare experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;