import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckoutForm = ({ products }) => {
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
        payment_info: {
          name: user?.displayName,
          email: user?.email,
          payment_date: new Date().toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          createAt: new Date().getTime(),
          transectionId: paymentIntent.id,
        },
      };
      fetch(`${process.env.REACT_APP_BASE_URL}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            fetch(
              `http://localhost:5000/cart/clear-after-payments?email=${user?.email}`,
              {
                method: "DELETE",
                headers: {
                  authorization: `Bearer ${localStorage.getItem(
                    "ShopperToken"
                  )}`,
                },
              }
            )
              .then((res) => res.json())
              .then((deleteData) => {
                if (deleteData.deletedCount > 0) {
                  navigate("/payments-success");
                }
              })
              .catch((err) => console.error(err));
          }
        })
        .catch((err) => console.log(err));
    } else {
      setMessage("Something Wrong");
    }

    setIsProcessing(false);
  };
  return (
    <div className="w-full lg:w-1/3 mx-auto">
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
