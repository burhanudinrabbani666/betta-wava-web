import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

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
    searchParams.set("color", color.toLowerCase());
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-2">
      <div className="max-w-4/5">
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
                  "border-b border-transparent font-semibold",
                  colorParams === color.toLowerCase()
                    ? "border-lime-600 text-lime-600"
                    : "",
                )}
              >
                {color}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="min-w-fit border">
          Sort By &darr;
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-fit">
          <DropdownMenuItem> Name (A → Z)</DropdownMenuItem>
          <DropdownMenuItem> Name (Z → A)</DropdownMenuItem>
          <DropdownMenuItem> Price (Low → High)</DropdownMenuItem>
          <DropdownMenuItem> Price (High → Low)</DropdownMenuItem>
          <DropdownMenuItem> Rating (Low → High)</DropdownMenuItem>
          <DropdownMenuItem> Rating (High → Low)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ColorNav;
