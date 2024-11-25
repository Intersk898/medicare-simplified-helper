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
    <nav className={`fixed w-full bg-white shadow-sm z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-[40px]' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/330ec2eb-d0af-42bc-be0b-bbdbfb2fd6f1.png" 
              alt="Mazari Health" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/medicare-basics" className="text-gray-600 hover:text-primary transition-colors">
              Medicare Basics
            </Link>
            <Link to="/coverage-options" className="text-gray-600 hover:text-primary transition-colors">
              Coverage Options
            </Link>
            <Link to="/enrollment-help" className="text-gray-600 hover:text-primary transition-colors">
              Enrollment Help
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/contact">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;