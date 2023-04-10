import { type FC } from 'react'
import { useTasks } from '../hooks'
import { TaskStat } from './TaskStat'

export const TaskStats: FC = () => {
  const { taskCount, completed, pending } = useTasks()

  return (
    <section className='p-4 flex flex-col gap-4 bg-yellow-200'>
      <h4 className='text-3xl font-bold text-center'>Tasks Stats:</h4>
      <TaskStat
        title='Amount Tasks:'
        content={String(taskCount)}
      />
      <TaskStat
        title='Amount Tasks Completed:'
        content={String(completed)}
      />
      <TaskStat
        title='Amount Tasks Pending:'
        content={String(pending)}
      />
    </section>
  )
}
