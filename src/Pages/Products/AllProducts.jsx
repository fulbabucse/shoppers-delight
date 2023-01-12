import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Spinner from "../../components/Spinner";
import { ProductsContext } from "../../contexts/ProductsProvider";
import ProductCard from "../Shared/ProductCard";

const AllProducts = () => {
  const { newPrice, ratingStar } = useContext(ProductsContext);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);

  const startPrice = Math.ceil(newPrice[0]);
  const endPrice = Math.ceil(newPrice[1]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", startPrice, endPrice, ratingStar, page, size],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?start=${startPrice}&end=${endPrice}&rating=${ratingStar}&page=${page}&size=${size}`,
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <div className="mt-3">
        <div class="flex flex-col lg:flex-row justify-between">
          <div class="flex justify-between items-center gap-10 text-sm">
            <div>
              <div>
                <select
                  onChange={(e) => setSize(e.target.value)}
                  defaultValue={products?.products?.length}
                  class="form-select appearance-none
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
            <p class="text-gray-500 mt-4 lg:mt-0">
              Showing {page + 1} to {pages} of {products?.products?.length}{" "}
              Entires
            </p>
          </div>
          {/* px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100 */}
          <nav class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">
            <button class="p-2 mr-4 rounded hover:bg-gray-100">
              <FaAngleLeft />
            </button>
            {[...Array(pages).keys()].map((n) => (
              <button
                onClick={() => setPage(n)}
                key={n}
                class="px-4 py-2 rounded hover:bg-gray-200"
              >
                {n + 1}
              </button>
            ))}
            <button class="p-2 ml-4 rounded hover:bg-gray-100">
              <FaAngleRight />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
