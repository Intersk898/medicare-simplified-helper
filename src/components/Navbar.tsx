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
      className={`fixed w-full bg-white z-50 border-b shadow-sm transform transition-all duration-300 ${
        isVisible ? 'translate-y-10' : '-translate-y-full'
      }`}
      style={{ opacity }}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <Link to="/find-agent" className="text-sm hover:text-primary transition-colors">
                {t('findAgent')}
              </Link>
              <Link to="/careers" className="text-sm hover:text-primary transition-colors">
                {t('careers')}
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 hover:bg-gray-100">
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
              
              <Link to="/contact">
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                  {t('contactUs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/69e99ccc-4612-40c6-955d-c467b1e540b7.png" 
              alt="Mazari Health" 
              className="h-8"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/medicare-basics" className="text-sm font-medium hover:text-primary transition-colors">
              {t('medicareBasics')}
            </Link>
            <Link to="/coverage-options" className="text-sm font-medium hover:text-primary transition-colors">
              {t('coverageOptions')}
            </Link>
            <Link to="/enrollment-help" className="text-sm font-medium hover:text-primary transition-colors">
              {t('enrollmentHelp')}
            </Link>
            <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">
              {t('resources')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;