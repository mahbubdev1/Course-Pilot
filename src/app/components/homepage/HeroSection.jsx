"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#08261c] my-20 py-16 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-4 lg:px-8">
        {/* Left Text Section */}
        <div className="w-full lg:w-3/5 space-y-4">
          <h4 className="text-sm uppercase tracking-wide text-gray-300">
            WHY CHOOSE US
          </h4>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Don't Know How{" "}
            <span className="relative inline-block">
              To Start With
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-500"></span>
            </span>{" "}
            Quiklearn Courses
          </h1>
          <p className="text-gray-300 italic">
            When an unknown printer took a galley of type and scrambled to make
            a type specimen book.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            <div>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block mr-2"></span>
                Special Lessons and Courses
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block mr-2"></span>
                World Largest Language
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block mr-2"></span>
                15 Language For Beginners
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block mr-2"></span>
                Get Every General Answers
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block mr-2"></span>
                A Residential Campus
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block mr-2"></span>
                A Residential Campus
              </p>
            </div>
          </div>
          {/* Price Section */}
          <div className="flex items-center space-x-3">
            <p className="text-gray-400 line-through text-xl">$14.88</p>
            <p className="text-white font-bold text-2xl">$6.38</p>
          </div>

          <button className="bg-emerald-500 hover:bg-black text-white font-semibold py-4 px-6 rounded-full transition duration-300">
            Enroll now Courses
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-2/5 mt-8 lg:mt-0 relative flex justify-center items-center">
          {/* Right Large Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Group of students"
              className="w-[400px] h-[400px] object-cover lg:ml-40 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Left Small Image (Overlapping) */}
          <div className="absolute left-0 bottom-24 transform -translate-x-1/4 translate-y-1/4">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Student holding books"
              className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* 15% Discount Badge */}
          <div className="absolute top-16 left-40 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-900 text-white flex items-center justify-center text-center border-4 border-white shadow-xl">
              <div>
                <h1 className="text-xl font-bold leading-5">15%</h1>
                <p className="text-sm font-medium">Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
