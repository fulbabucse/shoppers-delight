import React from "react";
import { FaBars } from "react-icons/fa";
import NavbarItem from "./NavbarItem";

const LargeNavbar = () => {
  return (
    <div>
      <div className="container px-4 lg:px-0 mx-auto flex justify-end items-center">
        <div>
          <div className="offcanvas-header flex items-center justify-between py-4">
            <button
              className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 flex items-center gap-1"
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
