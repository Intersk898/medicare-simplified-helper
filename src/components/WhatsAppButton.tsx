import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const checkFooterProximity = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsNearFooter(footerTop - windowHeight < 100);
      }
    };

    window.addEventListener('scroll', checkFooterProximity);
    return () => window.removeEventListener('scroll', checkFooterProximity);
  }, []);

  return (
    <a
      href="https://wa.me/12133223542"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 backdrop-blur-sm hover:scale-110 group ${
        isNearFooter ? 'opacity-30 hover:opacity-100' : 'opacity-100'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;