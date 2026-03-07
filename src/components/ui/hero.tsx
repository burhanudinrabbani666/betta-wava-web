import { A11y, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";

function Hero() {
  return (
    <div>
      <div className="w-full">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          <SwiperSlide className="min-h-36 w-full">
            <img src="/images/banner-1-small.jpg" alt="multicolor banner" />
          </SwiperSlide>
          <SwiperSlide className="min-h-36 w-full">
            <img src="/images/banner-2-small.jpg" alt="solid banner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
