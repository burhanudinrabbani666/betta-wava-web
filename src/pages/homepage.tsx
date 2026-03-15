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
      <CarouselContent className="mt-0 h-screen">
        {variant.map((v, index) => (
          <CarouselItem className="h-screen basis-full px-0 pt-0 pl-0">
            <Link to={`/variant/${v.title.toLowerCase().replace(" ", "-")}`}>
              <Card className="h-full rounded-none py-0">
                <CardContent key={index} className="h-full px-0">
                  <div
                    className="relative flex h-full flex-col justify-end bg-cover bg-center p-6"
                    style={{
                      backgroundImage: `url(/variant/${v.image}.jpg)`,
                    }}
                  >
                    <Card className="mb-10 w-fit border border-neutral-50/40 bg-neutral-900/20 text-white">
                      <CardContent>
                        <div className="mb-4 space-y-1">
                          <p className="text-2xl font-normal tracking-tighter">
                            {v.title}
                          </p>
                          <p className="text-xs font-light">{v.description}</p>
                        </div>

                        <span className="border-b border-neutral-900 py-1 text-xs">
                          Explore Collection &rarr;
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
