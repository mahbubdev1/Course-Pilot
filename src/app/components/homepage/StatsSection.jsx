"use client";

import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import CountUp from "react-countup";

const StatsSection = () => {
  const statsData = [
    {
      icon: <FaUserGraduate className="text-blue-600 text-5xl" />,
      count: 10000,
      label: "Learners & Counting",
    },
    {
      icon: <MdOndemandVideo className="text-green-600 text-5xl" />,
      count: 300,
      label: "Courses Video",
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-600 text-5xl" />,
      count: 500,
      label: "Certified Students",
    },
    {
      icon: <HiOutlineUserGroup className="text-pink-600 text-5xl" />,
      count: 1000,
      label: "Registered Enrolls",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h5 className="text-blue-600 font-semibold text-sm uppercase bg-blue-100 px-5 py-2 rounded-full mb-5 inline-block shadow-md">
        Why Choose Us
      </h5>
      <h2 className="text-4xl font-bold mb-16">
        Choose Us For Personalized Excellence & <br />
        <span className="text-blue-600">24/7 Dedicated Support</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/** Stats Card Component */}
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="group dark:border-2 dark:border-white/50 shadow-xl p-10 rounded-2xl w-72 mx-auto text-center hover:scale-105 transition duration-300"
          >
            <div className="bg-white p-4 rounded-full shadow-lg inline-block mb-5">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold">
              <CountUp
                start={0}
                end={stat.count}
                duration={2.5}
                separator=","
              />
              +
            </h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
