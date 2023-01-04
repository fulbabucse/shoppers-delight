import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { setProducts } from "../redux/actions/actions";
import ProductCard from "./Shared/ProductCard";

const Products = ({ products }) => {
  const allProducts = products.products;
  const dispatch = useDispatch();

  const url = "https://fakestoreapi.com/products";

  const fetchProducts = async () => {
    const res = await axios.get(url).catch((err) => console.log(err.message));
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      {allProducts.length === 0 ? (
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
    products: state.products,
  };
};

export default connect(mapStateToProps)(Products);
