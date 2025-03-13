"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

export default function AvailableCourse() {
  const courses = [
    {
      title: "Next.js Mastery",
      level: "Advanced",
      duration: "8 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Full-Stack Next.js",
      level: "Intermediate",
      duration: "6 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js for Beginners",
      level: "Beginner",
      duration: "4 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js Performance Optimization",
      level: "Advanced",
      duration: "5 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Building APIs with Next.js",
      level: "Intermediate",
      duration: "7 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
    {
      title: "Next.js & Tailwind CSS",
      level: "Beginner",
      duration: "3 Weeks",
      image: "https://i.ibb.co/0crx1pW/knight.png",
    },
  ];

  // GSAP animation for staggered fade-in effect
  const courseRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      courseRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);
  // handle all button here
  const handleEnroll = () => {
    alert(`function will be implement soon`);
  };
  return (
    <div>
      <h2>Avialable course </h2>
      <h2>added by tareq</h2>
    </div>
  );
}
