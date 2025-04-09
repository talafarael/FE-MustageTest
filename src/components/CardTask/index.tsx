import { ITask } from '@/types/api/IUser'
import { Card, Flex, Text, CheckboxCards } from '@radix-ui/themes'
import { WindowModal } from '../organisms/ModalWindow'
import { Button } from '../ui/button'
import { Buttons } from '../atoms/Buttons'
import { useDeleteTask } from '@/hooks/useTask'


export interface CardTaskProps {
  data: ITask
}

export const CardTask: React.FC<CardTaskProps> = ({ data }) => {
  const { deleteTask } = useDeleteTask()
  const handlerDeleteTask = () => {
    deleteTask(data.id)
  }
  return (
    <div className='w-[200px] h-[100px] bg-[rgba(0, 0, 0, 0.8)]'>
      <Flex direction="column" className='h-[300px] min-w-[300px] flex gap-[20px] justify-between items-center'>
        <Text weight="bold">{data.title}</Text>
        <Text>{data.description}</Text>
        <div className='w-[100px] h-[100px]'>
          <WindowModal typeAction='change' titleButton='change' title={data?.title} description={data?.description} id={data?.id} />
        </div>

        <Buttons handler={handlerDeleteTask} title="Delete task" />
      </Flex>
    </div>
  )
}
