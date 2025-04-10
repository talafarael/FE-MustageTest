import { ITaskChagne, ITaskCreate } from "@/types/api/ITaskCreate";
import { IUserCreate } from "@/types/api/IUserCreate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosPostAuth } from "../axios.post";
import { useTokenStore } from "@/store/authTokenStore";

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useTokenStore()

  return useMutation({
    mutationFn: (body: ITaskCreate) => {
      return AxiosPostAuth<ITaskCreate, boolean>({
        path: "/task/create",
        data: body,
        token: token ? token : ""
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
  });
};


export const useChangeTaskMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useTokenStore()

  return useMutation({
    mutationFn: (body: ITaskChagne) => {
      return AxiosPostAuth<ITaskChagne, boolean>({
        path: "/task/change",
        data: body,
        token: token ? token : ""
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
  });
};

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useTokenStore()

  return useMutation({
    mutationFn: (id: string) => {
      return AxiosPostAuth<null, boolean>({
        path: `/task/${id}`,
        data: null,
        token: token ? token : ""
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
  });
};
export const useChangeCompleteMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useTokenStore()

  return useMutation({
    mutationFn: (id: string) => {
      return AxiosPostAuth<null, boolean>({
        path: `/task/change-complete?taskId=${id}`,
        data: null,
        token: token ? token : ""
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
  });
};
