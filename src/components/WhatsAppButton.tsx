import { WhatsApp } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/12133223542"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
    >
      <WhatsApp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;