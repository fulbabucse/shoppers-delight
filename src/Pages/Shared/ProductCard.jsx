import React from "react";
import "../../assets/styles.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, thumbnail, price, rating, discountPercentage } = product;
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar className="text-lg" />
        )}
      </span>
    );
  });
  const discountedPrice = price - price / discountPercentage;

  return (
    <section class="mx-auto border bg-white w-full">
      <div class="h-fit group">
        <div class="relative overflow-hidden">
          <img
            class="h-[260px] w-full object-cover"
            src={thumbnail}
            alt={title}
          />
          <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link to={`/products/${id}`}>
              <button class="bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 text-sm rounded-full">
                Quick View
              </button>
            </Link>
          </div>
        </div>
        <div className="px-4 py-3">
          <h2 class="text-lg capitalize">{title}</h2>
          <p class="text-xl font-medium mr-1 inline-block">
            ${Math.ceil(discountedPrice)}
          </p>
          <del class="text-red-700 text-sm">${price}</del>
          <div className="flex items-center space-x-1">
            <div className="flex text-red-500 font-bold items-center">
              {ratingStar}
            </div>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
