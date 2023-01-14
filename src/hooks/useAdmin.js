import { useEffect } from "react";
import { useState } from "react";
import { url } from "../utils/BaseURL";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${url}/users/admin?email=${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
