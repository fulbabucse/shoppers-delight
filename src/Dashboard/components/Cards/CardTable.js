import React, { useState } from "react";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { dashboardAllProducts } from "../../../redux/actions/actions";
import { url } from "../../../utils/BaseURL";

// components

const CardTable = ({ products }) => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await fetch(`${url}/products/all?page=${page}&size=${size}`);
    const data = await res.json();
    dispatch(dashboardAllProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, [page, size]);

  const pages = Math.ceil(products?.dashboardProducts?.count / size);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                Products List
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8">
          {/* Projects table */}
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          SN.
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Products Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Stock
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.dashboardProducts?.products?.map(
                        (product, index) => (
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                              {product?.title?.length > 20 ? (
                                <>{product?.title?.slice(0, 20)}...</>
                              ) : (
                                product?.title
                              )}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                              {product?.category?.length > 20 ? (
                                <>{product?.category?.slice(0, 20)}...</>
                              ) : (
                                product?.category
                              )}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                              <img
                                src={product?.thumbnail}
                                className="w-10 h-10 rounded-full"
                                alt=""
                              />
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {product?.stock}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Delete
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex justify-between items-center gap-10 text-sm">
                <div>
                  <div>
                    <select
                      onChange={(e) => setSize(e.target.value)}
                      defaultValue={
                        products?.dashboardProducts?.products?.length
                      }
                      className="form-select appearance-none
      block
      w-20
      px-3
      py-1
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </div>
                <p className="text-gray-500 mt-4 lg:mt-0">
                  Showing {page + 1} to {pages} of{" "}
                  {products?.dashboardProducts?.products?.length}
                  <span className="ml-1">Entires</span>
                </p>
              </div>
              <nav className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">
                <button
                  onClick={() => handlePrev()}
                  disabled={page === 0}
                  className="p-2 mr-4 rounded hover:bg-gray-100"
                >
                  <FaAngleLeft />
                </button>
                {[...Array(pages).keys()]?.map((n) => (
                  <button
                    onClick={() => setPage(n)}
                    key={n}
                    className={`${
                      page === n &&
                      "px-4 py-2 bg-gray-200 text-gray-900 font-medium hover:bg-gray-300"
                    } hover:bg-gray-300 px-4 py-2`}
                  >
                    {n + 1}
                  </button>
                ))}
                <button
                  onClick={() => handleNext()}
                  disabled={page + 1 === pages}
                  className="p-2 ml-4 rounded hover:bg-gray-100"
                >
                  <FaAngleRight />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.dashboardProducts,
  };
};

export default connect(mapStateToProps)(CardTable);
