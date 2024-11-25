import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b transition-transform duration-300 ${
      isVisible ? 'translate-y-[40px]' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/330ec2eb-d0af-42bc-be0b-bbdbfb2fd6f1.png" 
            alt="Mazari Health" 
            className="h-12 w-auto"
          />
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