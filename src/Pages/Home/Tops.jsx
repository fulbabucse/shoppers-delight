import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaAngleRight } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TopProductCard from "../Shared/TopProductCard";
import { topProducts } from "../../redux/actions/actions";
import { useState } from "react";
import Spinner from "../../components/Spinner";
import { url } from "../../utils/BaseURL";

const Tops = ({ products }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/feature-products`)
      .then((res) => {
        setLoading(false);
        dispatch(topProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-4 lg:px-0 lg:pb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 bebas-neu-font">
          Top Feature Products
        </h1>
        <Link
          to="/products"
          className="flex gap-1 items-center hover:text-red-500 transition-all duration-300 font-medium"
        >
          <span>All Products</span>
          <span>
            <FaAngleRight />
          </span>
        </Link>
      </div>
      <div className="md:flex justify-center gap-2">
        <div className="max-w-md w-full lg:flex bg-white p-3 gap-3 rounded-md">
          <div className="lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              className="lg:h-full rounded-md"
              src="https://img.global.news.samsung.com/global/wp-content/uploads/2022/02/Galaxy_S22_Ultra_PR_main1F.jpg"
              alt=""
            />
          </div>
          <div className="rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
            <div>
              <p className="text-sm text-red-500 flex items-center">
                {ratingStar} <span className="ml-2">{rating}</span>
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Samsung S22 Ultra
              </div>
              <p className="text-gray-700 text-xs text-justify">
                Galaxy S22 Ultra is an excellent phone for those who want a
                premium mobile gaming experience, because it's equipped with a
                fast 4nm processor, long-lasting battery and large storage
                capabilities.
              </p>
              <button className="mt-3 w-full rounded-full bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {products?.topProducts?.slice(1, 7)?.map((product, index) => (
                <TopProductCard key={index} product={product} />
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
