import { Input } from '@/components/atoms/Input';
import { InputConfig } from '@/types/InputConfig';
import React from 'react'
import { Controller } from "react-hook-form";


interface InputFormProps {
  inputsConfig: InputConfig[];
  control: any;
  errors: any;

}
export const InputForm: React.FC<InputFormProps> = ({ inputsConfig, control, errors }) => {
  return (
    <div>
      {inputsConfig?.map((elem: any, index: number) => (
        <div key={index}>
          <Controller
            name={elem?.name}
            control={control}
            rules={elem?.validation}
            render={({ field }) => (
              <Input
                field={field}
                placeholder={elem?.placeholder}
                error={errors[elem?.name]?.message}
                validation={elem?.validation}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};
