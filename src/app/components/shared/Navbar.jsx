"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../../../public/assats/logo.webp";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 fixed w-full z-10">
      <div className="flex items-center justify-between container mx-auto">
        {/* Left Side - Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={50} />
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
const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-center gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            this is navbar
        </div>

        {/* Right Side - Sign Up Button */}
        <div>
          <Button variant="outline">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
