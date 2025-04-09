import { InputConfig } from "@/types/InputConfig";

export const taskFormData: InputConfig[] = [
  {
    name: "title",
    type: "text",
    placeholder: "Enter title",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (value.trim() === "") {
          return "Title cannot be empty";
        }
        return true;
      },
    },
  },
  {
    name: "description",
    type: "textarea",
    placeholder: "Enter description",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (value.trim() === "") {
          return "Description cannot be empty";
        }
        return true;
      },
    },
  },

]
