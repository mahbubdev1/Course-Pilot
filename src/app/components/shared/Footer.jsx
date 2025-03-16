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
  if (
    !pathname.includes("Login") &&
    !pathname.includes("SignUp") &&
    !pathname.includes("student-dashbord") &&
    !pathname.includes("teacher-dashbord")
  ) {
    return (
      <footer
        className="py-10 mt-10"
        style={{
          backgroundImage: `url("https://coolbackgrounds.io/images/backgrounds/blue/blue-contour-949e2eab.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10">
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
            </div>

            {/* Services */}
            <div>
              <h6 className="text-lg font-semibold mb-3">Courses</h6>
              <ul className="space-y-2 ">
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
              <ul className="space-y-2 ">
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
              <ul className="space-y-2 ">
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
              <div className="flex md:flex-col gap-3 text-primary">
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

          <div className="border-t border-white mt-6 pt-6 text-center  text-sm">
            &copy; {new Date().getFullYear()} CoursePilot. All rights reserved.
          </div>
        </div>
      </footer>
    );
  } else {
    return <></>;
  }
}
