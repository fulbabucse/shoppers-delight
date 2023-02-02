import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Spinner from "../../components/Spinner";
import { ProductsContext } from "../../contexts/ProductsProvider";
import { url } from "../../utils/BaseURL";
import ProductCard from "../Shared/ProductCard";

const AllProducts = () => {
  const { newPrice, ratingStar } = useContext(ProductsContext);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);

  const startPrice = Math.ceil(newPrice[0]);
  const endPrice = Math.ceil(newPrice[1]);

  // products?start=50&end=100&page=0&size=5&rating=4

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", startPrice, endPrice, ratingStar, page, size],
    queryFn: async () => {
      const res = await fetch(
        `${url}/products?start=${startPrice}&end=${endPrice}&page=${page}&size=${size}&rating=${ratingStar}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const pages = Math.ceil(products?.count / size);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="mb-2">
        <p className="text-center">
          {products?.products?.length === 0
            ? "We're sorry. We cannot find any matches for your term."
            : `${products?.products?.length}  items found`}{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <div
        className={`${products?.products?.length === 0 ? "hidden" : "mt-3"}`}
      >
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex justify-between items-center gap-10 text-sm">
            <div>
              <div>
                <select
                  onChange={(e) => setSize(e.target.value)}
                  defaultValue={products?.products?.length}
                  className="form-select appearance-none
      block
      w-20
      px-3
      py-1
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="15">15</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
            <p className="text-gray-500 mt-4 lg:mt-0">
              Showing {page + 1} to {pages} of {products?.products?.length}
              <span className="ml-1">Entires</span>
            </p>
          </div>
          <nav className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">
            <button
              onClick={() => handlePrev()}
              disabled={page === 0}
              className="p-2 mr-4 rounded hover:bg-gray-100"
            >
              <FaAngleLeft />
            </button>
            {[...Array(pages).keys()]?.map((n) => (
              <button
                onClick={() => setPage(n)}
                key={n}
                className={`${
                  page === n &&
                  "px-4 py-2 bg-gray-200 text-gray-900 font-medium hover:bg-gray-300"
                } hover:bg-gray-300 px-4 py-2`}
              >
                {n + 1}
              </button>
            ))}
            <button
              onClick={() => handleNext()}
              disabled={page + 1 === pages}
              className="p-2 ml-4 rounded hover:bg-gray-100"
            >
              <FaAngleRight />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
