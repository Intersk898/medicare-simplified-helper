import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const distanceFromFooter = footerTop - windowHeight;
      
      // Start fading 100px before footer
      const fadeStart = 100;
      
      if (distanceFromFooter < fadeStart) {
        const newOpacity = Math.max(0, distanceFromFooter / fadeStart);
        setOpacity(newOpacity);
        setIsVisible(newOpacity > 0.1);
      } else {
        setOpacity(1);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/12133223542"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition-all duration-300 hover:scale-110"
      style={{ 
        opacity,
        pointerEvents: opacity < 0.1 ? 'none' : 'auto'
      }}
    >
      <div className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </div>
    </a>
  );
};

export default WhatsAppButton;