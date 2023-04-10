import { type Task } from '../interfaces'

export enum TaskActionTypes {
  addTask = '[Task] Add Task',
  toggleTask = '[Task] Toggle Task'
}

export type TaskAction =
  | { type: TaskActionTypes.addTask, payload: { newTask: Task } }
  | { type: TaskActionTypes.toggleTask, payload: { id: number } }

export const doAddTask = (newTask: Task): TaskAction => {
  return {
    type: TaskActionTypes.addTask,
    payload: { newTask }
  }
}

export const doToggleTask = (id: number): TaskAction => {
  return {
    type: TaskActionTypes.toggleTask,
    payload: { id }
  }
}
