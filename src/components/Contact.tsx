import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Get Started!</h2>
          <p className="text-gray-600 mb-8">
            Schedule your free consultation today and get expert Medicare guidance.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Textarea placeholder="How can we help you?" className="min-h-[100px]" />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Schedule Free Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;