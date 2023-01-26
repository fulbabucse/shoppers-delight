import React from "react";
import "../../assets/styles.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, title, thumbnail, price, rating, discountPercentage } = product;
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
  const discountedPrice = (price / 100) * (100 - discountPercentage);

  return (
    <section
      className="mx-auto border bg-white w-full"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="h-fit group">
        <div className="relative overflow-hidden cursor-pointer">
          <figure className="h-[350px] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={thumbnail}
              alt={title}
            />
          </figure>
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out transform-gpu">
            <Link to={`/product/id/${_id}`}>
              <button className="bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 text-sm rounded-full">
                Quick View
              </button>
            </Link>
          </div>
        </div>
        <div className="px-4 py-3">
          <h2 className="text-sm capitalize">
            {title.length > 30 ? <>{title?.slice(0, 30)}...</> : title}
          </h2>
          <p className="text-lg font-medium text-gray-700 mr-1 inline-block">
            ${Math.floor(discountedPrice)}
          </p>
          <del className="text-red-700 text-sm">${price}</del>
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
