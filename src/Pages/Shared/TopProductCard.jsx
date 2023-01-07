import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TopProductCard = ({ product }) => {
  const { image, title, price, rating } = product;

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
    <div className="flex flex-col justify-center">
      <div className="relative flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 rounded-xl p-3 bg-transparent">
        <div className="bg-white grid place-items-center">
          <img
            src={image}
            alt={title}
            className="rounded-sm w-[100px] h-[100px]"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <div className="flex items-center">
              <p className="text-red-500 flex">{ratingStar}</p>
              <p className="text-gray-600 font-bold text-sm ml-1">{rating}</p>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm capitalize">{title}</h3>
          <p className="text-xl font-black text-gray-800">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
