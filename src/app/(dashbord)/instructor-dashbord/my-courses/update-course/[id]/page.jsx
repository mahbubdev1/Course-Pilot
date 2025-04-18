'use client'
import useAxiosPublic from '@/app/axios/hooks/useAxiosPublic';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const updateCourse = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const [courses, setCourses] = useState({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        axiosPublic.get(`/student-courses/${id}`)
            .then(result => {
                setCourses(result.data);
                setLoading(false)
            })
    }, [id])
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!courses) {
        return <p>No Course Data Available</p>;
    }

    const onSubmit = (data) => {
        axiosPublic.put(`/student-courses/${id}`, data)
            .then(result => {
                if (result.data.modifiedCount) {
                    console.log(result);
                    toast.success('Course Update Success')
                    router.push('/instructor-dashbord/my-courses')
                }
            })
    };

    // console.log(courses);
    return (
        <div className="max-w-6xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Update Course
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* 1st Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {/* Image URL */}
                    <div>
                        <label className="block text-lg font-semibold mb-1">
                            Image URL
                        </label>
                        <input
                            defaultValue={courses?.image}
                            type="text"
                            {...register("image", {
                                required: "Image URL is required",
                            })}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                            placeholder="Enter Image URL"
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm">{errors.image?.message}</p>
                        )}
                    </div>

                    {/* Video URL */}
                    <div>
                        <label className="block text-lg font-semibold mb-1">
                            Video URL
                        </label>
                        <input
                            type="text"
                            {...register("video", {
                                required: "Video URL is required",
                            })}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                            defaultValue={courses?.video}
                            placeholder="Enter Video URL"
                        />
                        {errors.video && (
                            <p className="text-red-500 text-sm">{errors.video?.message}</p>
                        )}
                    </div>
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
                            defaultValue={courses?.courseTitle}
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
                            defaultValue={courses?.price}
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
                            defaultValue={courses?.courseType}
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
                            defaultValue={courses?.language}
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
                            defaultValue={courses?.duration}
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
                            defaultValue={courses?.courseTag}
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
                            defaultValue={courses?.rating}
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
                            defaultValue={courses?.CourseLevel}
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
                        defaultValue={courses?.description}
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
                        Update Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default updateCourse;