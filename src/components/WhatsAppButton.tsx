import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/12133223542"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 backdrop-blur-sm bg-opacity-90 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;