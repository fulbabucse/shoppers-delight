import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TopProductCard = ({ product }) => {
  const { thumbnail, title, price, rating } = product;

  console.log(product);

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
    <div>
      <div className="flex items-center gap-3 bg-white py-2 pl-3 rounded-md h-full">
        <div>
          <img
            src={thumbnail}
            alt={title}
            className="rounded-md w-[100px] h-[100px]"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="flex justify-between item-center">
            <div className="flex items-center">
              <p className="text-red-500 flex text-sm">{ratingStar}</p>
              <p className="text-gray-600 font-bold text-sm ml-1">{rating}</p>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm capitalize">
            {title.length > 15 ? <>{title?.slice(0, 15)}...</> : title}
          </h3>
          <p className="text-lg font-semibold text-gray-800">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
