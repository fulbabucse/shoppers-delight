import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import { url } from "../../../utils/BaseURL";

const Purchase = () => {
  const { user } = useContext(AuthContext);

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["payments", "email", user?.email],
    queryFn: async () => {
      const res = await fetch(`${url}/payments?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="relative overflow-x-auto sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Payment Date</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Email</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Transection No.</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Price</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Invoice</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              key={order?._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {order?.name}
              </th>
              <td className="px-6 py-4">{order?.payment_date}</td>
              <td className="px-6 py-4">{order?.email}</td>
              <td className="px-6 py-4 uppercase">
                {order?.transectionId.slice(0, 10)}...
              </td>
              <td className="px-6 py-4">$${order?.price}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  to={`/payments/invoice/${order?._id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Invoice
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchase;
