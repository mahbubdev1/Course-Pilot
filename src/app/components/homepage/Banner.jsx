"use client";

/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="">
      <div className="px-4 py-2 block xl:hidden"></div>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-1/3 w-full"
            src="https://i.ibb.co.com/xtgG0Dv9/images-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-1/3 w-full"
            src="https://i.ibb.co.com/xtgG0Dv9/images-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-1/3 w-full"
            src="https://i.ibb.co.com/xtgG0Dv9/images-5.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="h-1/3 w-full" src={image5} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img className="h-1/3 w-full" src={image6} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img className="h-1/3 w-full" src={image7} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
