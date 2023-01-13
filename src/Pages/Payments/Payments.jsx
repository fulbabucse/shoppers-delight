import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import CheckoutForm from "./CheckoutForm";

const Payments = () => {
  const [stripePromise, SetStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
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

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/config`).then(async (res) => {
      const { publishableKey } = await res.json();
      SetStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ShopperTOken")}`,
      },
      body: JSON.stringify({}),
    }).then(async (res) => {
      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payments;
