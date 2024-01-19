import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeaderSection.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

function HeaderSection() {
  return (
    <div className="header">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp" />
          <div className="content">
            <h5>Tasty & Delicious Food</h5>
            <button>Book a table</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" />
          <div className="content">
            <h5>Tasty & Delicious Food</h5>
            <button>Book a table</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" />
          <div className="content">
            <h5>Tasty & Delicious Food</h5>
            <button>Book a table</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSection;
