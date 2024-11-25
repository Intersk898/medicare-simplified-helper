import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b animate-fade-down">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary transition-colors hover:text-primary/80">
          MedicarePro
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/medicare-basics" className="hover:text-primary transition-all duration-300 hover:translate-y-[-2px]">
            Medicare Basics
          </Link>
          <Link to="/coverage-options" className="hover:text-primary transition-all duration-300 hover:translate-y-[-2px]">
            Coverage Options
          </Link>
          <Link to="/enrollment-help" className="hover:text-primary transition-all duration-300 hover:translate-y-[-2px]">
            Enrollment Help
          </Link>
          <Link to="/resources" className="hover:text-primary transition-all duration-300 hover:translate-y-[-2px]">
            Resources
          </Link>
          <Link to="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:translate-y-[-2px]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;