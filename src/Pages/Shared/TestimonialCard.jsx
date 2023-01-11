import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = ({ data }) => {
  const { rating, name, post, designation } = data;

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <div className="max-w-sm mx-auto rounded-md">
      <div className="flex h-full flex-col justify-between bg-white p-12 rounded-md">
        <div>
          <div className="flex items-center gap-1 text-red-500">
            <span className="flex items-center">{ratingStar}</span>
            <span>{rating}</span>
          </div>

          <div className="mt-4">
            <p className="text-xl font-bold text-pink-600 lg:text-2xl">
              {designation}
            </p>

            <p className="mt-4 leading-relaxed text-gray-500 text-sm">{post}</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <h3>&mdash; {name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
