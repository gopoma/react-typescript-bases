import { type Task } from '.'

export interface TaskState {
  taskCount: number
  tasks: Task[]
  completed: number
  pending: number
}
