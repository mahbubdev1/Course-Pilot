"use client";

import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const hiddenPaths = [
    "Login",
    "SignUp",
    "student-dashbord",
    "instructor-dashbord",
    "admin-dashbord",
  ];

  if (hiddenPaths.some((path) => pathname.includes(path))) {
    return null;
  }

  return (
    <footer className="py-12 mt-16 text-white bg-[#090614]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mb-10">
          {/* Top Section */}
          <div>
            <img src="/assats/footer-logo.png" alt="logo" />
            <p className="mt-4 text-gray-300 text-lg">
              Empowering education with AI-driven personalized learning. The
              ed-tech startup transforming education for all. Enjoy high-quality
              courses, expert instructors, and flexible scheduling. Join
              CoursePilot today!
  if (
    !pathname.includes("Login") &&
    !pathname.includes("SignUp") &&
    !pathname.includes("student-dashbord") &&
    !pathname.includes("instructor-dashbord") &&
    !pathname.includes("admin-dashbord") &&
    !pathname.includes("components/helpdesk")
  ) {
    return (
      <footer className="py-10 mt-10 text-white bg-[#264D3F]">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col items-start space-x-2">
              <div>
                <img src="/assats/footer-logo.png" alt="logo" />
              </div>
            </div>
            <p className="">
              Empowering education with AI-driven personalized learning.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-blue-600">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h6 className="text-xl font-bold mb-4">Courses</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-xl font-bold mb-4">Resources</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-xl font-bold mb-4">Support</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-center lg:text-left w-full">
            &copy; {new Date().getFullYear()} CoursePilot. All rights reserved.
          </p>
          <img
            src="https://nonacademy.net/_next/image?url=%2Fimages%2Fpayment.png&w=640&q=75"
            alt="Payment Methods"
            className="w-80 mt-4 lg:mt-0 lg:ml-auto"
          />
        </div>
      </div>
    </footer>
  );
}
