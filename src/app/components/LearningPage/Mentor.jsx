"use client";

import {
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBookOpen,
  FaUserGraduate,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mentor = () => {
  const [showAll, setShowAll] = useState(false);
  const [showIcons1, setShowIcons1] = useState(false);
  const [showIcons2, setShowIcons2] = useState(false);
  const [showIcons3, setShowIcons3] = useState(false);
  const [showIcons4, setShowIcons4] = useState(false);
  const [showIcons5, setShowIcons5] = useState(false);
  const [showIcons6, setShowIcons6] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto  my-20">
      <div className="flex justify-between items-center gap-6 mb-12">
        <h1 className="text-3xl font-bold">Best Instructor of the season</h1>
        <h4 className="text-lg">Showing {showAll ? 8 : 4} Of 8 Results</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div
          className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 relative bg-white group transition-all duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Share Icon & Socials */}
          <div
            className="absolute top-8 right-8 z-10"
            onMouseEnter={() => setShowIcons1(true)}
            onMouseLeave={() => setShowIcons1(false)}
          >
            <div className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition">
              <FaShareAlt className="text-gray-600 text-lg" />
            </div>

            {showIcons1 && (
              <div className="mt-2 flex gap-2 flex-col items-end">
                <FaFacebook className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaTwitter className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaInstagram className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
              </div>
            )}
          </div>

          {/* Image with hover overlay */}
          <div className="flex justify-center relative">
            <img
              src="https://i.ibb.co.com/zhBJpKhY/a87cce35aa3a4cb374ad14c92334a35e.jpg"
              className="w-96 h-96"
              alt="mentor"
              data-aos="zoom-in"
              data-aos-duration="800"
            />

            {/* Bottom overlay appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 border-b-6 border-emerald-600">
              <h2 className="text-xl font-bold text-emerald-700">
                Richard David
              </h2>
              <p className="text-lg">Marketing Expert</p>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2">
                <FaBookOpen /> 2 Courses
              </h4>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2 mt-1">
                <FaUserGraduate /> 60 Students
              </h4>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 relative bg-white group transition-all duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Share Icon & Socials */}
          <div
            className="absolute top-8 right-8 z-10"
            onMouseEnter={() => setShowIcons2(true)}
            onMouseLeave={() => setShowIcons2(false)}
          >
            <div className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition">
              <FaShareAlt className="text-gray-600 text-lg" />
            </div>

            {showIcons2 && (
              <div className="mt-2 flex gap-2 flex-col items-end">
                <FaFacebook className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaTwitter className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaInstagram className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
              </div>
            )}
          </div>

          {/* Image with hover overlay */}
          <div className="flex justify-center relative">
            <img
              src="https://i.ibb.co.com/TB7mfXgR/84ce06432355d2548c4c2d534bb8873e.jpg"
              className="w-96 h-96"
              alt="mentor"
              data-aos="zoom-in"
              data-aos-duration="800"
            />

            {/* Bottom overlay appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 border-b-6 border-emerald-600">
              <h2 className="text-xl font-bold text-emerald-700">
                Millar Richard
              </h2>
              <p className="text-lg">UX/UI Expert</p>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2">
                <FaBookOpen /> 2 Courses
              </h4>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2 mt-1">
                <FaUserGraduate /> 33 Students
              </h4>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 relative bg-white group transition-all duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Share Icon & Socials */}
          <div
            className="absolute top-8 right-8 z-10"
            onMouseEnter={() => setShowIcons3(true)}
            onMouseLeave={() => setShowIcons3(false)}
          >
            <div className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition">
              <FaShareAlt className="text-gray-600 text-lg" />
            </div>

            {showIcons3 && (
              <div className="mt-2 flex gap-2 flex-col items-end">
                <FaFacebook className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaTwitter className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaInstagram className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
              </div>
            )}
          </div>

          {/* Image with hover overlay */}
          <div className="flex justify-center relative">
            <img
              src="https://i.ibb.co.com/tM1JjLgh/8d69d3fc4b9ecc16660fc9e32192e9e1.jpg"
              className="w-96 h-96"
              alt="mentor"
              data-aos="zoom-in"
              data-aos-duration="800"
            />

            {/* Bottom overlay appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 border-b-6 border-emerald-600">
              <h2 className="text-xl font-bold text-emerald-700">
                Kristin Watson
              </h2>
              <p className="text-lg">Web Development</p>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2">
                <FaBookOpen /> 2 Courses
              </h4>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2 mt-1">
                <FaUserGraduate /> 80 Students
              </h4>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 relative bg-white group transition-all duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Share Icon & Socials */}
          <div
            className="absolute top-8 right-8 z-10"
            onMouseEnter={() => setShowIcons4(true)}
            onMouseLeave={() => setShowIcons4(false)}
          >
            <div className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition">
              <FaShareAlt className="text-gray-600 text-lg" />
            </div>

            {showIcons4 && (
              <div className="mt-2 flex gap-2 flex-col items-end">
                <FaFacebook className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaTwitter className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                <FaInstagram className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
              </div>
            )}
          </div>

          {/* Image with hover overlay */}
          <div className="flex justify-center relative">
            <img
              src="https://i.ibb.co.com/bMfQfcLY/418cbee72cafbbf58290b71f9e359260.jpg"
              className="w-96 h-96"
              alt="mentor"
              data-aos="zoom-in"
              data-aos-duration="800"
            />

            {/* Bottom overlay appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 border-b-6 border-emerald-600">
              <h2 className="text-xl font-bold text-emerald-700">
                Jacob Jones
              </h2>
              <p className="text-lg">UX/UI Expert</p>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2">
                <FaBookOpen /> 2 Courses
              </h4>
              <h4 className="text-base font-semibold flex items-center justify-center gap-2 mt-1">
                <FaUserGraduate /> 80 Students
              </h4>
            </div>
          </div>
        </div>

        {/* Additional Cards when showAll is true */}
        {showAll && (
          <>
            {/* Card 5 */}
            <div
              className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 relative bg-white group transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Share Icon & Socials */}
              <div
                className="absolute top-8 right-8 z-10"
                onMouseEnter={() => setShowIcons5(true)}
                onMouseLeave={() => setShowIcons5(false)}
              >
                <div className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition">
                  <FaShareAlt className="text-gray-600 text-lg" />
                </div>

                {showIcons5 && (
                  <div className="mt-2 flex gap-2 flex-col items-end">
                    <FaFacebook className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                    <FaTwitter className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                    <FaInstagram className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                  </div>
                )}
              </div>

              {/* Image with hover overlay */}
              <div className="flex justify-center relative">
                <img
                  src="https://i.ibb.co/zHRJ71nt/images-8.jpg"
                  className="w-96 h-96 object-cover"
                  alt="mentor"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                />

                {/* Bottom overlay appears on hover */}
                <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 border-b-6 border-emerald-600">
                  <h2 className="text-xl font-bold text-emerald-700">
                    Kristin Watson
                  </h2>
                  <p className="text-lg">UX/UI Expert</p>
                  <h4 className="text-base font-semibold flex items-center justify-center gap-2">
                    <FaBookOpen /> 2 Courses
                  </h4>
                  <h4 className="text-base font-semibold flex items-center justify-center gap-2 mt-1">
                    <FaUserGraduate /> 44 Students
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 relative bg-white group transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Share Icon & Socials */}
              <div
                className="absolute top-8 right-8 z-10"
                onMouseEnter={() => setShowIcons6(true)}
                onMouseLeave={() => setShowIcons6(false)}
              >
                <div className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition">
                  <FaShareAlt className="text-gray-600 text-lg" />
                </div>

                {showIcons6 && (
                  <div className="mt-2 flex gap-2 flex-col items-end">
                    <FaFacebook className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                    <FaTwitter className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                    <FaInstagram className="flex items-center justify-center w-10 h-10 p-2 bg-white text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-2 rounded-full" />
                  </div>
                )}
              </div>

              {/* Image with hover overlay */}
              <div className="flex justify-center relative">
                <img
                  src="https://i.ibb.co.com/Z6G2kDS5/images-13.jpg"
                  className="w-96 h-96 object-cover"
                  alt="mentor"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                />

                {/* Bottom overlay appears on hover */}
                <div className="absolute bottom-0 left-0 w-full bg-white text-black text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 border-b-6 border-emerald-600">
                  <h2 className="text-xl font-bold text-emerald-700">
                    Kristin Watson
                  </h2>
                  <p className="text-lg">UX/UI Expert</p>
                  <h4 className="text-base font-semibold flex items-center justify-center gap-2">
                    <FaBookOpen /> 2 Courses
                  </h4>
                  <h4 className="text-base font-semibold flex items-center justify-center gap-2 mt-1">
                    <FaUserGraduate /> 80 Students
                  </h4>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <button
          onClick={toggleShowAll}
          className="bg-emerald-600 text-white px-6 py-2 my-10 rounded-md hover:bg-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {showAll ? (
            <>
              Show Less <FaChevronUp className="inline ml-2" />
            </>
          ) : (
            <>
              See More <FaChevronDown className="inline ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Mentor;
