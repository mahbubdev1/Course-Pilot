"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import coolbg from "../../../../public/Images/cool-background.svg";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    // bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500
    <div className="relative w-full bg-[#264D3F]">
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
              {/* Left Text Content */}
              <div className="text-center lg:text-left space-y-4">
                <p className="text-sm font-semibold text-white uppercase tracking-wide">
                  100% Quality Courses
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Find Your
                  <span className="font-bold text-emerald-400"> Perfect </span>
                  Courses
                  <br /> And Improve Your Skills
                </h1>
                <p className="text-white text-base md:text-lg">
                  We Have{" "}
                  <span className="font-bold text-emerald-400">40k+</span>{" "}
                  Online Courses &{" "}
                  <span className="font-bold text-emerald-400">500K+</span>{" "}
                  Online Registered Student.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start w-fit">
                  <button className="py-4 px-6 bg-emerald-400 hover:bg-black hover:text-white text-white font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition-all duration-300">
                    Explore All Courses <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* Right Image and Elements */}
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/ccfpHZ2k/hero-img-2.png"
                  alt="Hero Student"
                  className="w-[600px] h-[490px]"
                />

                {/* Top Badge - Satisfied Students */}
                <div className="absolute lg:top-16 lg:left-28 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                    src="https://randomuser.me/api/portraits/men/58.jpg"
                    alt=""
                  />
                  <span className="text-sm font-semibold bg-emerald-600 w-8 h-8 rounded-full ml-2 flex justify-center items-center">
                    4+
                  </span>
                </div>

                {/* Bottom Badge - Courses */}
                <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                  <div className="bg-pink-100 text-pink-600 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l-9-5m9 5l9-5"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    25K+
                    <br />
                    Courses
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 text-white xl:pt-40 lg:pt-24 max-sm:pt-16">
              {/* Left Side - Text Content */}
              <div className="text-center md:text-left max-w-lg">
                <h3 className="text-sm md:text-base font-semibold tracking-wider uppercase">
                  #1 Platform for Online Learning
                </h3>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
                  Enroll & <span className="text-[#25ca93]">grow</span> up your
                  skills today!
                </h1>
                <p className="mt-4 text-base md:text-lg">
                  Explore new skills beyond the world of knowledge and get lost
                  in freedom of creativity.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                  <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start w-fit">
                    <button className="py-4 px-6 bg-emerald-400 hover:bg-black hover:text-white text-white font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition-all duration-300">
                      Start Learning <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Image Collage */}
              <div className="w-full max-w-md mt-6 md:mt-0 relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Left Image */}
                  <div className="relative">
                    <Image
                      src="/Images/image1.png"
                      alt="Student 1"
                      width={180}
                      height={180}
                      className="object-cover rounded-lg w-96"
                    />
                  </div>
                  {/* Top Right Image */}
                  <div className="relative">
                    <Image
                      src="/Images/image2.png"
                      alt="Student 2"
                      width={180}
                      height={180}
                      className="object-cover rounded-lg w-72"
                    />
                  </div>
                  {/* Bottom Left Image */}
                  <div className="relative">
                    <Image
                      src="/Images/image3.png"
                      alt="Student 3"
                      width={380}
                      height={180}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  {/* Bottom Right Image */}
                  <div className="relative">
                    <Image
                      src="/Images/image4.png"
                      alt="Student 4"
                      width={480}
                      height={180}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Third Slide */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between px-6  text-white xl:pt-40 lg:pt-24 max-sm:pt-16">
              {/* Left Side - Text Content */}
              <div className="max-w-xl text-center md:text-left space-y-4">
                <p className="text-sm font-semibold text-white uppercase tracking-wide">
                  100% Trusted & Certified Courses
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Master New <span className="text-emerald-400">Skills</span>{" "}
                  with Cutting-edge AI Tools
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-200">
                  Harness the power of AI to accelerate your learning journey
                  and unlock new opportunities.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start w-fit">
                  <button className="py-4 px-6 bg-emerald-400 hover:bg-black hover:text-white text-white font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition-all duration-300">
                    Get Started <FaArrowRight />
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
