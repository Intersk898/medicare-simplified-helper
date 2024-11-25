import { Check, Shield, Calendar, Pills } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const services = [
  {
    title: "Plan Comparisons",
    description: "Compare Medicare plans side by side to find your perfect match",
    icon: Check,
  },
  {
    title: "Enrollment Assistance",
    description: "Get help navigating the enrollment process with ease",
    icon: Shield,
  },
  {
    title: "Coverage Options",
    description: "Understand all your Medicare coverage options clearly",
    icon: Calendar,
  },
  {
    title: "Prescription Plans",
    description: "Find the best prescription drug coverage for your needs",
    icon: Pills,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How I Can Help</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;