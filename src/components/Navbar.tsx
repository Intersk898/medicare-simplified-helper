import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Globe, ChevronDown, HelpCircle, UserSearch, Briefcase } from "lucide-react";
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
        isVisible ? 'translate-y-8' : '-translate-y-full'
      }`}
      style={{ opacity }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          {/* Top Row */}
          <div className="flex items-center justify-between py-2 relative">
            <div className="flex-1" />
            <Link to="/" className="flex items-center absolute -bottom-6 left-0">
              <img 
                src="/lovable-uploads/69e99ccc-4612-40c6-955d-c467b1e540b7.png" 
                alt="Mazari Health" 
                className="h-16"
              />
            </Link>
            <div className="flex-1 flex justify-end items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 text-gray-900 hover:bg-gray-50"
                  >
                    <Globe className="w-4 h-4" />
                    {i18n.language === 'en' ? 'English' : 'Español'}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200">
                  <DropdownMenuItem onClick={() => changeLanguage('en')} className="hover:bg-gray-50">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('es')} className="hover:bg-gray-50">
                    Español
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/find-agent" 
                className="flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-primary transition-colors pt-1"
              >
                <UserSearch className="w-4 h-4" />
                {t('findAgent')}
              </Link>

              <Link 
                to="/careers" 
                className="flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-primary transition-colors pt-1"
              >
                <Briefcase className="w-4 h-4" />
                {t('careers')}
              </Link>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between py-3">
            <div className="w-32">
              {/* Spacer for logo */}
            </div>
            <div className="flex items-center justify-center flex-1 space-x-8">
              <Link 
                to="/medicare-basics" 
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
              >
                {t('medicareBasics')}
              </Link>

              <Link 
                to="/coverage-options" 
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
              >
                {t('coverageOptions')}
              </Link>

              <Link 
                to="/enrollment-help" 
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
              >
                {t('enrollmentHelp')}
              </Link>

              <Link 
                to="/resources" 
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
              >
                {t('resources')}
              </Link>
            </div>

            <div className="flex items-center gap-2 pl-4 border-l">
              <HelpCircle className="w-4 h-4 text-primary" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Questions?</span>
                <Link 
                  to="/contact"
                  className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
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