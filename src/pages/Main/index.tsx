import { TaskBody } from '@/components/organisms/TaskBody'
import { useGetUser } from '@/hooks/user'

export const Main = () => {
  useGetUser()
  return (
    <div >
      <TaskBody />
    </div>
  )
}
