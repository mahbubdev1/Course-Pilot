"use client";
import React from "react";

const LearningPath = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Learning Path
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          A customized learning path will be created based on the user's
          interests and skills, where topics will be presented gradually, from
          easy to advanced.
        </p>

        {/* Learning Path Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Beginner Level */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Start (Beginner)
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">Basic Programming Concepts</li>
              <li className="mb-2">HTML & CSS</li>
              <li className="mb-2">JavaScript Basics</li>
            </ul>
          </div>

          {/* Step 2: Intermediate Level */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Intermediate
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">React.js</li>
              <li className="mb-2">Node.js</li>
              <li className="mb-2">Database Management</li>
            </ul>
          </div>

          {/* Step 3: Advanced Level */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Advanced
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">Full Stack Development</li>
              <li className="mb-2">Cloud Computing</li>
              <li className="mb-2">AI & Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
