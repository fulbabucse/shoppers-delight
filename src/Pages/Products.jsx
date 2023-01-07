import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { setProducts } from "../redux/actions/actions";
import ProductCard from "./Shared/ProductCard";

const Products = ({ products }) => {
  const [showMore, setShowMore] = useState(10);
  const allProducts = products.products;
  const dispatch = useDispatch();

  const url = "https://dummyjson.com/products?limit=100";

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(url).catch((err) => console.log(err.message));
      dispatch(setProducts(res.data));
    };
    fetchProducts();
  }, [url]);

  const sliceProducts = allProducts.products?.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };

  return (
    <div className="my-10">
      {allProducts?.products?.length === 0 ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {sliceProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}

      {sliceProducts?.length > 1 && (
        <div className="flex justify-center">
          <button
            onClick={() => handleShowMore()}
            className="mt-4 rounded-full bg-red-500 px-8 py-3 font-medium text-white transition hover:bg-red-600"
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
