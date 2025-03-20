'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const CourseCard = ({ title, category, price, lessons, rating, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white transition-all transform hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-2 py-1">
          {category}
        </div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {rating && (
          <div className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
            <span className="text-yellow-400 mr-1">★</span> {rating}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
        {lessons && (
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span>{lessons} Lessons</span>
          </div>
        )}
        <div
          className={`font-medium mb-2 ${
            price === 'Free' ? 'text-green-500' : 'text-green-600'
          }`}
        >
          {price}
        </div>
        <Button
          variant="outline"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white border-none transition-all duration-300"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default function CourseMarketplace() {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreSubjects, setShowMoreSubjects] = useState(false);
  const [view, setView] = useState('card'); // Toggle view state (card/list)

  const courses = [
    {
      id: 1,
      title: 'Subaccount Labelling - RCP',
      category: 'Finance & Accounting',
      price: 'Free',
      lessons: '10',
      rating: null,
      image: '/Images/platform/img.png?height=200&width=400',
    },
    {
      id: 2,
      title: 'Subaccount Labelling - RCP',
      category: 'Finance & Accounting',
      price: 'Free',
      lessons: '10',
      rating: null,
      image: '/Images/platform/img11.png?height=200&width=400',
    },
    {
      id: 3,
      title: 'Automate with Python',
      category: 'Web Design',
      price: 'Free',
      lessons: '10',
      rating: '4.00',
      image: '/Images/platform/img2.png?height=200&width=400',
    },
    {
      id: 4,
      title: 'The Complete 2020 Fullstack Web',
      category: 'Web Design',
      price: '$16.00',
      lessons: '5',
      rating: '5.00',
      image: '/Images/platform/img3.jpg?height=200&width=400',
    },
    {
      id: 5,
      title: 'JavaScript for Beginners',
      category: 'Web Development',
      price: '$55.00',
      lessons: '5',
      rating: '5.00',
      image: '/Images/platform/img4.png?height=200&width=400',
    },
    {
      id: 6,
      title: 'Full Practice Exam + Explanation',
      category: 'Web Development',
      price: '$12.00',
      lessons: '8',
      rating: '4.00',
      image: '/Images/platform/img5.png?height=200&width=400',
    },
    {
      id: 7,
      title: 'Machine Learning A-Z',
      category: 'Web Development',
      price: '$50.00',
      lessons: '20',
      rating: '4.00',
      image: '/Images/platform/img6.png?height=200&width=400',
    },
    {
      id: 8,
      title: 'Machine Learning A-Z',
      category: 'Web Development',
      price: '$50.00',
      lessons: '20',
      rating: '4.00',
      image: '/Images/platform/img10.png?height=200&width=400',
    },
    {
      id: 9,
      title: 'Machine Learning A-Z',
      category: 'Web Development',
      price: '$50.00',
      lessons: '20',
      rating: '4.00',
      image: '/Images/platform/img9.png?height=200&width=400',
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-20 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-sm text-gray-600 mb-4 md:mb-0">
          Showing 1-12 of 5 Results
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* Sorting Dropdown */}
          <div className="relative w-full md:w-44">
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

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:col-span-2 lg:col-span-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Sidebar Section (Optional: Categories/Filters) */}
        <div className="hidden md:block border p-4 rounded-lg bg-white shadow-sm">
          {/* Categories */}
          <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Web Development
              </label>
            </li>
            <li className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Graphic Design
              </label>
            </li>
            <li className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Flutter
              </label>
            </li>
            {showMoreCategories && (
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Python
                </label>
              </li>
            )}
            <button
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="text-teal-500 text-sm mt-2"
            >
              {showMoreCategories ? 'Show Less' : 'Show More'}
            </button>
          </ul>

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
  );
}
