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
      className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b transform transition-all duration-300 ${
        isVisible ? 'translate-y-10' : '-translate-y-full'
      }`}
      style={{ opacity }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2">
          {/* Top Row */}
          <div className="flex items-center justify-between py-2">
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
                  <Button variant="outline" className="gap-2">
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
              
              <Link to="/contact">
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  {t('contactUs')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Row - Navigation Links */}
          <div className="flex items-center justify-end gap-6 text-sm pb-2">
            <Link to="/medicare-basics" className="hover:text-primary transition-colors">
              {t('medicareBasics')}
            </Link>
            <Link to="/coverage-options" className="hover:text-primary transition-colors">
              {t('coverageOptions')}
            </Link>
            <Link to="/enrollment-help" className="hover:text-primary transition-colors">
              {t('enrollmentHelp')}
            </Link>
            <Link to="/resources" className="hover:text-primary transition-colors">
              {t('resources')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;