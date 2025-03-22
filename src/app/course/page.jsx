import CourseCard from '../components/Course/CourseCard';

export default async function CoursePage() {
  const res = await fetch('http://localhost:3000/api/courses'); // Adjust URL in production
  const courses = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
