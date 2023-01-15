import React from "react";
import PendingOrdersTable from "../Cards/PendingOrdersTable";

// components

export default function Orders() {
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
