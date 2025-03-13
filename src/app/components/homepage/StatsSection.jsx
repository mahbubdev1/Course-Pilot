"use client";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

const StatsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h5 className="text-blue-600 font-semibold text-sm uppercase bg-blue-200 inline-block px-4 py-2 rounded-full mb-5">
          Why Choose Us
        </h5>
        <h2 className="text-4xl font-bold text-gray-900 mb-24">
          Choose Us For Personalized Excellence And 24/7 Dedicated Support
        </h2>

        <div className="relative flex justify-between before:absolute before:w-full before:h-1 before:bg-blue-500 before:top-1/2 before:left-0">
          {/* Data Cards */}
          <div className="group bg-white shadow-xl p-10 rounded-xl relative w-64 text-center transition-all hover:bg-blue-500 hover:text-white">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg group-hover:bg-blue-600">
              <FaUserGraduate className="text-blue-600 text-5xl group-hover:text-white" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mt-8 group-hover:text-white counter"
              data-target="10000"
            >
              10,000+
            </h3>
            <p className="text-gray-600 text-lg group-hover:text-white">
              Learners & counting
            </p>
          </div>

          <div className="group bg-white shadow-xl p-10 rounded-xl relative w-64 text-center transition-all hover:bg-green-500 hover:text-white">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg group-hover:bg-green-600">
              <MdOndemandVideo className="text-green-600 text-5xl group-hover:text-white" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mt-8 group-hover:text-white counter"
              data-target="300"
            >
              300+
            </h3>
            <p className="text-gray-600 text-lg group-hover:text-white">
              Courses Video
            </p>
          </div>

          <div className="group bg-white shadow-xl p-10 rounded-xl relative w-64 text-center transition-all hover:bg-purple-500 hover:text-white">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg group-hover:bg-purple-600">
              <FaChalkboardTeacher className="text-purple-600 text-5xl group-hover:text-white" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mt-8 group-hover:text-white counter"
              data-target="500"
            >
              500+
            </h3>
            <p className="text-gray-600 text-lg group-hover:text-white">
              Certified Students
            </p>
          </div>

          <div className="group bg-white shadow-xl p-10 rounded-xl relative w-64 text-center transition-all hover:bg-red-500 hover:text-white">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg group-hover:bg-red-600">
              <HiOutlineUserGroup className="text-red-600 text-5xl group-hover:text-white" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mt-8 group-hover:text-white counter"
              data-target="1000"
            >
              1,000+
            </h3>
            <p className="text-gray-600 text-lg group-hover:text-white">
              Registered Enrolls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
