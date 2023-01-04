import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/actions";

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
      <h1>Products Page {allProducts.length}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Products);
