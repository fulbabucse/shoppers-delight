import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const UserDropdown = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <a className="text-blueGray-500 block">
        <div className="items-center flex">
          <img
            className="w-12 h-12 rounded-full align-middle border-none shadow-lg"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>
      </a>
    </>
  );
};

export default UserDropdown;
