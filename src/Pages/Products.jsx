import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import PriceRange from "../components/PriceRange";
import { setProducts } from "../redux/actions/actions";
import CategoryAccordion from "./Shared/CategoryAccordion";
import ProductCard from "./Shared/ProductCard";

const Products = ({ products }) => {
  const [showMore, setShowMore] = useState(10);
  const allProducts = products.products;
  const dispatch = useDispatch();

  const url = "http://localhost:5000/products";

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(url).catch((err) => console.log(err.message));
      dispatch(setProducts(res.data));
    };
    fetchProducts();
  }, [url]);

  const sliceProducts = allProducts?.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };

  return (
    <div>
      <div className="md:flex justify-center gap-2">
        <div class="max-w-sm w-full lg:flex flex-col bg-white p-3 gap-3 rounded-md">
          <div className="mb-3">
            <h1 className="text-xl font-medium text-gray-600 dark:text-gray-50 uppercase roboto-font">
              Categories
            </h1>
            <p className="h-[2px] w-20 bg-red-500"></p>
          </div>
          <div>
            <CategoryAccordion />
            <PriceRange />
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sliceProducts?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>

      {sliceProducts?.length > 1 && (
        <div className="flex justify-center">
          <button
            onClick={() => handleShowMore()}
            className="mt-4 rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Products);
