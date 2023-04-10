import { type FC } from 'react'

import { type Task } from '../interfaces'
import { useTasks } from '../hooks'

interface Props {
  task: Task
}

export const TaskItem: FC<Props> = ({ task }) => {
  const { toggleTask } = useTasks()

  return (
    <article
      onDoubleClick={() => { toggleTask(task.id) }}
      className='text-white p-4 cursor-pointer select-none'
      style={{ backgroundColor: task.color }}
    >
      <h3
        className={`py-2 text-xl ${task.completed ? 'line-through' : 'font-bold'}`}
      >
        {task.description}
      </h3>
    </article>
  )
}
