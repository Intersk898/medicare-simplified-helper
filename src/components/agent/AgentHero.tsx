const AgentHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down">
            Your Local Medicare Experts in Los Angeles County
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up">
            Connect with experienced Medicare specialists who understand your community's unique healthcare needs. Our agents live and work in your neighborhood, providing personalized guidance for your Medicare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <a 
              href="#find-agent" 
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Find Your Local Agent
            </a>
            <a 
              href="tel:2133223542" 
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Call (213) 322-3542
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;