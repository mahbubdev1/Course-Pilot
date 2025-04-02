'use client'

import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const YourModule = () => {
  const axiosPublic = useAxiosPublic();
  const [courses, setCourses] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true);
      axiosPublic.get('/student-course')
        .then(result => {
          setCourses(result?.data || []);
        })
        .catch(error => {
          console.error("Error fetching courses:", error);
        });
    }
  }, []);

  const getProgress = (course) => {
    if (course.progress !== undefined) return course.progress;
    return 0;
  };

  if (!isReady) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Purchase Course</h1>
        <p className="mb-6">Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Purchase Course</h1>
      <p className="mb-6">Showing {courses.length} Of {courses.length} Results</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const progress = getProgress(course);
          return (
            <div key={course._id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={course?.image || '/default-course-image.jpg'}
                  alt={course?.courseTitle || "Course"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.courseTitle}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{course.courseType === 'live' ? 'Live Class' : 'Recorded'}</span>
                  <span>{course.duration} hours</span>
                </div>
                
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm mt-1">{progress}% complete</p>
                </div>

                <button
                  onClick={() => router.push(`/student-dashbord/YourModules/${encodeURIComponent(course.courseTitle.toLowerCase().replace(/\s+/g, '-'))}`)}
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  {progress > 0 ? 'Continue' : 'Start'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourModule;