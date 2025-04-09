import { InputConfig } from "@/types/InputConfig";

export const authFormData: InputConfig[] = [
  {
    name: "email",
    type: "text",
    placeholder: "email",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        // Проверка, что строка выглядит как email
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Please enter a valid email address";
        }
        return true;
      },
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        // Проверка на длину пароля и наличие хотя бы одной цифры
        if (value.length < 8) {
          return "Password must be at least 8 characters long";
        }
        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }
        return true;
      },
    },
  },

]
