"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left Side - Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <span className="text-blue-600">CoursePilot</span>
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/courses" className="hover:text-blue-600">
          Courses
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Right Side - Sign Up Button */}
      <div>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
}
