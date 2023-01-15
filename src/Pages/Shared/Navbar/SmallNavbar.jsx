import React, { useState } from "react";
import { useContext } from "react";
import { FaTimes, FaBars, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../assets/images/logo/shoppers-logo.png";

const SmallNavbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin] = useAdmin(user?.email);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="lg:flex lg:items-center justify-between">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <img className="h-14" src={logo} alt="Brand Logo" />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                className="px-2 py-0 text-slate-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes></FaTimes> : <FaBars></FaBars>}
              </button>
            </div>
          </div>

          <div
            className={`${
              navbar
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center justify-end`}
          >
            <div className="flex flex-col items-center md:flex-row md:mx-6">
              <Link
                onClick={() => setNavbar(!navbar)}
                to="/"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                onClick={() => setNavbar(!navbar)}
                to="/products"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Products
              </Link>
              <Link
                onClick={() => setNavbar(!navbar)}
                to="/contact"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Contact
              </Link>
              <Link
                onClick={() => setNavbar(!navbar)}
                to="/cart"
                className="text-red-500 text-xl md:mx-4"
              >
                <FaShoppingCart />
              </Link>
            </div>

            <div className="relative flex justify-center mt-2">
              <div>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {user?.displayName}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      cliRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isDropdownOpen && (
                <div
                  className="absolute left-22 z-10 mt-11 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {user ? (
                      <>
                        <Link
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          to="/account-settings"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Account settings
                        </Link>

                        <button
                          onClick={() => {
                            handleSignOut();
                            setIsDropdownOpen(!isDropdownOpen);
                          }}
                          type="submit"
                          className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          Sign out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          to="/sign-in"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Sign In
                        </Link>

                        <Link
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          to="/sign-up"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {isAdmin && user && (
              <div className="text-center mt-3">
                <Link
                  to="/dashboard"
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  Admin
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
