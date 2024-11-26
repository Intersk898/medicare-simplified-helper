import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Globe, MapPin, BriefcaseIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState('English');

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
    <nav className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b transform transition-transform duration-300 ${
      isVisible ? 'translate-y-10' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/eaa402d1-e482-4c2e-8c37-fa8735a198de.png" 
              alt="Mazari Health" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-primary">
                <Globe className="w-4 h-4" />
                {language}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('English')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('Español')}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/find-agent" className="flex items-center gap-2 hover:text-primary">
              <MapPin className="w-4 h-4" />
              Find Agent
            </Link>

            <Link to="/careers" className="flex items-center gap-2 hover:text-primary">
              <BriefcaseIcon className="w-4 h-4" />
              Careers
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