"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../../../public/Images/banner1.png";
import Image2 from "../../../../public/Images/banner2.png";
import Image3 from "../../../../public/Images/banner3.png";

const Banner = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-12 lg:py-12 text-white">
            {/* Left Side - Text Content */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Revolutionize Learning with AI
              </h1>
              <p className="mt-4 text-base md:text-lg">
                Personalized learning paths, real-time analytics, and seamless
                course management—all powered by AI.
              </p>
              <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
                  🎓 Get Started
                </button>
                <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-all">
                  📖 Explore Courses
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full max-w-[300px] mt-6 md:mt-0">
              <img
                src={Image1.src}
                alt="AI Learning"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-12 lg:py-12 text-white">
            {/* Left Side - Text Content */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Learn Anytime, Anywhere
              </h1>
              <p className="mt-4 text-base md:text-lg">
                Flexibility in learning that adapts to your schedule and needs.
              </p>
              <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
                  🎓 Get Started
                </button>
                <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-all">
                  📖 Explore Courses
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full max-w-[300px] mt-6 md:mt-0">
              <img
                src={Image2.src}
                alt="AI Learning"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-12 lg:py-12 text-white">
            {/* Left Side - Text Content */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Master New Skills <br /> with AI
              </h1>
              <p className="mt-4 text-base md:text-lg">
                Harness the power of AI to accelerate your learning experience.
              </p>
              <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
                  🎓 Get Started
                </button>
                <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-all">
                  📖 Explore Courses
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full max-w-[300px] mt-6 md:mt-0">
              <img
                src={Image3.src}
                alt="AI Learning"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
