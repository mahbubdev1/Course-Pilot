import Image from 'next/image';
import Button from './Button';
import Rating from './Rating';

// Define CourseCard Props
const CourseCard = ({ title, category, price, lessons, rating, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56 mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Category */}
      <p className="text-sm text-gray-500 mb-2">{category}</p>

      {/* Price and Lessons */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-teal-500 font-bold">{price}</span>
        <span className="text-sm text-gray-500">{lessons} Lessons</span>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <Rating value={rating} />
      </div>

      {/* Button */}
      <Button
        variant="outline"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white border-none"
      >
        Details
      </Button>
    </div>
  );
};

export default CourseCard;
