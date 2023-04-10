import { type TaskState, type Task } from '../interfaces'

export const generateRelatedTaskStates = (tasks: Task[]): TaskState => ({
  tasks,
  taskCount: tasks.length,
  completed: tasks.filter((task) => task.completed).length,
  pending: tasks.filter((task) => !task.completed).length
})
