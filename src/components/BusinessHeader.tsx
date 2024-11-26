import { useState, useEffect } from "react";
import { Phone, Clock } from "lucide-react";

const BusinessHeader = () => {
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
    <div className={`fixed w-full bg-primary text-white py-1.5 z-[70] transform transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Hours: 8 a.m. to 8 p.m. 7 days a week</span>
        </div>
        <a href="tel:2133223542" className="flex items-center gap-2 hover:underline">
          <Phone className="w-4 h-4" />
          (213) 322-3542
        </a>
      </div>
    </div>
  );
};

export default BusinessHeader;