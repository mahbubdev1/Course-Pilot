"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Card Component
function Card({ children, className }) {
  return <div className={`max-w-sm mx-auto ${className}`}>{children}</div>;
}

// CardContent Component
function CardContent({ children, className }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>{children}</div>
  );
}

// Button Component
function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md text-white font-semibold focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export default function AvailableCourse() {
  const courses = [
    {
      title: "Next.js Mastery",
      level: "Advanced",
      duration: "8 Weeks",
    },
    {
      title: "Full-Stack Next.js",
      level: "Intermediate",
      duration: "6 Weeks",
    },
    {
      title: "Next.js for Beginners",
      level: "Beginner",
      duration: "4 Weeks",
    },
    {
      title: "Next.js Performance Optimization",
      level: "Advanced",
      duration: "5 Weeks",
    },
    {
      title: "Building APIs with Next.js",
      level: "Intermediate",
      duration: "7 Weeks",
    },
    {
      title: "Next.js & Tailwind CSS",
      level: "Beginner",
      duration: "3 Weeks",
    },
  ];

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      {/* Heading with Animation */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Next.js Courses
      </motion.h1>

      {/* Course Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform"
          >
            <Card className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500">
              <CardContent className="flex flex-col items-center">
                {/* Course Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* <Image
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 shadow-lg"
                  /> */}
                </motion.div>

                {/* Course Details */}
                <h2 className="text-xl font-semibold text-white">
                  {course.title}
                </h2>
                <p className="text-gray-400">{course.level}</p>
                <p className="text-gray-400">Duration: {course.duration}</p>

                {/* Enroll Button with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600 shadow-md">
                    Enroll Now
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
