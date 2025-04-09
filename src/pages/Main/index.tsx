import { TaskBody } from '@/components/organisms/TaskBody'
import { useGetUser } from '@/hooks/user'
import React from 'react'

export const Main = () => {
  useGetUser()
  return (
    <div >
      <TaskBody />
    </div>
  )
}
