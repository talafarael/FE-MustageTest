import React from 'react'
import { authFormData } from './authForm.data';
import { InputForm } from '@/components/molecules/InputForm';
import { useForm } from 'react-hook-form';
import { InputConfig } from '@/types/InputConfig';
import { IUserCreate } from '@/types/api/IUserCreate';

export interface AuthFormProps {
  typeAuth: "login" | "registartion"
}
export const AuthForm: React.FC<AuthFormProps> = ({ typeAuth }) => {
  const { control, handleSubmit, formState: { errors }, } = useForm<IUserCreate>();
  const handleFormSubmit = (data: IUserCreate) => {
    console.log(data)
  }

  return (
    <form className="w-full max-[450px]:w-[auto] flex flex-col  justify-center items-center" onSubmit={handleSubmit(handleFormSubmit)}>
      <InputForm control={control} inputsConfig={authFormData} errors={errors} />
      <button type="submit">Set Value</button>

    </form>
  )
}
