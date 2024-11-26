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
      
      // Start fading 200px before footer for smoother transition
      const fadeStart = 200;
      
      if (distanceFromFooter < fadeStart) {
        // Use cubic-bezier for smoother fade
        const fadeProgress = Math.max(0, distanceFromFooter / fadeStart);
        const newOpacity = Math.pow(fadeProgress, 2); // Square for smoother fade
        setOpacity(newOpacity);
        setIsVisible(newOpacity > 0.05);
      } else {
        setOpacity(1);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/12133223542"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out hover:scale-110"
      style={{ 
        opacity,
        pointerEvents: opacity < 0.05 ? 'none' : 'auto',
        transform: `scale(${0.9 + (opacity * 0.1)})` // Subtle scale effect while fading
      }}
    >
      <div className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </div>
    </a>
  );
};

export default WhatsAppButton;