"use client";

import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      name: "Alam Saif Sifat",
      id: "NA-7FCBC5",
      review: "Great",
      stars: 5,
    },
    {
      name: "Titu Khondokar Shoykat Ahmed",
      id: "NA-D48D22",
      review: "Very good",
      stars: 5,
    },
    {
      name: "Robin Biswas",
      id: "NA-388F77",
      review: "Khubi valo",
      stars: 5,
    },
    {
      name: "Nusrat Akter",
      id: "NA-1A2B3C",
      review: "Excellent course! Highly recommended.",
      stars: 5,
    },
    {
      name: "Sadia Akter",
      id: "NA-4D5E6F",
      review: "Helpful and well-structured content.",
      stars: 4,
    },
    {
      name: "Tanvir Rahman",
      id: "NA-7G8H9I",
      review: "Good but could use more real-world projects.",
      stars: 4,
    },
  ];

  return (
    <div className="container mx-auto my-20">
      <div className="text-center mb-8">
        <h5 className="text-blue-600 font-semibold text-sm uppercase bg-blue-200 inline-block px-4 py-2 rounded-full mb-5">
          Review of Students
        </h5>
        <h2 className="text-3xl font-bold">
          See What Our Students Are Saying About Our Course
        </h2>
      </div>

      <Marquee gradient={false} speed={50} direction="Right">
        {reviews.map((review, index) => (
          <div
            key={index}
            className=" shadow-lg rounded-xl p-6 m-3 w-80 h-64 text-center border border-gray-200"
          >
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm ">ID: {review.id}</p>
            <p className="mt-2 ">"{review.review}"</p>
            <div className="flex justify-center mt-3 text-yellow-500">
              {[...Array(review.stars)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Review;
