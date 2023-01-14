import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import Purchase from "./Purchase";

const AccountSettings = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto p-5 min-h-screen">
      <Helmet>
        <title>{user?.displayName} Profile - Shopper's Delight</title>
      </Helmet>
      <div className="flex items-start">
        <ul
          className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profile"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-2
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        "
              id="tab-profile"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="true"
            >
              Profile
            </a>
          </li>

          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-purchase"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tab-purchase"
              data-bs-toggle="pill"
              data-bs-target="#tabs-purchase"
              role="tab"
              aria-controls="tabs-purchase"
              aria-selected="false"
            >
              Purchase
            </a>
          </li>

          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-editProfile"
              className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-messages-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-editProfile"
              role="tab"
              aria-controls="tabs-editProfile"
              aria-selected="false"
            >
              Edit Profile
            </a>
          </li>
        </ul>

        <div className="tab-content" id="tabs-tabContentVertical">
          <div
            className="tab-pane fade show active"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tab-profile"
          >
            <div className="w-full mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <FaUser />
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Name</div>
                      <div className="px-4 py-2">
                        {user?.displayName || null}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Member since
                      </div>
                      <div className="px-4 py-2">
                        {user?.metadata?.creationTime}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Male</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">880 17365 34295</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">Rangpur, Bangladesh</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanent Address
                      </div>
                      <div className="px-4 py-2">Rangpur, Bangladesh</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href={`mailto:${user?.email}`}
                        >
                          {user?.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">Feb 05, 2002</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase */}
          <div
            className="tab-pane fade w-full"
            id="tabs-purchase"
            role="tabpanel"
            aria-labelledby="tab-purchase"
          >
            <div className="w-full">
              <Purchase />
            </div>
          </div>

          {/* Edit Profile */}
          <div
            className="tab-pane fade"
            id="tabs-editProfile"
            role="tabpanel"
            aria-labelledby="tab-purchase"
          >
            <h1>Edit Profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
