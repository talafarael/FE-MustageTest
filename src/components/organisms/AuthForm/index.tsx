import React from 'react'
import { authFormData } from './authForm.data';
import { InputForm } from '@/components/molecules/InputForm';
import { useForm } from 'react-hook-form';
import { IUserCreate } from '@/types/api/IUserCreate';
import { useAuth } from '@/hooks/useAuth';

export interface AuthFormProps {
  typeAuth: "login" | "registration"
}
export const AuthForm: React.FC<AuthFormProps> = ({ typeAuth }) => {
  const { control, handleSubmit, formState: { errors }, } = useForm<IUserCreate>();
  const { auth } = useAuth()
  const handleFormSubmit = (data: IUserCreate) => {
    auth(data, typeAuth)
  }

  return (
    <form
      className="h-[100vw] flex items-center justify-center flex-col gap-[25px]"
      onSubmit={handleSubmit(handleFormSubmit)}>
      <InputForm control={control} inputsConfig={authFormData} errors={errors} />
      <button type="submit">Set Value</button>

    </form>
  )
}
