import { useQuery } from "@tanstack/react-query";
import { url } from "../utils/BaseURL";

const useAuth = (email) => {
  const { data: userData = [], refetch } = useQuery({
    queryKey: ["billing", "email", email],
    queryFn: async () => {
      const res = await fetch(`${url}/payments/billing?email=${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return [userData, refetch];
};

export default useAuth;
