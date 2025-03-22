'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronDown, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import CourseCard from '../components/Course/CourseCard';

export default function CourseMarketplace() {
  const [courses, setCourses] = useState([]);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch('http://localhost:3000/api/courses'); // Adjust URL in production
      const data = await res.json();
      setCourses(data);
    }
    fetchCourses();
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <div className="container mx-auto p-4 mt-20 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-sm text-gray-600 mb-4 md:mb-0">
          Showing 1-12 of {courses.length} Results
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* Sorting Dropdown */}
          <div className="relative w-full md:w-44 mb-4 md:mb-0">
            <select className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full appearance-none bg-white focus:ring-teal-500">
              <option>Latest</option>
              <option>Top Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
          {/* Search Box */}
          <div className="relative w-full md:w-44">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-1.5 pr-8 text-sm w-full bg-white focus:ring-teal-500"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Layout: Course Cards and Sidebar */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Course Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              title={course.title}
              category={course.category}
              price={course.price}
              lessons={course.lessons}
              rating={course.rating}
              image={course.image} // Ensure API provides an image URL
            />
          ))}
        </div>

        {/* Sidebar Section (Optional: Categories/Filters) */}
        <div className="hidden md:block md:w-64">
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            {/* Categories */}
            <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
            <ul className="text-sm text-gray-600">
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Data Science
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Web Development
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> DevOps
                </label>
              </li>
              {showMoreCategories && (
                <>
                  <li className="mb-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Finance &
                      Accounting
                    </label>
                  </li>
                  <li className="mb-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> AI & Deep
                      Learning Fundamentals
                    </label>
                  </li>
                </>
              )}
            </ul>
            <button
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="text-teal-500 text-sm mt-2"
            >
              {showMoreCategories ? 'Show Less' : 'Show More'}
            </button>

            {/* Price */}
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-medium text-lg mb-3">Price</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Paid
                  </label>
                </div>
                <div className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Free
                  </label>
                </div>
              </div>
            </div>

            {/* Level */}
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-medium text-lg mb-3">Level</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="level-beginner" />
                  <Label htmlFor="level-beginner">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="level-intermediate" />
                  <Label htmlFor="level-intermediate">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="level-advanced" />
                  <Label htmlFor="level-advanced">Advanced</Label>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-medium text-lg mb-3">Ratings</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <Label htmlFor={`rating-${rating}`} className="flex">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: rating }, (_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <div className="flex text-gray-300">
                        {Array.from({ length: 5 - rating }, (_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
