import React from "react";
import "../../assets/styles.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, thumbnail, price, rating } = product;
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
      <Link to={`/products/${id}`}>
        <div className="bg-white shadow-md rounded-lg h-full dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg p-8 product-image"
            src={thumbnail}
            alt={title}
          />
          <div className="px-5 pb-5">
            <h3 className="text-gray-700 font-medium text-lg tracking-tight dark:text-white">
              {title}
            </h3>

            <div className="flex items-center space-y-2">
              <div className="flex text-red-500 font-bold items-center">
                {ratingStar}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {rating.rate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                ${price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
