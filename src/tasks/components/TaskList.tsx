import { type FC } from 'react'

import { type Task } from '../interfaces'
import { TaskItem } from './'
import { useTasks } from '../hooks'

export const TaskList: FC = () => {
  const { tasks } = useTasks()

  return (
    <section className='flex flex-col gap-4 bg-slate-200 p-4'>
      {
        tasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
      }
    </section>
  )
}
