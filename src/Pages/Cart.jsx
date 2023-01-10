import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { connect, useDispatch } from "react-redux";
import { AuthContext } from "../contexts/AuthProvider";
import { cartProducts } from "../redux/actions/actions";

const Cart = ({ products }) => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  const fetchCartProduct = async () => {
    const res = await axios
      .get(`http://localhost:5000/cart/${user?.email}`)
      .catch((err) => console.error(err));
    dispatch(cartProducts(res.data));
  };

  useEffect(() => {
    fetchCartProduct();
  }, [user?.email]);

  return (
    <div>
      <h1>Cart Page {products.cartProducts?.length}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cartProducts,
  };
};

export default connect(mapStateToProps)(Cart);
