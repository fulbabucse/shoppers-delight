/*eslint-disable*/
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserDropdown from "../components/Dropdown/UserDropdown";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineHome,
  AiFillSetting,
  AiOutlineAppstoreAdd,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import {
  MdProductionQuantityLimits,
  MdAddchart,
  MdPendingActions,
  MdPayment,
  MdAdd,
} from "react-icons/md";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-72 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-red-500 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/dashboard"
          >
            Shopper's Delight
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blue-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <NavLink
                    to="/admin/dashboard"
                    className="md:block text-left md:pb-2 text-red-500 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 hover:bg-gray-100"
                  >
                    Shopper's Delight
                  </NavLink>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blue-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none space-y-1">
              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/dashboard"
                >
                  <span>
                    <AiOutlineHome className="text-xl" />
                  </span>
                  Dashboard
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/settings"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <span>
                    <AiFillSetting className="text-xl" />
                  </span>
                  Settings
                </NavLink>
              </li>

              <hr className="my-4 md:min-w-full" />

              {/* Heading */}
              <h6 className="md:min-w-full text-blue-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Category Pages
              </h6>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/all-categories"
                >
                  <span>
                    <BiCategoryAlt className="text-xl" />
                  </span>
                  All Categories
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/add-category"
                >
                  <span>
                    <AiOutlineAppstoreAdd className="text-xl" />
                  </span>
                  Add Category
                </NavLink>
              </li>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-blue-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Sliders Pages
              </h6>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/sliders"
                >
                  <span>
                    <BsSliders className="text-xl" />
                  </span>
                  Sliders
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/add-slider"
                >
                  <span>
                    <MdAddchart className="text-xl" />
                  </span>
                  Add Slider
                </NavLink>
              </li>

              <hr className="my-4 md:min-w-full" />

              {/* Heading */}
              <h6 className="md:min-w-full text-blue-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Products Pages
              </h6>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/products"
                >
                  <span>
                    <MdProductionQuantityLimits className="text-xl" />
                  </span>
                  Products
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/add-product"
                >
                  <span>
                    <MdAdd className="text-xl" />
                  </span>
                  Add Product
                </NavLink>
              </li>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-blue-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Orders Pages
              </h6>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/pending-orders"
                >
                  <span>
                    <MdPendingActions className="text-xl" />
                  </span>
                  Pending Orders
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/payments-complete"
                >
                  <span>
                    <MdPayment className="text-xl" />
                  </span>
                  Payments Complete
                </NavLink>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blue-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Users Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <NavLink
                  onClick={() => setCollapseShow("hidden")}
                  className={({ isActive }) =>
                    isActive
                      ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                      : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  }
                  to="/admin/all-users"
                >
                  <span>
                    <AiOutlineUserSwitch className="text-xl" />
                  </span>
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  All Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
