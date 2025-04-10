import { useGetTaskQuery } from '@/api/taskApi/getTask'
import { CardTask } from '@/components/CardTask'

export const TaskBody = () => {
  const { data } = useGetTaskQuery()
  return (
    <div className="w-[99vw] items-center justify-center flex flex-wrap gap-[25px]">
      {data?.data?.map((elem, index) => (
        <CardTask key={index} data={elem} />
      )
      )}
    </div>
  )
}
