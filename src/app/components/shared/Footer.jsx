"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-end md:grid-cols-5 gap-8 py-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"></path>
              </svg>
              <h2 className="text-xl font-bold">CoursePilot</h2>
            </div>
            <p className="text-gray-400">
              Empowering education with AI-driven personalized learning.
            </p>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Courses</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Resources</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Support</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Follow Us</h6>
            <div className="flex flex-col gap-3 items-center text-primary">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-black">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CoursePilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}