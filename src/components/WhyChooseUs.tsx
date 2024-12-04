import { Check, Users, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "Licensed & Certified",
    description: "Our agents are licensed in California and certified with all major Medicare carriers."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Deep understanding of California Medicare plans and local healthcare providers."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "We take time to understand your needs and find the perfect plan match."
  },
  {
    icon: Clock,
    title: "Year-Round Support",
    description: "We're here for you beyond enrollment, providing ongoing assistance when needed."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-up">Why Choose Mazari Health?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to making Medicare simple and accessible for everyone in California.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;