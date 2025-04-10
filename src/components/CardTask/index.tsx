import { ITask } from '@/types/api/IUser'
import { Text, CheckboxCards } from '@radix-ui/themes'
import { WindowModal } from '../organisms/ModalWindow'
import { Button } from '../ui/button'
import { Buttons } from '../atoms/Buttons'
import { useDeleteTask } from '@/hooks/useTask'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useChangeCompleteMutation } from '@/api/taskApi/createTask'
export interface CardTaskProps {
  data: ITask
}

export const CardTask: React.FC<CardTaskProps> = ({ data }) => {
  const { deleteTask } = useDeleteTask()
  const changeCompleteMutation = useChangeCompleteMutation()

  const handlerDeleteTask = () => {
    deleteTask(data.id)
  }

  const handleCheckedChange = () => {
    changeCompleteMutation.mutateAsync(data.id)
  };
  return (
    <div className='w-[250px] h-[200px] bg-[white] flex flex-col gap-[12px] justify-center items-start p-[12px]'>
      <Text weight="bold">{data.title}</Text>
      <Text>{data.description}</Text>
      <Checkbox.Root
        checked={data.isComplete}
        onCheckedChange={handleCheckedChange}
        style={{
          all: 'unset',
          backgroundColor: 'white',
          width: 20,
          height: 20,
          borderRadius: 4,
          border: '2px solid #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className=''>
        <WindowModal typeAction='change' titleButton='change' title={data?.title} description={data?.description} id={data?.id} />
        <Buttons handler={handlerDeleteTask} title="Delete task" />

      </div>
    </div>

  )
}
