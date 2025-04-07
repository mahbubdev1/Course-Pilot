"use client";

import { Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const Marketing = () => {
  return (
    <div className="bg-[#08261c] text-white  pt-10 px-8 my-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/3">
          <Image
            src="/Images/girl.png"
            alt="Learning Community Girl"
            width={150}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Center Column: Text */}
        <div className="w-full lg:w-1/3 text-center lg:text-center">
          <h2 className="text-xl md:text-3xl font-bold leading-snug mb-12">
            Join Bangladesh's Largest & Most Active Learning Community
          </h2>
        </div>

        {/* Right Column: Button */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <button className="bg-white text-black font-semibold px-6 py-3 mb-12 rounded-full flex items-center shadow-md hover:bg-black hover:text-white transition">
            <Users className="mr-2" size={20} /> Start Learning Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
