import { useState, useEffect } from "react";

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
    <div className={`fixed w-full bg-primary text-white text-sm py-2 z-[60] transform transition-all duration-300 ${
      isVisible ? 'top-0' : '-top-full'
    }`}>
      <div className="container mx-auto px-4 text-center">
        Hours: 8 a.m. to 8 p.m. 7 days a week | Call <a href="tel:2133223542" className="hover:underline">(213) 322-3542</a>
      </div>
    </div>
  );
};

export default BusinessHeader;