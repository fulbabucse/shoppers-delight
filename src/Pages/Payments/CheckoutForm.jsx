import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { url } from "../../utils/BaseURL";

const CheckoutForm = ({ products, price }) => {
  const { user } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payments-success`,
        payment_method_data: {
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        products: products,
        name: user?.displayName,
        email: user?.email,
        payment_date: new Date().toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        price,
        transectionId: paymentIntent.id,
      };
      fetch(`${url}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then(() => {
          fetch(`${url}/cart/clear-after-payments/${user?.email}`, {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
            },
          })
            .then((res) => res.json())
            .then((deleteData) => {
              if (deleteData.deletedCount > 0) {
                navigate("/payments-success");
                // http://localhost:5000/cart/clear-after-payments/farhanahmedcse@gmail.com
              }
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.log(err));
    } else {
      setMessage("Something Wrong");
    }

    setIsProcessing(false);
  };
  return (
    <div className="w-full lg:w-1/3 mx-auto h-screen">
      <Helmet>
        <title>Payment - Shopper's Delight</title>
      </Helmet>
      <form onSubmit={handleSubmit} className="w-full">
        <PaymentElement />
        <button
          disabled={isProcessing}
          className="bg-red-500 mt-5 px-5 py-2 full font-medium text-white transition hover:bg-red-600 text-lg rounded-full"
        >
          <span id="button-text">
            {isProcessing ? "Processing..." : "Pay Now"}
          </span>
        </button>
      </form>

      {message && (
        <>
          <div id="mt-4 text-center">{message}</div>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
