import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">MedicarePro</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/medicare-basics" className="hover:text-primary transition-colors">Medicare Basics</Link>
          <Link to="/coverage-options" className="hover:text-primary transition-colors">Coverage Options</Link>
          <Link to="/enrollment-help" className="hover:text-primary transition-colors">Enrollment Help</Link>
          <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <Link to="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;