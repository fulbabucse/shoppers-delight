import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
