"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Mentor = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-8 mt-20">
        <h5 className="text-green-600 font-semibold text-sm uppercase bg-green-200 inline-block px-4 py-2 rounded-full mb-5">
          Mentors
        </h5>
        <h2 className="text-3xl font-bold w-3/4 mx-auto">Meet Your Mentors</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 my-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Join Our Mentorship Program
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Enhance your skills with expert guidance. Learn, grow, and achieve
            your goals with our experienced mentors. Our structured mentorship
            program ensures personalized learning, career growth, and hands-on
            experience in a collaborative environment.
          </p>
          <button className="relative px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md transition-transform duration-300 hover:bg-green-700 hover:-translate-x-2 hover:-translate-y-2 before:absolute before:inset-0 before:border-2 before:border-green-600 before:rounded-lg before:transition-all before:duration-300 hover:before:-inset-2">
            Enroll Now
          </button>
        </div>

        {/* Right Side Swiper */}
        <div className="md:w-1/2 max-w-md">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://media.istockphoto.com/id/865512962/photo/man-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=aaln-O_5RBQewCpWl7QuFAhMIm9gN6I1hc42j5IJM4s="
                  className="w-40 h-40 rounded-full mb-4 border-4 border-green-500"
                />
                <h1 className="text-lg font-bold">Inspector</h1>
                <h4 className="text-gray-600">Mark Wood</h4>
                <h4 className="text-green-600 font-semibold">
                  Next.js Developer
                </h4>
                <h4 className="text-gray-500">University CSE Department</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://media.istockphoto.com/id/865512962/photo/man-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=aaln-O_5RBQewCpWl7QuFAhMIm9gN6I1hc42j5IJM4s="
                  className="w-40 h-40 rounded-full mb-4 border-4 border-green-500"
                />
                <h1 className="text-lg font-bold">Software Engineer</h1>
                <h4 className="text-gray-600">James Smith</h4>
                <h4 className="text-green-600 font-semibold">
                  React Developer
                </h4>
                <h4 className="text-gray-500">Tech University</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://media.istockphoto.com/id/865512962/photo/man-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=aaln-O_5RBQewCpWl7QuFAhMIm9gN6I1hc42j5IJM4s="
                  className="w-40 h-40 rounded-full mb-4 border-4 border-green-500"
                />
                <h1 className="text-lg font-bold">Data Scientist</h1>
                <h4 className="text-gray-600">David Johnson</h4>
                <h4 className="text-green-600 font-semibold">
                  Machine Learning Expert
                </h4>
                <h4 className="text-gray-500">AI Research Lab</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://media.istockphoto.com/id/865512962/photo/man-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=aaln-O_5RBQewCpWl7QuFAhMIm9gN6I1hc42j5IJM4s="
                  className="w-40 h-40 rounded-full mb-4 border-4 border-green-500"
                />
                <h1 className="text-lg font-bold">Cloud Architect</h1>
                <h4 className="text-gray-600">Michael Lee</h4>
                <h4 className="text-green-600 font-semibold">
                  AWS & DevOps Engineer
                </h4>
                <h4 className="text-gray-500">Cloud Tech Academy</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
