import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { AuthContext } from "../../contexts/AuthProvider";
import { ProductsContext } from "../../contexts/ProductsProvider";
import { cartProducts } from "../../redux/actions/actions";
import SingleCartCard from "../Shared/SingleCartCard";

const Cart = ({ products }) => {
  const { show, setShow } = useContext(ProductsContext);
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
    <>
      <div>
        {show && (
          <div className="w-full h-full bg-white z-10 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 mt-16 lg:mt-0">
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <FaArrowLeft />
                    <p className="text-sm pl-2 leading-none">Back</p>
                  </div>
                  <p className="text-2xl font-semibold text-gray-800 pt-5">
                    Total Cart {products?.cartProducts?.length}
                  </p>

                  {/* Cart Products */}

                  {products.cartProducts?.map((product) => (
                    <SingleCartCard key={product?._id} product={product} />
                  ))}
                </div>

                <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-5 lg:px-16 py-5 justify-center overflow-y-auto">
                    <div className="space-y-5">
                      <p className="text-2xl font-black text-gray-800">
                        Summary
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-base leading-none text-gray-800">
                            Subtotal
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            $9,000
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-base leading-none text-gray-800">
                            Shipping
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            $30
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-base leading-none text-gray-800">
                            Tax
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            $35
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xl leading-none text-gray-800">
                            Total
                          </p>
                          <p className="text-xl leading-none font-bold text-right text-gray-800">
                            $10,240
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        onClick={() => setShow(!show)}
                        className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cartProducts,
  };
};

export default connect(mapStateToProps)(Cart);
