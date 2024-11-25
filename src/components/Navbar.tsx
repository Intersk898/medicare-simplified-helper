import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">MedicarePro</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#basics" className="hover:text-primary transition-colors">Medicare Basics</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;