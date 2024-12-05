import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AgentForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! A local Medicare specialist will contact you soon.");
  };

  return (
    <section className="py-20 bg-white" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Connect with a Local Medicare Specialist</h2>
            <p className="text-gray-600">
              Get personalized Medicare guidance from an agent who knows your neighborhood and local healthcare options.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Input placeholder="ZIP Code" required />
            <Textarea 
              placeholder="Tell us about your Medicare needs (optional)" 
              className="min-h-[100px]"
            />
            <div className="text-sm text-gray-500 mb-4">
              By submitting this form, you agree to be contacted by a licensed Medicare specialist from Mazari Health Insurance Services.
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
            >
              Find My Local Medicare Specialist
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AgentForm;