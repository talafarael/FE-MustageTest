import React from 'react'
export interface InputFieldProps {
  field: any;
  placeholder: string;
  error?: string;
  validation: any
}
export const Input: React.FC<InputFieldProps> = ({ field, placeholder, error }) => {
  return (
    <div className="relative">
      <input
        {...field}
        type="text"
        value={field.value || ""}
        placeholder={placeholder}
        className={` 
  h-[45px] max-lg:h-[10px]
 ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

    </div>
  )
}

