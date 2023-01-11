import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SingleCartCard = ({ product, handleCartProductDelete }) => {
  const { _id, brand, price, quantity, rating, thumbnail, title } = product;

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
    <div className="md:flex items-center gap-3 bg-white p-3 rounded-md">
      <div>
        <img
          src={thumbnail}
          alt={title}
          className="w-40 h-40 object-center object-cover rounded-md"
        />
      </div>
      <div className="md:w-3/4 space-y-1">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4 capitalize">
          {brand}
        </p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-semibold leading-none text-gray-800 capitalize">
            {title.slice(0, 35)}...
          </p>
        </div>
        <div className="flex items-center text-sm gap-1 text-red-500">
          <p className="flex items-center">{ratingStar}</p>
          <span>({rating})</span>
        </div>
        <p className="text-sm">Quantity: {quantity}</p>
        <div className="flex items-center justify-between pr-6">
          <div className="flex items-center">
            <button
              onClick={() => handleCartProductDelete(_id)}
              className="text-xs underline text-red-500 cursor-pointer"
            >
              Remove
            </button>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCartCard;
