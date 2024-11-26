import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Globe, ChevronDown, Building, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = currentScrollY / maxScroll;
      
      const newOpacity = Math.max(0.3, 1 - scrollPercentage * 1.5);
      setOpacity(newOpacity);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed w-full bg-white shadow-sm z-50 transform transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ opacity }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Top Row */}
          <div className="flex items-center justify-between py-2 border-b relative">
            {/* Logo with negative margin to intersect the border */}
            <Link to="/" className="flex items-center -mb-3">
              <img 
                src="/lovable-uploads/69e99ccc-4612-40c6-955d-c467b1e540b7.png" 
                alt="Mazari Health" 
                className="h-12 transform translate-y-1"
              />
            </Link>
            
            <div className="flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 hover:bg-gray-100 bg-gray-50"
                  >
                    <Globe className="w-4 h-4" />
                    {i18n.language === 'en' ? 'English' : 'Español'}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('es')}>
                    Español
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/find-agent" 
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              >
                <Building className="w-4 h-4" />
                {t('findAgent')}
              </Link>

              <Link 
                to="/careers" 
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                {t('careers')}
              </Link>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between py-3">
            {/* Centered navigation links */}
            <div className="flex-1" />
            <div className="flex items-center justify-center space-x-8 flex-[2]">
              <Link 
                to="/medicare-basics" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('medicareBasics')}
              </Link>

              <Link 
                to="/coverage-options" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('coverageOptions')}
              </Link>

              <Link 
                to="/enrollment-help" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('enrollmentHelp')}
              </Link>

              <Link 
                to="/resources" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('resources')}
              </Link>
            </div>

            <div className="flex items-center gap-2 pl-4 border-l flex-1 justify-end">
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-600">Questions?</span>
                <Link 
                  to="/contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {t('contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;