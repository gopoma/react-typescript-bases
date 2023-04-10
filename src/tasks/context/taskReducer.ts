import { TaskActionTypes, type TaskAction } from '../actions/actions'
import { generateRelatedTaskStates } from '../helpers'
import { type Task, type TaskState } from '../interfaces'

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.addTask: {
      const { tasks } = state
      const { newTask } = action.payload

      const tasksWithNewOne = [newTask, ...tasks]

      return generateRelatedTaskStates(tasksWithNewOne)
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

      return generateRelatedTaskStates(tasksWithEditedOne)
    }
    case TaskActionTypes.removeTask: {
      const { tasks } = state
      const { id } = action.payload

      const tasksWithoutTargetOne = tasks.filter((task) => task.id !== id)

      return generateRelatedTaskStates(tasksWithoutTargetOne)
    }
    default: {
      return state
    }
  }
}
