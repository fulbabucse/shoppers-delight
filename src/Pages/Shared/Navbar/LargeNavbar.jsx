import React from "react";
import { FaBars } from "react-icons/fa";
import NavbarItem from "./NavbarItem";
import logo from "../../../assets/images/logo/shoppers-logo.png";
import { Link } from "react-router-dom";

const LargeNavbar = () => {
  return (
    <div>
      <div className="container px-4 lg:px-0 mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="h-20" src={logo} alt="Brand Logo" />
          </Link>
        </div>
        <div>
          <div className="offcanvas-header flex items-center justify-between py-4">
            <button
              className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 flex items-center gap-1 hover:shadow-lg"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <FaBars />
              <span className="text-sm">MENU</span>
            </button>
          </div>
        </div>
      </div>
      <NavbarItem />
    </div>
  );
};

export default LargeNavbar;
