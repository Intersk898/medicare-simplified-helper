import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      // Start fading when within 300px of the footer
      const fadeStart = 300;
      const opacity = Math.min(1, distanceFromBottom / fadeStart);
      setOpacity(Math.max(0.3, opacity));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/12133223542"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110"
      style={{ opacity }}
    >
      <div className="bg-[#008080] text-white p-4 rounded-full shadow-lg hover:bg-[#008080]/90 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </div>
    </a>
  );
};

export default WhatsAppButton;