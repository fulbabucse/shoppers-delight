// import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CategoryAccordion = () => {
  // const { data: categories = [] } = useQuery({
  //   queryKey: [],
  //   queryFn: async () => {
  //     const res = await fetch("category.json");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  return (
    <div>
      {/* Women's Fashion */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#one"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Women Fashion
          </button>
        </h2>
        <div
          id="one"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/womens-dresses"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Dresses
            </Link>
            <Link
              to="/products/category/womens-shoes"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Shoes
            </Link>
            <Link
              to="/products/category/womens-watches"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Watches
            </Link>
            <Link
              to="/products/category/womens-bags"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Bags
            </Link>
            <Link
              to="/products/category/tops"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Tops
            </Link>
            <Link
              to="/products/category/sunglasses"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Sunglasses
            </Link>
          </div>
        </div>
      </div>

      {/* Men's Fashion */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#two"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Men Fashion
          </button>
        </h2>
        <div
          id="two"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/mens-shirts"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Shirts
            </Link>
            <Link
              to="/products/category/mens-shoes"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Shoes
            </Link>
            <Link
              to="/products/category/mens-watches"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Watches
            </Link>
            <Link
              to="/products/category/sunglasses"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Sunglasses
            </Link>
          </div>
        </div>
      </div>

      {/* Kid's */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#three"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Kid's
          </button>
        </h2>
        <div
          id="three"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/diapering"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - diapering
            </Link>
            <Link
              to="/products/category/feeding"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - feeding
            </Link>
          </div>
        </div>
      </div>

      {/* Cosmetic's */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#four"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Cosmetics
          </button>
        </h2>
        <div
          id="four"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/fragrances"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - fragrances
            </Link>
            <Link
              to="/products/category/skincare"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - skincare
            </Link>
            <Link
              to="/products/category/sunglasses"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Sunglasses
            </Link>
            <Link
              to="/products/category/womens-jewellery"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - jewellery
            </Link>
          </div>
        </div>
      </div>

      {/* Phones */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#five"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Phones
          </button>
        </h2>
        <div
          id="five"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/smartphones"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - smartphones
            </Link>
          </div>
        </div>
      </div>

      {/* Laptops */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#six"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Laptops
          </button>
        </h2>
        <div
          id="six"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/laptops"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              - Laptops
            </Link>
          </div>
        </div>
      </div>

      {/* Automobile */}
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-3
      px-3
      text-sm text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#seven"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            automotive
          </button>
        </h2>
        <div
          id="seven"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to="/products/category/automotive"
              className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
            >
              automotive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAccordion;
