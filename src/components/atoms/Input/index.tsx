import React from 'react'
export interface InputFieldProps {
  field: any;
  placeholder: string;
  error?: string;
  validation: any
}
export const Input: React.FC<InputFieldProps> = ({ field, placeholder, error, validation }) => {
  return (
    <div className="relative">
      <input
        {...field}
        type="text"
        value={field.value || ""}
        placeholder={placeholder}
        className={` text-black  bg-transparent 
border-b-2 border-gray-300  focus:border-[#203C8F] max-lg:text-[16px] outline-none p-2 max-lg:w-[350px] w-[368px] ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

    </div>
  )
}

