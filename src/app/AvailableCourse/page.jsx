"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

export default function AvailableCourse() {
  const courses = [
    {
      title: "Next.js Mastery",
      level: "Advanced",
      duration: "8 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Full-Stack Next.js",
      level: "Intermediate",
      duration: "6 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js for Beginners",
      level: "Beginner",
      duration: "4 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js Performance Optimization",
      level: "Advanced",
      duration: "5 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Building APIs with Next.js",
      level: "Intermediate",
      duration: "7 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js & Tailwind CSS",
      level: "Beginner",
      duration: "3 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
  ];

  // GSAP animation for staggered fade-in effect
  const courseRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      courseRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);
  // handle all button here
  const handleEnroll = () => {
    alert(`function will be implement soon`);
  };
  return (
    <div className="container mx-auto px-2 min-h-screen pt-16">
      {/* Heading with Animation */}
      <motion.h1
        className="text-xl md:text-4xl font-extrabold text-center mb-10 tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore a World of Courses
      </motion.h1>
      <motion.p
        className="text-xl text-center mb-8 leading-relaxed w-full md:w-11/12 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Dive into our curated collection of courses that cover everything from
        programming and web development to AI and creative design. Whether
        you're a beginner or an expert, CoursePilot AI offers a personalized
        learning experience to help you grow your skills and achieve your goals.
        Start your learning journey today!
      </motion.p>

      {/* Course Grid */}
      <div
        ref={courseRef}
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="transition-transform"
          >
            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col h-full  bg-base-100 max-w-sm mx-auto transition-transform duration-300 ease-in-out bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/50"
            >
              {/* Card Content */}
              <div className="flex flex-col flex-grow text-center">
                {/* Course Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative w-full h-[200px]"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </motion.div>

                {/* Course Details */}
                <h2 className="text-xl font-semibold text-white mt-4">
                  {course.title}
                </h2>
                <p className="text-gray-400">{course.level}</p>
                <p className="text-gray-400">Duration: {course.duration}</p>

                {/* Enroll Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mt-auto"
                >
                  <motion.button
                    onClick={handleEnroll}
                    whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }} // Hover effect
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="btn btn-primary px-6 py-2 rounded-md text-white font-semibold focus:outline-none transition-all duration-300 mt-4 bg-blue-500 hover:bg-blue-600 shadow-md"
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
