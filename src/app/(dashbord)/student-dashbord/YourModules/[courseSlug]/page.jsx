'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import certificateLogo from '../../../../../../public/assats/certificateLogo.png'

const CoursePage = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { courseSlug } = useParams();
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
  }, [watchedVideos, showCertificate, course, courseSlug]);

  const handleVideoEnd = () => {
    if (!watchedVideos.includes(currentVideoIndex)) {
      const updatedWatchedVideos = [...watchedVideos, currentVideoIndex];
      setWatchedVideos(updatedWatchedVideos);
    }
  };

  const handleNextVideo = () => {
    if (!watchedVideos.includes(currentVideoIndex)) {
      setWatchedVideos([...watchedVideos, currentVideoIndex]);
    }

    if (currentVideoIndex < course.video.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handleShowCertificate = () => {
    if (watchedVideos.length === course.video.length) {
      setShowCertificate(true);
      localStorage.setItem(`progress-${courseSlug}`, JSON.stringify({
        watchedVideos,
        completed: true,
      }));
    } else {
      toast.error(`Please watch all videos first (${watchedVideos.length}/${course.video.length} watched)`);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleCertificateClick = async (id) => {
    try {
      axiosPublic.patch(`/student-courses/${id}`, {certificateStatus: 'approve'})
      const element = document.getElementById('capture');
      
      // Wait for images to load
      const images = element.getElementsByTagName('img');
      const imageLoadPromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(imageLoadPromises);

      const blob = await domtoimage.toBlob(element, {
        quality: 1,
        bgcolor: '#ffffff',
        style: {
          'transform': 'none',
          'opacity': '1'
        }
      });
      
      saveAs(blob, `${course.courseTitle}-certificate.png`);
    } catch (error) {
      toast.error('Failed to generate certificate');
      console.error(error);
    }
  };

  if (!course) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  const progress = watchedVideos.length > 0
    ? Math.floor((watchedVideos.length / course.video.length) * 100)
    : 0;
  
  const allVideosWatched = watchedVideos.length === course.video.length;

  return (
    <div className="container mx-auto px-4 py-8">
      {showCertificate ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Course Completed!</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto border-2 border-gray-200">
            <div id="capture" className="border-4 border-black p-8 text-center">
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-widest mb-2">CERTIFICATE</h1>
                <h2 className="text-3xl font-semibold tracking-wider">OF ACHIEVEMENT</h2>
                <div className="w-32 h-1 bg-black mx-auto mt-2"></div>
              </div>

              <div className="my-8">
                <p className="text-lg mb-2">THIS CERTIFICATE IS AWARDED TO</p>
                <p className="text-3xl font-bold py-2 px-4 bg-gray-100 inline-block">
                  {user?.name || user?.email || "Anonymous"}
                </p>
              </div>

              <div className="my-8 max-w-2xl mx-auto">
                <p className="text-gray-700 mb-4">
                  For successfully completing the course <span className="font-bold">{course?.courseTitle}</span>
                  with all requirements fulfilled.
                </p>
                <p className="text-gray-600 italic">
                  Porta egestas nibh risus aliquet. Ultricies sed eget tortor sit mi aliquam facilisis justo.
                </p>
              </div>

              <div className="flex justify-between mt-12 pt-8 border-t-2 border-gray-300">
                <div className="text-center mt-12">
                  <p className="font-semibold">Mahbub Alam</p>
                  <div className="mt-1 border-b-2 border-gray-400"></div>
                  <p className="font-bold">DANIEL GALLEGO</p>
                  <p className="text-sm text-gray-600">Instructor</p>
                </div>
                <div className="text-center mt-12">
                  <Image 
                    src={certificateLogo} 
                    alt="Certificate Logo"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div className="text-center mt-12">
                  <p className="font-semibold">Khurshed Alam</p>
                  <div className="mt-1 border-b-2 border-gray-400"></div>
                  <p className="font-bold">CHIAKI SATO</p>
                  <p className="text-sm text-gray-600">Founder</p>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            <button
              onClick={() => handleCertificateClick(course?._id)}
              className="mt-8 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Download Certificate
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
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
                    className={`p-2 rounded cursor-pointer flex items-center ${
                      currentVideoIndex === index ? 'bg-blue-100' : ''
                    } ${
                      watchedVideos.includes(index) ? 'text-green-600' : 'text-gray-700'
                    }`}
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    <span>Video {index + 1}</span>
                    {watchedVideos.includes(index) && (
                      <span className="ml-2 text-green-500">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

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
                  className={`px-4 py-2 rounded ${
                    currentVideoIndex === 0 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={
                    currentVideoIndex === course.video.length - 1
                      ? handleShowCertificate
                      : handleNextVideo
                  }
                  disabled={currentVideoIndex === course.video.length - 1 && !allVideosWatched}
                  className={`px-4 py-2 rounded cursor-pointer ${
                    currentVideoIndex === course.video.length - 1
                      ? allVideosWatched
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {currentVideoIndex === course.video.length - 1
                    ? allVideosWatched
                      ? 'Get Certificate'
                      : 'Complete Course'
                    : 'Next'}
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