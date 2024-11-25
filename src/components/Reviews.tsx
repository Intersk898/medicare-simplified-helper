import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Simulated Google reviews data (in a real application, this would come from Google's API)
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Exceptional service! They made understanding Medicare so much easier. Highly recommend their expertise.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Smith",
    rating: 5,
    text: "The team at Mazari Health went above and beyond to help me find the perfect Medicare plan. Their knowledge and patience made all the difference.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Patricia Brown",
    rating: 5,
    text: "I was overwhelmed with Medicare choices until I found Mazari Health. They simplified everything and found me great coverage.",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Robert Wilson",
    rating: 5,
    text: "Professional, knowledgeable, and caring. They took the time to understand my needs and found the best plan for my situation.",
    date: "3 months ago"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4">{review.text}</p>
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-primary">{review.name}</p>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;