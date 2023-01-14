import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import SingleCartCard from "../Shared/SingleCartCard";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/cart/${user?.email}`,
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

  const handleCartProductDelete = (id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Cart item delete success !!!");
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  const priceArray = [];
  products?.map((product) => {
    return priceArray.push(product?.price);
  });

  const withOutTax = priceArray.reduce((total, value) => {
    return total + value;
  }, 0);

  const shipping = 35;
  const tax = withOutTax * 0.01;
  const totalPrice = withOutTax + tax + shipping;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Cart - Shopper's Delight</title>
      </Helmet>
      {products?.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
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
            {products?.map((product, index) => (
              <SingleCartCard
                key={index}
                product={product}
                handleCartProductDelete={handleCartProductDelete}
              />
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
                      {products?.length}P
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
                <Link to="/payments">
                  <button className="bg-red-500 px-5 py-2 w-full font-medium text-white transition hover:bg-red-600 text-lg rounded-full">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
