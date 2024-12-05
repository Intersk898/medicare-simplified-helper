const AgentTestimonials = () => {
  const testimonials = [
    {
      quote: "Our agent took the time to understand our specific needs and found us a plan that works perfectly with our local doctors.",
      author: "Sarah M.",
      location: "Pasadena"
    },
    {
      quote: "Having an agent who knows the local healthcare landscape made all the difference in choosing the right Medicare plan.",
      author: "Robert L.",
      location: "Long Beach"
    },
    {
      quote: "The personalized attention and local expertise helped me navigate Medicare with confidence.",
      author: "Linda K.",
      location: "Sherman Oaks"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Real experiences from members of your community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-right">
                <cite className="not-italic font-semibold block">
                  {testimonial.author}
                </cite>
                <span className="text-sm text-gray-500">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentTestimonials;