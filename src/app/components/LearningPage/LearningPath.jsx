"use client";
import { useState } from "react";

const LearningPath = () => {
  const [activeModule, setActiveModule] = useState(2);

  const topics = {
    1: [
      "Introduction to Next.js",
      "Pages and Routing",
      "Static vs Dynamic Rendering",
      "Server-Side Rendering (SSR)",
      "Client-Side Rendering (CSR)",
      "File-based Routing",
    ],
    2: [
      "API Routes & Fetching Data",
      "getStaticProps vs getServerSideProps",
      "Middleware in Next.js",
      "Dynamic Routes & Catch-All Routes",
      "Image Optimization with Next/Image",
      "Styling in Next.js (CSS Modules, Tailwind)",
      "Authentication (NextAuth.js, JWT)",
    ],
    3: [
      "Middleware & Edge Functions",
      "Incremental Static Regeneration (ISR)",
      "State Management (Redux, Zustand, Context API)",
      "Performance Optimization in Next.js",
      "Deploying Next.js Apps (Vercel, Netlify)",
      "Building a Full-Stack App with Next.js",
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">What you'll learn</h2>
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-6">
        {[1, 2, 3].map((module) => (
          <button
            key={module}
            className={`px-4 py-2 rounded-md font-medium ${
              activeModule === module ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveModule(module)}
          >
            Module {module}
          </button>
        ))}
      </div>

      {/* Topics */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md h-64">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Next.js Learning Path
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {topics[activeModule].map((topic, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningPath;
