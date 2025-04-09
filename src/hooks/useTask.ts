import { useChangeTaskMutation, useCreateTaskMutation, useDeleteTaskMutation } from "@/api/taskApi/createTask"
import { ITaskCreate } from "@/types/api/ITaskCreate"


export const useCreateTask = () => {
  const createTaskMutation = useCreateTaskMutation()
  const changeTaskMutation = useChangeTaskMutation()
  const createTask = (body: ITaskCreate, id: string, typeAction: "create" | "change") => {
    const bodyChange = {
      ...body,
      id: id
    }
    const data = typeAction == "create" ? createTaskMutation.mutateAsync(body) : changeTaskMutation.mutateAsync(bodyChange)
    return data
  }
  return { createTask }
}
export const useDeleteTask = () => {
  const deleteTaskMutation = useDeleteTaskMutation()
  const deleteTask = (id: string) => {
    const data = deleteTaskMutation.mutateAsync(id)
    return data
  }
  return { deleteTask }
}
