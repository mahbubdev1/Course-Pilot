"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaUsers, FaBook } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Users", path: "/dashboard/admin", icon: <FaUsers /> },
    { name: "Courses", path: "/dashboard/instructor", icon: <FaBook /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed">
      <div className="p-6 text-xl font-bold">CoursePilot</div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 ${
              pathname === item.path ? "bg-blue-600" : ""
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
