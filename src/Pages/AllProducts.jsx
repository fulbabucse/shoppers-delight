import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/actions";
import ProductCard from "./Shared/ProductCard";

const AllProducts = ({ products }) => {
  const [showMore, setShowMore] = useState(9);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sliceProducts?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
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

export default connect(mapStateToProps)(AllProducts);
