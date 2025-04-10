import React from 'react'
import { taskFormData } from './taskForm.data'
import { InputForm } from '@/components/molecules/InputForm';
import { ITaskCreate } from '@/types/api/ITaskCreate';
import { useForm } from 'react-hook-form';
import { Buttons } from '@/components/atoms/Buttons';
import { useCreateTask } from '@/hooks/useTask';

export interface TaskFormProps {
  typeAction: "create" | "change"
  title?: string
  description?: string
  id: string


}
export const TaskForm: React.FC<TaskFormProps> = ({ typeAction, title, description, id }) => {
  const { createTask } = useCreateTask()
  const { control, handleSubmit, formState: { errors }, } = useForm<ITaskCreate>({
    defaultValues: {
      title: title,
      description: description
    }
  });
  const handleFormSubmit = (data: ITaskCreate) => {
    console.log(data)
    createTask(data, id, typeAction)
  }


  return (
    <form
      className="h-[100vw] flex items-center justify-center flex-col gap-[25px]"
      onSubmit={handleSubmit(handleFormSubmit)}>

      <InputForm control={control} inputsConfig={taskFormData} errors={errors} />

      <Buttons title='submit' type='submit' />
    </form>
  )
}
