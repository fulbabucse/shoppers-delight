import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const Purchase = () => {
  const { user } = useContext(AuthContext);

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["payments", "email", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payments?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div class="relative overflow-x-auto sm:rounded-lg w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Payment Date
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">Email</div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">Transection Id</div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Price
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">Invoice</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              key={order?._id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {order?.name}
              </th>
              <td class="px-6 py-4">{order?.payment_date}</td>
              <td class="px-6 py-4">{order?.email}</td>
              <td class="px-6 py-4">{order?.transectionId.slice(0, 10)}...</td>
              <td class="px-6 py-4">$${order?.price}</td>
              <td class="px-6 py-4 text-right">
                <Link
                  to={`/payments/invoice/${order?._id}`}
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
