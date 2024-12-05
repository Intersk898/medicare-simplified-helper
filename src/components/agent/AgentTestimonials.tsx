import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AgentTestimonials = () => {
  const testimonials = [
    {
      quote: "Maria took the time to understand our specific needs and found us a plan that works perfectly with our local doctors in Sherman Oaks. Her knowledge of the Valley's healthcare system was invaluable.",
      author: "Sarah M.",
      location: "Sherman Oaks",
      rating: 5
    },
    {
      quote: "David's ability to explain Medicare options in both English and Mandarin made a huge difference for my parents. His understanding of the San Gabriel Valley's healthcare landscape helped us make the right choice.",
      author: "Michael L.",
      location: "Monterey Park",
      rating: 5
    },
    {
      quote: "Having a local agent who knows the South Bay area made all the difference in choosing the right Medicare plan. The personalized attention and expertise were exactly what I needed.",
      author: "Linda K.",
      location: "Torrance",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Real experiences from members of your community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-right">
                  <cite className="not-italic font-semibold block text-primary">
                    {testimonial.author}
                  </cite>
                  <span className="text-sm text-gray-500">
                    {testimonial.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentTestimonials;