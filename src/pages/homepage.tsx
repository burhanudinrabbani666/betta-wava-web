import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { variant } from "@/lib/utils";
import { useUser } from "@/module/auth/hooks";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Homepage() {
  const [api, setApi] = useState<CarouselApi>();
  const { isAuthenticated, user, isPending, error } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;

    const COOLDOWN_MS = 800; // adjust to match your transition duration
    let isScrolling = false;

    const scroll = (direction: "next" | "prev") => {
      if (isScrolling) return;
      isScrolling = true;

      if (direction === "next") {
        api.scrollNext();
      } else {
        api.scrollPrev();
      }

      setTimeout(() => {
        isScrolling = false;
      }, COOLDOWN_MS);
    };

    // Mouse wheel scroll
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        scroll("next");
      } else {
        scroll("prev");
      }
    };

    // Arrow key scroll
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        scroll("next");
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        scroll("prev");
      }
    };

    const container = api.rootNode();
    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [api]);

  if (!isAuthenticated) {
    navigate("/login");
  }

  if (isPending || !user) return <p>Loading User</p>;
  if (error) return <p>Load Products Error</p>;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="h-svh w-full"
      setApi={setApi}
    >
      <CarouselContent className="mt-0 h-svh">
        {variant.map((v, index) => (
          <CarouselItem key={index} className="h-svh basis-full p-0">
            <Link to={v.path}>
              <div
                className="relative flex h-svh flex-col justify-end bg-cover bg-center"
                style={{
                  backgroundImage: `url(/variant/${v.image}.jpg)`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-4 pb-16 sm:p-8 sm:pb-20 md:p-12 md:pb-24">
                  <div className="max-w-sm space-y-3 sm:max-w-md">
                    <p className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
                      {v.title}
                    </p>
                    <p className="text-xs leading-relaxed font-light text-white/80 sm:text-sm">
                      {v.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block border-b border-white/60 pb-0.5 text-xs tracking-widest text-white uppercase transition-colors hover:border-white sm:text-sm">
                        Explore Collection &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
