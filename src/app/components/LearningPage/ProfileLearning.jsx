"use client";

import { useState } from "react";

const ProfileLearning = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save or send this data to a backend or localStorage as needed
    alert(`Name: ${name}\nInterest: ${interest}\nGoal: ${goal}`);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Profile and Learning Goals
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Interests Input */}
        <div>
          <label htmlFor="interest" className="block text-lg">
            Area of Interest
          </label>
          <select
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select an area of interest</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
        </div>

        {/* Learning Goal Input */}
        <div>
          <label htmlFor="goal" className="block text-lg">
            Your Long-term Learning Goal
          </label>
          <textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your long-term learning goal"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileLearning;
