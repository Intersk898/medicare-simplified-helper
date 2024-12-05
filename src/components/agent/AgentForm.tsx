import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AgentForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! An agent will contact you soon.");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Connect with a Local Agent</h2>
            <p className="text-gray-600">
              Tell us about your Medicare needs, and we'll match you with an agent who specializes in your area.
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
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
            >
              Find My Local Agent
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AgentForm;