import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../Pages/Shared/ProductCard";
import { categoryProducts } from "../redux/actions/actions";
import Spinner from "./Spinner";

const CategoryProducts = ({ products }) => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const url = `https://dummyjson.com/products/category/${name}`;
  const fetchCategoryProducts = async () => {
    const res = await axios.get(url).catch((err) => console.log(err.message));
    dispatch(categoryProducts(res.data));
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [name]);

  const allProducts = products?.categoryProducts?.products;

  return (
    <div>
      {allProducts?.length === 0 ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.categoryProducts,
  };
};

export default connect(mapStateToProps)(CategoryProducts);
