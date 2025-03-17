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

        {/* Learning Path Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Module 1: Introduction to Programming */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Module 1: Introduction to Programming
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">Problem Solving Part-I</li>
              <li className="mb-2">Basic Programming Concepts</li>
              <li className="mb-2">Introduction to C</li>
            </ul>
          </div>

          {/* Module 2: Data Structures */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Module 2: Data Structures
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">Arrays and Linked Lists</li>
              <li className="mb-2">Stacks and Queues</li>
              <li className="mb-2">Trees and Graphs</li>
            </ul>
          </div>

          {/* Module 3: Algorithms */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Module 3: Algorithms
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">Sorting Algorithms</li>
              <li className="mb-2">Searching Algorithms</li>
              <li className="mb-2">Dynamic Programming</li>
            </ul>
          </div>

          {/* Module 4: Advanced Programming */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Module 4: Advanced Programming
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">Object-Oriented Programming</li>
              <li className="mb-2">File Handling</li>
              <li className="mb-2">Error Handling</li>
            </ul>
          </div>

          {/* Module 5: Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">
              Module 5: Web Development
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">HTML & CSS</li>
              <li className="mb-2">JavaScript Basics</li>
              <li className="mb-2">React.js Fundamentals</li>
            </ul>
          </div>

          {/* Module 6: Database Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              Module 6: Database Management
            </h3>
            <ul className="text-gray-600">
              <li className="mb-2">SQL Basics</li>
              <li className="mb-2">Database Design</li>
              <li className="mb-2">NoSQL Databases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
