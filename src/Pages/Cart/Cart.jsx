import axios from "axios";
import React, { useEffect, useContext } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import { cartProducts } from "../../redux/actions/actions";
import SingleCartCard from "../Shared/SingleCartCard";

const Cart = ({ products }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const dispatch = useDispatch();

  const fetchCartProduct = async () => {
    const res = await axios
      .get(`http://localhost:5000/cart/${user?.email}`)
      .catch((err) => console.error(err));
    dispatch(cartProducts(res.data));
  };

  useEffect(() => {
    setLoading(true);
    fetchCartProduct();
    setLoading(false);
  }, [user?.email]);

  const priceArray = [];

  products.cartProducts?.map((product) => {
    return priceArray.push(product.price);
  });

  const withOutTax = priceArray.reduce((total, value) => {
    return total + value;
  }, 0);

  const shipping = 35;
  const tax = withOutTax * 0.01;
  const totalPrice = withOutTax + tax + shipping;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {products.cartProducts?.length === 0 ? (
        <div className="flex justify-center mt-10">
          <div>
            <h3 className="text-center mb-3 text-xl">Cart is Empty</h3>
            <Link to="/products">
              <button className="bg-red-500 px-5 py-2 w-54 font-medium text-white transition hover:bg-red-600 text-lg rounded-full">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4">
            {products.cartProducts?.map((product, index) => (
              <SingleCartCard key={index} product={product} />
            ))}
          </div>
          <div className="w-full bg-gray-100">
            <div className="flex flex-col px-5 overflow-y-auto">
              <div className="space-y-5">
                <p className="text-2xl font-black text-gray-800">Summary</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-base leading-none text-gray-800">
                      Total Items
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      {products.cartProducts?.length}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      ${withOutTax}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      ${shipping}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">
                      $${tax.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl leading-none text-gray-800">Total</p>
                    <p className="text-xl leading-none font-bold text-right text-gray-800">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-500 px-5 py-2 w-full font-medium text-white transition hover:bg-red-600 text-lg rounded-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cartProducts,
  };
};

export default connect(mapStateToProps)(Cart);
