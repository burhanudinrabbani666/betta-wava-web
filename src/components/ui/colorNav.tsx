import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";

const colorVariant = [
  "Multicolor",
  "Bluerim",
  "Avatar",
  "Blue dot",
  "Two Tone",
  "Alien",
  "Solid",
];

function ColorNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const colorParams = searchParams.get("color");

  function handleSetColor(color: string) {
    searchParams.set("color", color);
    setSearchParams(searchParams);
  }

  return (
    <div className="px-4 py-2">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={"auto"}
        loop={true}
        style={{ padding: "10px" }}
      >
        {colorVariant.map((color) => (
          <SwiperSlide
            key={color}
            style={{ width: "auto" }}
            onClick={() => handleSetColor(color)}
          >
            <span
              className={cn(
                "border-b border-transparent px-2 py-2 font-semibold",
                colorParams === color ? "border-lime-600 text-lime-600" : "",
              )}
            >
              {color}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ColorNav;
