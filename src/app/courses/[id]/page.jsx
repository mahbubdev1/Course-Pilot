export default async function CourseDetailsPage({ params }) {
  const { id } = params;

  // Fetch course data from the API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/courses/${id}`);
  const course = await res.json();

  if (!res.ok) {
    return <p className="text-red-500">Course not found.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="mt-2">{course.description}</p>
      <p className="mt-2 text-gray-600">Category: {course.category}</p>
    </div>
  );
}
