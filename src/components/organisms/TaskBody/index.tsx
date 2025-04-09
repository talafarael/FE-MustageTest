import { CardTask } from '@/components/CardTask'
import { useUserStore } from '@/store/userStore'
import React from 'react'

export const TaskBody = () => {
  const { user, isLoading } = useUserStore()
  if (isLoading) return <div>isLoading</div>
  return (
    <div className="">
      {user?.tasks.map((elem, index) => (
        <CardTask key={index} data={elem} />
      )
      )}
    </div>
  )
}
