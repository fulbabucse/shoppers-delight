import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import TopProductCard from "../Pages/Shared/TopProductCard";
import { topProducts } from "../redux/actions/actions";

const Tops = ({ products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("topsProducts.json")
      .then((res) => {
        dispatch(topProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const rating = 4.8;

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
    <div className="px-4 lg:px-0">
      <div role="main">
        <h1 className="text-3xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 bebas-neu-font">
          Top Feature Products
        </h1>
        <p className="text-base leading-normal text-gray-600 mt-1 mb-3">
          These are top of our category. You can get the product of your choice
          from here.
        </p>
      </div>
      <div className="md:flex justify-center gap-2">
        <div class="max-w-md w-full lg:flex">
          <div class="lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              className="rounded-md"
              src="https://img.global.news.samsung.com/global/wp-content/uploads/2022/02/Galaxy_S22_Ultra_PR_main1F.jpg"
              alt=""
            />
          </div>
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
              <p class="text-sm text-red-500 flex items-center">
                {ratingStar} <span className="ml-2">{rating}</span>
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                Samsung S22 Ultra
              </div>
              <p class="text-gray-700 text-xs text-justify">
                Galaxy S22 Ultra is an excellent phone for those who want a
                premium mobile gaming experience, because it's equipped with a
                fast 4nm processor, long-lasting battery and large storage
                capabilities.
              </p>
              <button className="mt-3 rounded-full bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {products?.topProducts?.map((product) => (
                <TopProductCard key={product?.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.topProducts,
  };
};

export default connect(mapStateToProps)(Tops);
