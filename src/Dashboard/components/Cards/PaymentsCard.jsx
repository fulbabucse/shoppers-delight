import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { completePayments } from "../../../redux/actions/actions";
import { url } from "../../../utils/BaseURL";

const PaymentsCard = ({ payments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${url}/complete/payments`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      })
      .then((data) => dispatch(completePayments(data.data)))
      .catch((err) => console.log(err));
  }, []);

  console.log(payments);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                Payment Complete
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8">
          {/* Projects table */}
          <div className="relative overflow-x-auto sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    SN.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Payment Date</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Buyer Email</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Quantity</div>
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
                {payments?.completePayments?.map((payment, index) => (
                  <tr
                    key={payment?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {payment?.name?.length > 10 ? (
                        <>{payment?.name?.slice(0, 10)}...</>
                      ) : (
                        payment?.name
                      )}
                    </th>
                    <td className="px-6 py-4">{payment?.payment_date}</td>
                    <td className="px-6 py-4">
                      {payment?.email?.length > 10 ? (
                        <>{payment?.email?.slice(0, 10)}...</>
                      ) : (
                        payment?.email
                      )}
                    </td>
                    <td className="px-6 py-4">{payment?.products?.length}</td>
                    <td className="px-6 py-4 uppercase">
                      {payment?.transectionId.slice(0, 10)}...
                    </td>
                    <td className="px-6 py-4">${payment?.price}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/payments/invoice/${payment?._id}`}
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
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    payments: state.completePayments,
  };
};

export default connect(mapStateToProps)(PaymentsCard);
