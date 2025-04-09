import { InputForm } from "@/components/molecules/InputForm";
import { Dialog, Text, Button } from "@radix-ui/themes";
import { TaskForm } from "../TaskForm";

export interface WindowModalProps {
  typeAction: "create" | "change"
  title?: string
  description?: string
  id?: string
  titleButton: string
}
export const WindowModal: React.FC<WindowModalProps> = ({ typeAction, title, description, id = "", titleButton }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger >
        <Button>Click me</Button>
      </Dialog.Trigger>
      <Dialog.Content className="max-w-[300px] p-4">
        <TaskForm id={id} typeAction={typeAction} title={title} description={description} />
      </Dialog.Content>
    </Dialog.Root>
  );
};
