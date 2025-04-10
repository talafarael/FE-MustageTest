import { useTokenStore } from "@/store/authTokenStore";
import { ITask } from "@/types/api/IUser";
import { useQuery } from "@tanstack/react-query";
import { AxiosGetAuth } from "../axios.get";
import { useTaskParamStore } from "@/store/taskParamStore";

export const useGetTaskQuery = () => {
  const { token } = useTokenStore();
  const { filter, search } = useTaskParamStore();

  return useQuery({
    queryKey: ["get-user", filter, search],
    queryFn: async () => {
      const filterParam = filter == true ? 'true' : filter == false ? 'false' : 'null';

      const searchParam = search ? search : 'undefined';

      const path = `/user/get-task?filter=${filterParam ? filterParam : ''}&search=${searchParam}`;

      return await AxiosGetAuth<ITask[]>({
        path: path,
        token: token ? token : "",
      });
    },
  });
};

