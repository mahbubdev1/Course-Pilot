"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icon for toggle
import logo from "../../../../public/assats/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <nav className="bg-white shadow-md px-6 py-4 fixed w-full z-10">
      <div className="flex items-center justify-between container mx-auto">
        {/* Left Side - Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Center - Navigation Links (Desktop) */}
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
        <div className="hidden md:block">
          <Button variant="outline">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/courses" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
