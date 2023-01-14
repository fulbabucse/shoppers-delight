import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import logo from "../assets/images/logo/shoppers-logo.png";
import { url } from "../utils/BaseURL";

const Invoice = () => {
  const printRef = useRef();
  const { id } = useParams();
  const { data: order = {} } = useQuery({
    queryKey: ["payments", id],
    queryFn: async () => {
      const res = await fetch(`${url}/payments/${id}`);
      const data = await res.json();
      return data;
    },
  });

  const { email, name, payment_date, transectionId, products } = order;

  const priceArray = [];
  products?.map((product) => {
    return priceArray.push(product?.price);
  });

  const subTotal = priceArray.reduce((total, value) => {
    return total + value;
  }, 0);

  const shipping = 35;
  const tax = subTotal * 0.01;
  const totalPrice = subTotal + tax + shipping;

  const invoiceNo = `#SD${(Math.random(1000) * 1000).toFixed(0)}`;

  return (
    <section className="w-full">
      <div
        ref={printRef}
        className="h-[1100px] w-[768px] bg-white mx-auto px-16 py-10"
      >
        <article className="overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Invoice {invoiceNo}
                </h1>
              </div>
              <div className="flex flex-col justify-end items-end">
                <img className="h-20" src={logo} alt="Logo" />
                <h2 className="font-semibold text-lg">
                  Shopper's Delight Inc.
                </h2>
                <a href="mailto:help@shopper-delight.com">
                  help@shopper-delight.com
                </a>
                <p>5431/SR, Rangpur, Dhaka, Bangladesh</p>
                <p>{payment_date}</p>
              </div>
            </div>
            <div>
              <div className="flex w-full">
                <div className="grid grid-cols-4 gap-12">
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">
                      Billed To
                    </p>
                    <p>Mr/Mrs. {name}</p>
                    <p>Rangpur, Bangladesh</p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">
                      Invoice Number
                    </p>
                    <p>{invoiceNo}</p>

                    <p className="mt-2 text-sm font-normal text-slate-700">
                      Date of Issue
                    </p>
                    <p>{payment_date}</p>
                  </div>
                  <div className="text-sm font-light text-slate-500">
                    <p className="text-sm font-normal text-slate-700">Status</p>
                    <p>Paid</p>

                    <p className="mt-2 text-sm font-normal text-slate-700">
                      Transection No.
                    </p>
                    <p className="uppercase">{transectionId}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col mx-0 mt-8">
                <table className="min-w-full divide-y divide-slate-500">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3 text-sm text-start font-normal text-slate-700"
                      >
                        Products Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-sm text-start font-normal text-slate-700 sm:pl-6 md:pl-0"
                      >
                        Brand
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-start text-sm font-normal text-slate-700"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-end text-sm font-normal text-slate-700"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product, index) => (
                      <tr key={index} className="border-b border-slate-200">
                        <td className="hidden py-4 capitalize text-sm text-slate-500 sm:table-cell">
                          {product?.title.length > 30 ? (
                            <>{product?.title?.slice(0, 30)}...</>
                          ) : (
                            product?.title
                          )}
                        </td>
                        <td className="hidden  py-4 text-sm text-slate-500 sm:table-cell">
                          {product?.brand}
                        </td>
                        <td className="hidden  py-4 text-sm text-slate-500 sm:table-cell">
                          {product?.quantity}
                        </td>
                        <td className="py-4 text-end pl-3 pr-4 text-sm text-slate-500 sm:pr-6 md:pr-0">
                          ${product?.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        scope="row"
                        colspan="3"
                        className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                      >
                        Subtotal
                      </th>
                      <th
                        scope="row"
                        className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                      >
                        Subtotal
                      </th>
                      <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        ${subTotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colspan="3"
                        className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                      >
                        Shipping
                      </th>
                      <th
                        scope="row"
                        className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                      >
                        Shipping
                      </th>
                      <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        ${shipping.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colspan="3"
                        className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                      >
                        Tax
                      </th>
                      <th
                        scope="row"
                        className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                      >
                        Tax
                      </th>
                      <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                        ${tax.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <th
                        scope="row"
                        colspan="3"
                        className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                      >
                        Total
                      </th>
                      <th
                        scope="row"
                        className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                      >
                        Total
                      </th>
                      <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                        ${totalPrice.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="flex justify-center items-center gap-5 my-5">
        <ReactToPrint
          trigger={() => (
            <button className="bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 text-sm rounded-full">
              Print
            </button>
          )}
          content={() => printRef.current}
        ></ReactToPrint>
      </div>
    </section>
  );
};

export default Invoice;
