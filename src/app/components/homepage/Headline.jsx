"use client";

import dynamic from "next/dynamic";

// Dynamically import Marquee to avoid SSR issues
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const Headline = () => {
  return (
    <div className="shadow-lg py-4 bg-gray-100">
      <Marquee
        speed={50}
        gradient={false}
        className="text-lg font-semibold text-blue-600"
      >
        AI-Powered Course Management System Streamlining learning with
        intelligent course recommendations, seamless user experience, automated
        progress tracking, real-time analytics.
      </Marquee>
    </div>
  );
};

export default Headline;
