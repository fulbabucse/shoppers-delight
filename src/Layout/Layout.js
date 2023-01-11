import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import LargeNavbar from "../Pages/Shared/Navbar/LargeNavbar";
import SmallNavbar from "../Pages/Shared/Navbar/SmallNavbar";

const Layout = () => {
  return (
    <>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
      <div className="hidden lg:block lg:mb-3">
        <LargeNavbar />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
