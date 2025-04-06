'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";

const CoursePage = () => {
  const { courseSlug } = useParams();
  const axiosPublic = useAxiosPublic();
  const [course, setCourse] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    axiosPublic.get('/student-course')
      .then(result => {
        const foundCourse = result.data.find(c =>
          c.courseTitle.toLowerCase().replace(/\s+/g, '-') === courseSlug
        );
        setCourse(foundCourse);
      });
  }, [courseSlug]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(`progress-${courseSlug}`));
    if (savedProgress) {
      setWatchedVideos(savedProgress.watchedVideos || []);
      setShowCertificate(savedProgress.completed || false);
    }
  }, [courseSlug]);

  useEffect(() => {
    if (course) {
      localStorage.setItem(`progress-${courseSlug}`, JSON.stringify({
        watchedVideos,
        completed: showCertificate,
      }));
    }
  }, [watchedVideos, showCertificate]);


  console.log(watchedVideos);

  const handleVideoEnd = () => {
    if (!watchedVideos.includes(currentVideoIndex)) {
      setWatchedVideos([...watchedVideos, currentVideoIndex]);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < course.video.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setShowCertificate(true);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleCertificateClick = () => {
    alert("Certificate generated successfully!");
  };

  if (!course) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  const progress = Math.floor((watchedVideos.length / course.video.length) * 100);
  const allVideosWatched = watchedVideos.length === course.video.length;

  return (
    <div className="container mx-auto px-4 py-8">
      {showCertificate ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Course Completed!</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <Image
              src="/certificate-placeholder.png"
              alt="Course Certificate"
              width={600}
              height={400}
              className="mx-auto mb-6"
            />
            <button
              onClick={handleCertificateClick}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Download Certificate
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-xl font-bold mb-4">{course.courseTitle}</h2>

              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm mt-1">{progress}% complete</p>
              </div>

              <div className="space-y-2">
                {course.video.map((video, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded cursor-pointer ${currentVideoIndex === index ? 'bg-blue-100' : ''} ${watchedVideos.includes(index) ? 'text-green-600' : ''}`}
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    Video {index + 1}
                    {watchedVideos.includes(index) && (
                      <span className="ml-2 text-green-500">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative pt-[56.25%]">
                <video
                  key={course.video[currentVideoIndex]}
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <source src={course.video[currentVideoIndex]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex justify-between p-4 bg-gray-50">
                <button
                  onClick={handlePrevVideo}
                  disabled={currentVideoIndex === 0}
                  className={`px-4 py-2 cursor-pointer rounded ${currentVideoIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  Previous
                </button>

                <button
                  onClick={handleNextVideo}
                  disabled={allVideosWatched && currentVideoIndex === course.video.length - 1}
                  className={`px-4 py-2 cursor-pointer rounded ${allVideosWatched && currentVideoIndex === course.video.length - 1 ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  {currentVideoIndex === course.video.length - 1 ? 'Complete Course' : 'Next'}
                </button>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">About This Course</h3>
              <p className="text-gray-700">{course.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Course Level</h4>
                  <p>{course.CourseLevel}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Language</h4>
                  <p>{course.language}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Duration</h4>
                  <p>{course.duration} hours</p>
                </div>
                <div>
                  <h4 className="font-semibold">Rating</h4>
                  <p>{course.rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;