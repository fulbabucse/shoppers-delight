import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { url } from "../../../utils/BaseURL";

const SlidersTable = () => {
  const { data: sliders = [], refetch } = useQuery({
    queryKey: ["sliders"],
    queryFn: async () => {
      const res = await fetch(`${url}/sliders`);
      const data = await res.json();
      return data;
    },
  });

  const handleSliderDelete = (id) => {
    fetch(`${url}/sliders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success("Successfully deleted 1 Slider");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                Sliders List
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8">
          {/* sliders table */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          SN.
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Sub-Title
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium  text-gray-900 px-6 py-4 text-center"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sliders?.map((slider, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                            {slider?.title?.length > 20 ? (
                              <>{slider?.title?.slice(0, 20)}...</>
                            ) : (
                              slider?.title
                            )}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                            {slider?.sub_title?.length > 20 ? (
                              <>{slider?.sub_title?.slice(0, 20)}...</>
                            ) : (
                              slider?.sub_title
                            )}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                            <img
                              src={slider?.image}
                              className="w-10 h-10 rounded-full"
                              alt=""
                            />
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {slider?.price}
                          </td>
                          <td className="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleSliderDelete(slider?._id)}
                              className="bg-red-500 p-2 font-medium text-white transition hover:bg-red-600 text-sm rounded-full"
                            >
                              <FaTrashAlt />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidersTable;
