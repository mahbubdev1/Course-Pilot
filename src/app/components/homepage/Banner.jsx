"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import coolbg from '../../../../public/Images/cool-background.svg'
const Banner = () => {
  return (
    // bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url("https://coolbackgrounds.io/images/backgrounds/blue/blue-contour-949e2eab.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
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
            <div className="flex flex-col md:flex-row items-center justify-between px-6 text-white xl:pt-40 lg:pt-24 max-sm:pt-16">
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
              <div className="w-full max-w-[350px] mt-6 md:mt-0">
                <Image
                  src="/Images/photo1.png"
                  alt="/Images/photo1.png"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between px-6  text-white xl:pt-40 lg:pt-24 max-sm:pt-28">
              {/* Left Side - Text Content */}
              <div className="max-w-xl text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Learn Anytime, Anywhere
                </h1>
                <p className="mt-4 text-base md:text-lg">
                  Flexibility in learning that adapts to your schedule and
                  needs.
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
              <div className="w-full max-w-[350px] mt-6 md:mt-0">
                <Image
                  src="/Images/photo2.png"
                  alt="/Images/photo2.png"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between px-6  text-white xl:pt-40 lg:pt-24 max-sm:pt-16">
              {/* Left Side - Text Content */}
              <div className="max-w-xl text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Master New Skills <br /> with AI
                </h1>
                <p className="mt-4 text-base md:text-lg">
                  Harness the power of AI to accelerate your learning
                  experience.
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
              <div className="w-full max-w-[400px] mt-6 md:mt-0 ">
                <Image
                  src="/Images/photo3.png"
                  alt="/Images/photo3.png"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
