import React from "react";
import Sidebar from "../Dashboard/components/Sidebar/Sidebar";
import AdminNavbar from "../Dashboard/components/Navbar/AdminNavbar";
import HeaderStats from "../Dashboard/components/Headers/HeaderStats";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../Dashboard/components/Footers/FooterAdmin";

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
        <FooterAdmin />
      </div>
    </>
  );
};

export default Admin;
