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
    name: "SCAN Health Plan",
    logo: "/lovable-uploads/1d0a2002-900e-4cc5-9f01-daa5cbd5b59b.png"
  },
  {
    name: "United Healthcare",
    logo: "/lovable-uploads/dc3a2b20-1649-4272-a6bf-84e40efba522.png"
  },
  {
    name: "Wellcare by Health Net",
    logo: "/lovable-uploads/9272196e-cb93-48c5-b3bb-da3debe43db8.png"
  },
  {
    name: "Molina Healthcare",
    logo: "/lovable-uploads/520f4dc2-4eb1-4a53-8fa7-caa2222fe4b8.png"
  },
  {
    name: "Covered California",
    logo: "/lovable-uploads/ebe70427-56b0-4643-8553-8cfa2206b6f8.png"
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