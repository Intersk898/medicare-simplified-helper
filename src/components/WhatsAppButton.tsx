import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Start fading 300px before the footer
      const fadeStartPoint = documentHeight - windowHeight - 300;
      
      if (scrollTop > fadeStartPoint) {
        const fadeDistance = 300; // Distance over which the fade occurs
        const fadeProgress = (scrollTop - fadeStartPoint) / fadeDistance;
        const newOpacity = Math.max(0, 1 - fadeProgress);
        setOpacity(newOpacity);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (opacity > 0.1) { // Only allow clicks if button is visible enough
      window.open('https://wa.me/12133223542', '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 right-4 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 ${
        opacity < 0.1 ? 'pointer-events-none' : ''
      }`}
      style={{ 
        opacity,
        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"
        />
      </svg>
    </button>
  );
};

export default WhatsAppButton;