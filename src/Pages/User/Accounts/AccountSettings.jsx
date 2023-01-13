import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import Purchase from "./Purchase";

const AccountSettings = () => {
  const { user } = useContext(AuthContext);
  return (
    <div class="container mx-auto p-5 min-h-screen">
      <Helmet>
        <title>{user?.displayName} Profile - Shopper's Delight</title>
      </Helmet>
      <div class="flex items-start">
        <ul
          class="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li class="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profile"
              class="
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

          <li class="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-purchase"
              class="
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

          <li class="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-editProfile"
              class="
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

        <div class="tab-content" id="tabs-tabContentVertical">
          <div
            class="tab-pane fade show active"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tab-profile"
          >
            <div class="w-full mx-2 h-64">
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span class="text-green-500">
                    <FaUser />
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Name</div>
                      <div class="px-4 py-2">{user?.displayName || null}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Member since</div>
                      <div class="px-4 py-2">
                        {user?.metadata?.creationTime}
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">Male</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">880 17365 34295</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">Rangpur, Bangladesh</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">
                        Permanent Address
                      </div>
                      <div class="px-4 py-2">Rangpur, Bangladesh</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href={`mailto:${user?.email}`}>
                          {user?.email}
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      <div class="px-4 py-2">Feb 05, 2002</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase */}
          <div
            class="tab-pane fade w-full"
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
            class="tab-pane fade"
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
