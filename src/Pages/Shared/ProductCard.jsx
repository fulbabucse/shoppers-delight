import React from "react";
import "../../assets/styles.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, image, price, rating } = product;
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating.rate >= i + 1 ? (
          <FaStar />
        ) : rating.rate >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div>
      <Link to={`/product/${id}`}>
        <div class="bg-white shadow-md rounded-lg h-full dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg p-8 product-image" src={image} alt={title} />
          <div class="px-5 pb-5">
            <a href="#">
              <h3 class="text-gray-700 font-medium text-lg tracking-tight dark:text-white">
                {title}
              </h3>
            </a>
            <div class="flex items-center space-y-2">
              <div className="flex text-yellow-500 font-bold items-center">
                {ratingStar}
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {rating.rate}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xl font-semibold text-gray-800 dark:text-white">
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
