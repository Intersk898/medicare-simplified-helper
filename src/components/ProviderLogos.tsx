import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const providers = [
  {
    name: "Brand New Day",
    logo: "/lovable-uploads/02110580-e1d8-4ef7-bdf2-8d18e4dcb7dd.png"
  },
  {
    name: "Anthem Health Insurance",
    logo: "/lovable-uploads/fe9c323f-7736-4a1f-b445-0050482a01d8.png"
  },
  {
    name: "L.A. Care Health Plan",
    logo: "/lovable-uploads/673f8996-7410-45d0-a5ef-9f3977b656d8.png"
  },
  {
    name: "Blue California",
    logo: "/lovable-uploads/eb1a4ba3-0f87-4309-8868-29d65e872217.png"
  },
  {
    name: "Central Health Medicare Plan",
    logo: "/lovable-uploads/75168212-b72f-40e0-8071-3870cef7975d.png"
  }
];

const ProviderLogos = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
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