import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

// eslint-disable-next-line
export const useTasks = () => {
  const { taskState, addTask, toggleTask } = useContext(TaskContext)

  return {
    ...taskState,
    taskState,
    addTask,
    toggleTask
  }
}
