import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { variant } from "@/lib/utils";

export default function Homepage() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="h-screen w-full"
    >
      <CarouselContent className="h-screen">
        {variant.map((v, index) => (
          <CarouselItem key={index} className="h-screen basis-full px-2">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-end">
                <div className="mb-28 space-y-2">
                  <p className="text-xl font-normal">{v.title}</p>
                  <p className="text-sm font-light">{v.description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
