import { useEffect } from "react";
import { useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://shopper-s-delight-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("ShopperToken", data.accessToken);
          setToken(data.accessToken);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return [token];
};

export default useToken;
