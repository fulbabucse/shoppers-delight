import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaClock } from "react-icons/fa";
import SmallTimer from "../../components/SmallTimer";

const BestSellerCard = ({ product }) => {
  const { title, thumbnail, price, rating, brand, discountPercentage } =
    product;

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

  const discountedPrice = price - price / discountPercentage;

  return (
    <div>
      <div class="flex max-w-md gap-4 bg-white overflow-hidden p-4">
        <div class="bg-cover">
          <img className="w-32 h-32 rounded-md" src={thumbnail} alt="" />
        </div>
        <div class="w-2/3">
          <h1 class="mt-2 text-gray-600 text-xs">{brand}</h1>
          <p class=" text-gray-900 font-bold text-sm">
            {title.slice(0, 15)}...
          </p>
          <div class="flex item-center gap-1 text-red-500">
            <p className="flex items-center text-sm">{ratingStar}</p>
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg text-red-500 font-semibold">
              ${Math.ceil(discountedPrice)}
            </p>
            <span className="text-sm text-gray-600 font-medium">
              <del>{price}</del>(-{discountPercentage}%)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-600" />
            <SmallTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
