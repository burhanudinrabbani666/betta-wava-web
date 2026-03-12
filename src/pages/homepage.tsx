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
          <CarouselItem key={index} className="-my-2 h-screen basis-full px-0">
            <Link to={`/variant/${v.title.toLowerCase().replace(" ", "-")}`}>
              <Card className="h-full rounded-none py-0">
                <CardContent className="h-full px-0">
                  <div
                    className="relative flex h-full flex-col justify-end bg-cover bg-center p-6"
                    style={{
                      backgroundImage: `url(/variant/${v.image}.jpg)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-linear-to-b from-neutral-950/90 via-transparent to-transparent to-5%"></div>
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
