import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Yvonne Hernandez",
    rating: 5,
    text: "Excellent service! Mazari Health Insurance Services helped me find the perfect Medicare plan. They were very knowledgeable and patient in explaining all my options.",
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Margarita Gonzalez",
    rating: 5,
    text: "Very professional and helpful. They took their time to explain everything in detail. Highly recommend their services!",
    date: "a month ago"
  },
  {
    id: 3,
    name: "Maria Sanchez",
    rating: 5,
    text: "Great experience with Mazari Health Insurance Services. They made the Medicare enrollment process very easy to understand.",
    date: "3 months ago"
  },
  {
    id: 4,
    name: "Jose Rodriguez",
    rating: 5,
    text: "Excellent customer service! They helped me find the best Medicare plan for my needs. Very knowledgeable and professional.",
    date: "2 months ago"
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