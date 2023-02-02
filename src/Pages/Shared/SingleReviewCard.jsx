import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SingleReviewCard = ({ review }) => {
  const { name, image, joinDate, rating, message, posted_date } = review;

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {parseInt(rating) >= i + 1 ? (
          <FaStar />
        ) : parseInt(rating) >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <article className="border p-3">
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={image} alt="" />
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {name}
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              Joined on {joinDate}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-1 text-sm">
          <p className="text-red-500 flex items-center">{ratingStar}</p>
          <p>({rating})</p>
        </div>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          Thinking to buy another one!
        </h3>
      </div>
      <footer className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed on <span>{posted_date}</span>
        </p>
      </footer>
      <p className="mb-2 font-light text-gray-500 dark:text-gray-400 text-sm">
        {message}
      </p>
      <button className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
        Read more
      </button>
    </article>
  );
};

export default SingleReviewCard;
