"use client";

import { FiBell, FiUser, FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 z-40">
       <button onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>

      <div className="flex items-center gap-6">
       

        <button className="relative text-gray-600 hover:text-gray-800">
          <FiBell size={22} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <FiUser size={22} className="text-gray-600" />
          <span className="text-gray-700 font-medium">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;