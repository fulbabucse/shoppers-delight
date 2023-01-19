import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../Dashboard/Shared/AdminNavbar";
import FooterAdmin from "../Dashboard/Shared/FooterAdmin";
import HeaderStats from "../Dashboard/Shared/HeaderStats";
import Sidebar from "../Dashboard/Shared/Sidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>
        <div className="mt-32">
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default Admin;
