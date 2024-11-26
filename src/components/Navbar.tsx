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
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

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
              <DropdownMenuTrigger className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                <Globe className="w-4 h-4" />
                {i18n.language === 'es' ? 'Español' : 'English'}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('es')} className="cursor-pointer">
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-primary">
                <Menu className="w-4 h-4" />
                {t('menu')}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/medicare-basics" className="w-full">{t('medicareBasics')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/coverage-options" className="w-full">{t('coverageOptions')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/enrollment-help" className="w-full">{t('enrollmentHelp')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources" className="w-full">{t('resources')}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/find-agent" className="flex items-center gap-2 w-full">
                    <MapPin className="w-4 h-4" />
                    {t('findAgent')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/careers" className="flex items-center gap-2 w-full">
                    <BriefcaseIcon className="w-4 h-4" />
                    {t('careers')}
                  </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;