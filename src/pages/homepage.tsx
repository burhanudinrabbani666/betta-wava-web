import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { variant } from "@/lib/utils";
import { Link } from "react-router";

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
            <Card className="h-full py-0">
              <CardContent className="h-full px-0">
                <div
                  className="flex h-full flex-col justify-end bg-cover bg-top p-6"
                  style={{
                    backgroundImage: `url(/variant/${v.image}.jpg)`,
                  }}
                >
                  <Card className="mb-10">
                    <CardContent>
                      <div className="mb-4 space-y-1">
                        <p className="text-4xl font-normal tracking-tighter">
                          {v.title}
                        </p>
                        <p className="text-sm font-light">{v.description}</p>
                      </div>

                      <Link
                        to={`/variant/${v.title.toLowerCase().replace(" ", "-")}`}
                        className="border-b border-neutral-900 py-1"
                      >
                        Explore Collection &rarr;
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
