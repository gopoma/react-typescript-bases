import { createContext } from 'react'
import { type Task, type TaskState } from '../interfaces'

interface TaskContextProps {
  taskState: TaskState
  addTask: (newTask: Task) => void
  toggleTask: (id: number) => void
}

export const TaskContext = createContext<TaskContextProps>({} as any)
