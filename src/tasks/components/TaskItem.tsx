import { useState, type FC } from 'react'

import { type Task } from '../interfaces'
import { useTasks } from '../hooks'

interface Props {
  task: Task
}

export const TaskItem: FC<Props> = ({ task }) => {
  const { toggleTask, removeTask } = useTasks()
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const handleMouseOver = (): void => {
    setIsHovering(true)
  }

  const handleMouseOut = (): void => {
    setIsHovering(false)
  }

  const handleDelete = (): void => {
    removeTask(task.id)
  }

  return (
    <article
      onDoubleClick={() => { toggleTask(task.id) }}
      onMouseOver={() => { handleMouseOver() }}
      onMouseOut={() => { handleMouseOut() }}
      className='min-h-[13vh] text-white p-4 cursor-pointer select-none'
      style={{
        backgroundColor: task.color
      }}
    >
      <h3
        className={'py-2 text-xl flex justify-between'}
      >
        <span className={`${task.completed ? 'line-through' : 'font-bold'}`}>{task.description}</span>
        {
          (task.completed && isHovering) &&
          <button
            onClick={() => { handleDelete() }}
            className='bg-red-600 hover:bg-red-800 transition-colors p-2 rounded font-bold'
          >
            Delete
          </button>
        }
      </h3>
    </article>
  )
}
