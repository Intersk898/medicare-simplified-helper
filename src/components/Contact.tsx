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
        <div className="max-w-xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-gray-600 mb-8">
            Connect with our Medicare specialists for personalized guidance. Reach us at <a href="tel:2133223542" className="text-primary hover:underline">(213) 322-3542</a> or fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              placeholder="Your Name" 
              required 
              className="transition-all duration-300 hover:border-primary focus:border-primary"
            />
            <Input 
              type="email" 
              placeholder="Email Address" 
              required 
              className="transition-all duration-300 hover:border-primary focus:border-primary"
            />
            <Input 
              type="tel" 
              placeholder="Phone Number" 
              required 
              className="transition-all duration-300 hover:border-primary focus:border-primary"
            />
            <Textarea 
              placeholder="Tell us about your Medicare needs" 
              className="min-h-[100px] transition-all duration-300 hover:border-primary focus:border-primary" 
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Request Free Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;