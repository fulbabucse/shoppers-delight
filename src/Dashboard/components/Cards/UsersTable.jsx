import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { allUsers } from "../../../redux/actions/actions";
import { url } from "../../../utils/BaseURL";

const UsersTable = ({ users }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${url}/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      })
      .then((data) => dispatch(allUsers(data.data)))
      .catch((err) => console.log(err));
  }, []);

  console.log(users?.users);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                All Users List
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8">
          {/* Projects table */}
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
                          Name
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
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
                          User Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.users?.map((user, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                            {user?.name?.length > 20 ? (
                              <>{user?.name?.slice(0, 20)}...</>
                            ) : (
                              user?.name
                            )}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user?.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                            <img
                              src={user?.photoURL}
                              className="w-10 h-10 rounded-full"
                              alt=""
                            />
                          </td>

                          <td
                            className={`${
                              user?.role
                                ? "text-sm text-blue-500 px-6 py-4 whitespace-nowrap capitalize font-semibold"
                                : "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize"
                            }`}
                          >
                            {user?.role ? user?.role : "Normal"}
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UsersTable);
