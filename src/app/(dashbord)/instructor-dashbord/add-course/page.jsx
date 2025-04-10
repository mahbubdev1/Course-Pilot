"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IoMdPhotos } from "react-icons/io";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { FaVideo } from "react-icons/fa";
import { FaTrash, FaPlus } from "react-icons/fa";

const AddCourse = () => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const [photo, setPhoto] = useState();
  const [video, setVideo] = useState([]);
  console.log(user);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const removeVideo = (index) => {
    setVideo(prev => prev.filter((_, i) => i !== index));
  };

  // IMage cloudornay upload
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "course-pilot-image");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dagvr6oiv/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadData = await res.json();
    const photoURl = uploadData.secure_url;
    setPhoto(photoURl);
    console.log("Uploaded Image URL:", photoURl);
  };

  const handleUploadVideo = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    try {
      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploaded-video");
        data.append("resource_type", "video");

        uploadPromises.push(
          fetch("https://api.cloudinary.com/v1_1/dagvr6oiv/video/upload", {
            method: "POST",
            body: data,
          }).then(res => res.json())
        );
      }

      const results = await Promise.all(uploadPromises);
      const newVideoUrls = results.map(result => result.secure_url);

      setVideo(prev => [...prev, ...newVideoUrls]);
    } catch (error) {
      toast.error("Video upload failed");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  console.log(video);

  const onSubmit = (data) => {
    console.log(data);
    const courseData = {
      ...data,
      rating: Number(data.rating),
      duration: Number(data.duration),
      enrolled: Number(0),
      status: 'pending',
      courseStatus: 'Active',
      date: new Date(),
      email: user?.email,
      video: video,
      image: photo,
      certificateStatus: 'pending'
    }
    axios.post('http://localhost:5000/student-course', courseData)
      .then(result => {
        if (result.data.insertedId) {
          toast.success('Course Add Success')
          reset();
          setVideo([]);
          setPhoto();
        }
      })
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Course
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 1st Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

          {/* Photo Input post */}
          <Dialog>
            <DialogTrigger asChild>
              {/* <Button>Open Modal</Button> */}
              <Button variant="outline" className="cursor-pointer">
                <IoMdPhotos size={20} /> Upload Photo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <p className="text-center text-2xl">Select Your Images</p>
                </DialogTitle>
              </DialogHeader>
              <div>
                <div className="flex  items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                  <Input
                    alt="Photo Uploaded"
                    accept="image/*"
                    type="file"
                    onChange={handleUploadImage}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                  />
                  {/* <IoImages size={30} /> */}
                  <span className="font-bold ml-2">Upload Photo</span>
                  {photo && (
                    <img
                      src={photo}
                      alt={photo}
                      className="absolute w-full h-full object-cover p-1"
                    />
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {/* Video Input Post */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                <FaVideo size={30} color="red" /> Upload Videos
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  <p className="text-center text-2xl font-bold">Upload Course Videos</p>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleUploadVideo}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    multiple
                    disabled={isUploading}
                  />
                  {isUploading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                      <p className="text-lg font-medium text-gray-500">
                        Uploading videos, please wait...
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        This may take a while depending on file sizes
                      </p>
                    </div>
                  ) : video.length > 0 ? (
                    <div className="space-y-4 max-h-[50vh] overflow-y-auto p-2">
                      {video.map((videoUrl, index) => (
                        <div key={index} className="relative group bg-gray-100 rounded-md p-2">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <video
                                controls
                                className="w-32 h-20 object-cover rounded"
                                src={videoUrl}
                              />
                              <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                                0:00 / 0:13
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">Video {index + 1}</p>
                              <p className="text-sm text-gray-500">Islamic Zone</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeVideo(index);
                              }}
                              className="bg-red-500 text-white p-1 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              <FaTrash className="cursor-pointer" size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                      <FaVideo size={48} className="mb-4 text-gray-400" />
                      <p className="text-lg font-medium text-gray-500">
                        Click to upload videos or drag and drop
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Multiple videos can be selected
                      </p>
                    </div>
                  )}
                </div>
                {video.length > 0 && !isUploading && (
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {video.length} video(s) selected
                    </p>
                    <Button
                      className="cursor-pointer py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                      onClick={() => document.querySelector('input[type="file"]').click()}
                    >
                      <FaPlus className="mr-2" /> Add More Videos
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* 2nd Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Course Title */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Course Title
            </label>
            <input
              {...register("courseTitle", {
                required: "Course Title is required",
              })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter Course Title"
            />
            {errors.courseTitle && (
              <p className="text-red-500 text-sm">
                {errors.courseTitle.message}
              </p>
            )}
          </div>

          {/* 3rd Category */}
          <div>
            <label className="block text-lg font-semibold mb-1">Price</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be at least $1" }
              })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter price"
              step="0.01"
              onKeyDown={(e) => e.key === "e" && e.preventDefault()}
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>
        </div>

        {/* 3rd Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Course Type */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Course Type
            </label>
            <select
              {...register("courseType", {
                required: "Course Type is required",
              })}
              className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">Choose Type</option>
              <option value="course">Recorded Video</option>
              <option value="live">Live Class</option>
            </select>
            {errors.courseType && (
              <p className="text-red-500 text-sm">
                {errors.courseType.message}
              </p>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-lg font-semibold mb-1">Language</label>
            <select
              {...register("language", { required: "Language is required" })}
              className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="hindi">Hindi</option>
            </select>
            {errors.language && (
              <p className="text-red-500 text-sm">{errors.language.message}</p>
            )}
          </div>
        </div>

        {/* 4th Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Course Duration */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Course Duration (Hours)
            </label>
            <input
              type="number"
              {...register("duration", {
                required: "Duration is required",
                min: { value: 1, message: "Must be at least 1 hour" },
              })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              placeholder="72 Hours"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>

          {/* Course Tag */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Course Tag
            </label>
            <select
              {...register("courseTag", { required: "Course Tag is required" })}
              className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">Choose Tag</option>
              <option value="programming">Programming</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="business">Business</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="language">Language Learning</option>
            </select>
            {errors.courseTag && (
              <p className="text-red-500 text-sm">{errors.courseTag.message}</p>
            )}
          </div>

        </div>

        {/* 5th Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Rating */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Rating (1-5)
            </label>
            <input
              type="number"
              {...register("rating", {
                required: "Rating is required",
                min: { value: 1, message: "Minimum rating is 1" },
                max: { value: 5, message: "Maximum rating is 5" },
              })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter Rating (1-5)"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm">{errors.rating.message}</p>
            )}
          </div>

          {/* Course Level */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Course Level
            </label>
            <select
              {...register("CourseLevel", {
                required: "Lesson Understanding is required",
              })}
              className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">Choose Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            {errors.CourseLevel && (
              <p className="text-red-500 text-sm">
                {errors.CourseLevel.message}
              </p>
            )}
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="block text-lg font-semibold mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            rows="8"
            placeholder="Enter detailed description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-emerald-500 text-white font-semibold text-lg rounded-lg hover:bg-emerald-600 transition-all"
          >
            Submit Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;