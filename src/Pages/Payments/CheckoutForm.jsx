import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payments-success`,
      },
    });

    if (error) {
      setMessage(error.message);
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
          <div id="payment-message">{message}</div>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
