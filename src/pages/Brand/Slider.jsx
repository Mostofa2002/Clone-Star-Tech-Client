// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/Notice-982x500.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
