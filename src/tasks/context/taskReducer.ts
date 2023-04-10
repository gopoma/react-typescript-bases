import { TaskActionTypes, type TaskAction } from '../actions/actions'
import { type Task, type TaskState } from '../interfaces'

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.addTask: {
      const { tasks } = state
      const { newTask } = action.payload

      const tasksWithNewOne = [newTask, ...tasks]

      return {
        ...state,
        tasks: tasksWithNewOne,
        taskCount: tasksWithNewOne.length
      }
    }
    case TaskActionTypes.toggleTask: {
      const { tasks } = state
      const { id } = action.payload

      const tasksWithEditedOne: Task[] = tasks.map((task: Task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }

        return task
      })

      return {
        tasks: tasksWithEditedOne,
        taskCount: tasksWithEditedOne.length,
        completed: tasksWithEditedOne.filter((task) => task.completed).length,
        pending: tasksWithEditedOne.filter((task) => !task.completed).length
      }
    }
    default: {
      return state
    }
  }
}
