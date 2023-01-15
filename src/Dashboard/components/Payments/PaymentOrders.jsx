import React from "react";
import PaymentsCard from "../Cards/PaymentsCard";

// components

export default function PaymentsOrders() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PaymentsCard />
        </div>
      </div>
    </>
  );
}
