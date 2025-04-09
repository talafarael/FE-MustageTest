import { IAuthResponse, IUserCreate } from "@/types/api/IUserCreate";
import { AxiosPost } from "../axios.post";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: IUserCreate) => {
      return AxiosPost<IUserCreate, IAuthResponse>({
        path: "/auth/login",
        data: body,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
  });
};
export const useRegistrationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: IUserCreate) => {
      return AxiosPost<IUserCreate, IAuthResponse>({
        path: "/auth/registration",
        data: body,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },

  });
};
