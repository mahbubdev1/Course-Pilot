"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkmode, setDarkmode] = useState();
  const [navbarBackground, setNavbarBackground] = useState(false); // New State
  const pathname = usePathname();
  const { name } = useAuth();

  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  const handleSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkmode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkmode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkmode(!darkmode);
    if (darkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // **Scroll Event Listener for Changing Navbar Background & Link Color**
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const role = true;
  if (
    !pathname.includes("Login") &&
    !pathname.includes("SignUp") &&
    !pathname.includes("student-dashbord") &&
    !pathname.includes("teacher-dashbord")
  ) {
    return (
      <nav
        className={`px-6 py-4 fixed top-0 w-full z-10 transition-all duration-300 ${
          navbarBackground ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between container mx-auto">
          {/* Left Side - Logo */}
          <div className={`text-xl font-bold flex items-center space-x-3 `}>
            <Link href="/" className={`${pathname === "/" ? "" : "hidden"}`}>
              {navbarBackground ? (
                <Image
                  src="/assats/logo.webp"
                  alt="Footer Logo"
                  width={150}
                  height={50}
                />
              ) : (
                <Image
                  src="/assats/footer-logo.png"
                  alt="Footer Logo"
                  width={150}
                  height={50}
                />
              )}
            </Link>
            <Link href="/" className={`${pathname === "/" ? "hidden" : ""}`}>
              {navbarBackground ? (
                <Image
                  src="/assats/logo.webp"
                  alt="Footer Logo"
                  width={150}
                  height={50}
                />
              ) : darkmode ? (
                <Image
                  src="/assats/footer-logo.png"
                  alt="Footer Logo"
                  width={150}
                  height={50}
                />
              ) : (
                <Image
                  src="/assats/logo.webp"
                  alt="Footer Logo"
                  width={150}
                  height={50}
                />
              )}
            </Link>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className={`hidden md:flex space-x-6`}>
            <Link
              href="/"
              className={`hover:text-blue-600 transition ${
                navbarBackground
                  ? "text-black"
                  : `${pathname === "/" ? "text-white" : ""}`
              }`}
            >
              Home
            </Link>
            <Link
              href="/AvailableCourse"
              className={`hover:text-blue-600 transition ${
                navbarBackground
                  ? "text-black"
                  : `${pathname === "/" ? "text-white" : ""}`
              }`}
            >
              Courses
            </Link>
            <Link
              href="/About"
              className={`hover:text-blue-600 transition ${
                navbarBackground
                  ? "text-black"
                  : `${pathname === "/" ? "text-white" : ""}`
              }`}
            >
              About
            </Link>
            <Link
              href={role ? "/student-dashbord" : "/teacher-dashbord"}
              className={`hover:text-blue-600 ${
                navbarBackground
                  ? "text-black"
                  : `${pathname === "/" ? "text-white" : ""}`
              }`}
            >
              Dashboard
            </Link>
          </div>

          {/* Right Side - Sign Up Button */}
          <div className="flex items-center ">
            <button
              onClick={toggleTheme}
              variant="ghost"
              className={`hover:bg-transparent px-3 ${
                navbarBackground
                  ? "text-black"
                  : `${pathname === "/" ? "text-white" : ""} `
              } `}
            >
              {darkmode ? (
                <CiLight size={30} />
              ) : (
                <MdOutlineDarkMode size={30} />
              )}
            </button>

            <div className="hidden md:block">
              {loading ? (
                <Button variant="outline" disabled>
                  Loading...
                </Button>
              ) : session?.user ? (
                <Button onClick={handleSignOut} variant="outline">
                  Sign Out
                </Button>
              ) : (
                <Button variant="outline">
                  <Link href="/Authentication/SignUp">Sign Up</Link>
                </Button>
              )}
            </div>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                className="hover:text-blue-600 text-black"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/AvailableCourse"
                className="hover:text-blue-600 text-black"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/About"
                className="hover:text-blue-600 text-black"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-600 text-black"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                <Link href="/Authentication/SignUp">Sign Up</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    );
  } else {
    return <></>;
  }
}
