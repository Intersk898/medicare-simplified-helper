import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const providers = [
  {
    name: "Anthem Health Insurance",
    logo: "/wp-content/uploads/2024/04/Anthem-Health-Insurance.png"
  },
  {
    name: "L.A. Care Health Plan",
    logo: "/wp-content/uploads/2024/04/L.A.-Care-Health-Plan.png"
  },
  {
    name: "Blue California",
    logo: "/wp-content/uploads/2024/04/Blue-California-logo.png"
  },
  {
    name: "Brand New Day",
    logo: "/wp-content/uploads/2024/04/Brand-New-Day-logo.png"
  },
  {
    name: "Central Health Medicare Plan",
    logo: "/wp-content/uploads/2024/04/Central-Health-Medicare-Plan.png"
  },
  {
    name: "Covered California",
    logo: "/wp-content/uploads/2024/04/Covered-California-Logo.png"
  },
  {
    name: "SCAN Health Plan",
    logo: "/wp-content/uploads/2024/04/SCAN-Health-Plan-logo.png"
  },
  {
    name: "United Healthcare",
    logo: "/wp-content/uploads/2024/04/United-Healthcare.png"
  },
  {
    name: "Wellcare by Health Net",
    logo: "/wp-content/uploads/2024/04/Wellcare-by-Health-Net.png"
  },
  {
    name: "Molina Healthcare",
    logo: "/wp-content/uploads/2024/04/Molina-Healthcare.png"
  }
];

const ProviderLogos = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false,
      align: "start",
      slidesToScroll: 1,
    },
    isVisible ? [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      })
    ] : []
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          We offer a diverse range of plans from trusted healthcare providers:
        </h2>
        <div className="max-w-6xl mx-auto">
          <Carousel
            ref={emblaRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {providers.map((provider, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="p-4 h-32 flex items-center justify-center">
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="max-h-full max-w-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProviderLogos;