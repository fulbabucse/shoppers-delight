import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/images/logo/shoppers-logo.png";
import { toast } from "react-hot-toast";
import useAdmin from "../../../hooks/useAdmin";

const NavbarItem = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin] = useAdmin(user?.email);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Successfully Account sign Out");
      })
      .catch(() => {});
  };

  return (
    <div className="flex space-x-2">
      <div className="px-4 lg:px-10">
        <div
          className="offcanvas offcanvas-top fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 right-0 border-none h-24"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header flex items-center justify-between p-4">
            <div>
              <Link to="/">
                <img className="h-14" src={logo} alt="Brand Logo" />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                <p data-bs-dismiss="offcanvas">Home</p>
              </Link>
              <Link
                to="/products"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                <p data-bs-dismiss="offcanvas">Products</p>
              </Link>
              <Link
                to="/contact"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                <p data-bs-dismiss="offcanvas">Contact</p>
              </Link>
              <Link to="/cart" className="text-red-500 text-xl md:mx-4">
                <p data-bs-dismiss="offcanvas">
                  <FaShoppingCart />
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative inline-block text-left ml-5">
                <div>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {user?.displayName || "User Name"}
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
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      {user ? (
                        <>
                          <Link
                            to="/account-settings"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            <p data-bs-dismiss="offcanvas">Account settings</p>
                          </Link>

                          <button
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                              handleSignOut();
                            }}
                            type="submit"
                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                          >
                            <p data-bs-dismiss="offcanvas">Sign out</p>
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/sign-in"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            <p data-bs-dismiss="offcanvas">Sign In</p>
                          </Link>

                          <Link
                            to="/sign-up"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            <p data-bs-dismiss="offcanvas">Sign Up</p>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {isAdmin && user && (
                <div>
                  <Link to="/admin">Admin</Link>
                </div>
              )}
            </div>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItem;
