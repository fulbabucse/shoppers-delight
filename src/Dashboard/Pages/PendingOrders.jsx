import React from "react";
import PendingOrdersTable from "../components/Cards/PendingOrdersTable";

// components

export default function PendingOrders() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PendingOrdersTable />
        </div>
      </div>
    </>
  );
}
