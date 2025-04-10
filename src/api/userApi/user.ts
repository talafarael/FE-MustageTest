import { useQuery } from "@tanstack/react-query";
import { AxiosGetAuth } from "../axios.get";
import { IUser } from "@/types/api/IUser";
import { useTokenStore } from "@/store/authTokenStore";

export const useGetUserQuery = () => {
  const { token } = useTokenStore()
  return useQuery({
    queryKey: ["get-user"],
    queryFn: async () =>
      await AxiosGetAuth<IUser>({ path: `/user/profile`, token: token ? token : "" }),

  });
};
