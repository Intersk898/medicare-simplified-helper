import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
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
      className={`fixed w-full bg-white z-50 transform transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ opacity }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/69e99ccc-4612-40c6-955d-c467b1e540b7.png" 
              alt="Mazari Health" 
              className="h-8"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-20">
            {/* First Column */}
            <div className="flex flex-col space-y-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-1 hover:bg-gray-100 bg-white text-sm font-medium px-2 h-8"
                  >
                    <Globe className="w-4 h-4" />
                    {i18n.language === 'en' ? 'English' : 'Español'}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('es')}>
                    Español
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link 
                to="/medicare-basics" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('medicareBasics')}
              </Link>
            </div>

            {/* Second Column */}
            <div className="flex flex-col space-y-5">
              <Link 
                to="/find-agent" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('findAgent')}
              </Link>
              <Link 
                to="/coverage-options" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('coverageOptions')}
              </Link>
            </div>

            {/* Third Column */}
            <div className="flex flex-col space-y-5">
              <Link 
                to="/careers" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('careers')}
              </Link>
              <Link 
                to="/enrollment-help" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('enrollmentHelp')}
              </Link>
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col space-y-5">
              <Link to="/contact">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90 text-sm font-medium px-4 h-8"
                >
                  {t('contactUs')}
                </Button>
              </Link>
              <Link 
                to="/resources" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t('resources')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;