import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { url } from "../../utils/BaseURL";
import CheckoutForm from "./CheckoutForm";

const Payments = () => {
  const [stripePromise, SetStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(`${url}/cart/${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    fetch(`${url}/config`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
      },
    }).then(async (res) => {
      refetch();
      const { publishableKey } = await res.json();
      SetStripePromise(loadStripe(publishableKey));
    });
  }, []);

  const priceArray = [];
  products?.map((product) => {
    return priceArray.push(product?.price);
  });

  const price = priceArray.reduce((total, value) => {
    return total + value;
  }, 0);

  const shipping = 35;
  const tax = price * 0.01;
  const totalPrice = price + tax + shipping;

  useEffect(() => {
    fetch(`${url}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
      },
      body: JSON.stringify({ price }),
    }).then(async (res) => {
      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm products={products} price={totalPrice} />
        </Elements>
      )}
    </div>
  );
};

export default Payments;
