import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Globe, MapPin, BriefcaseIcon, Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

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
      
      // Calculate opacity based on scroll position
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
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#008080]/90 transition-colors">
                <Globe className="w-4 h-4" />
                {i18n.language === 'es' ? 'Español' : 'English'}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer hover:bg-[#008080]/10">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('es')} className="cursor-pointer hover:bg-[#008080]/10">
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Main Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-[#008080] transition-colors">
                <Menu className="w-4 h-4" />
                {t('medicareInformation')}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-56">
                <DropdownMenuItem>
                  <Link to="/medicare-basics" className="w-full hover:text-[#008080]">{t('medicareBasics')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/coverage-options" className="w-full hover:text-[#008080]">{t('coverageOptions')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/enrollment-help" className="w-full hover:text-[#008080]">{t('enrollmentHelp')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources" className="w-full hover:text-[#008080]">{t('resources')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quick Access Links */}
            <Link to="/find-agent" className="hidden md:flex items-center gap-2 hover:text-[#008080] transition-colors">
              <MapPin className="w-4 h-4" />
              {t('findAgent')}
            </Link>
            
            <Link to="/careers" className="hidden md:flex items-center gap-2 hover:text-[#008080] transition-colors">
              <BriefcaseIcon className="w-4 h-4" />
              {t('careers')}
            </Link>

            <Link to="/contact">
              <Button variant="default" className="bg-[#008080] hover:bg-[#008080]/90">
                {t('contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;