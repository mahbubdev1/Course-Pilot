"use client";

import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  
  // List of paths where footer should be hidden
  const hiddenPaths = [
    "Login",
    "SignUp",
    "student-dashbord",
    "instructor-dashbord",
    "admin-dashboard",
    "components/helpdesk"
  ];

  // Check if current path should hide footer
  if (hiddenPaths.some(path => pathname.includes(path))) {
    return null;
  }

  return (
    <footer className="py-10 mt-10 text-white bg-[#264D3F]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Information Section */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <img src="/assats/footer-logo.png" alt="CoursePilot Logo" />
            </div>
            <p className="text-gray-300">
              Empowering education with AI-driven personalized learning.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Courses Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Resources Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Support Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CoursePilot. All rights reserved.
          </p>
          <img 
            src="https://nonacademy.net/_next/image?url=%2Fimages%2Fpayment.png&w=640&q=75" 
            alt="Payment Methods" 
            className="h-8 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}