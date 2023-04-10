import { type FC, useReducer, useEffect } from 'react'

import { type TaskState, type Task } from '../interfaces'
import { TaskContext } from './TaskContext'
import { doAddTask, doRemoveTask, doToggleTask } from '../actions/actions'
import { taskReducer } from './taskReducer'
import { generateRelatedTaskStates } from '../helpers'

const init = (): TaskState => {
  const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') as string) ?? []

  return generateRelatedTaskStates(tasks)
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const TaskProvider: FC<Props> = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, null, init)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskState.tasks))
  }, [taskState])

  const addTask = (newTask: Task): void => {
    dispatch(doAddTask(newTask))
  }

  const toggleTask = (id: number): void => {
    dispatch(doToggleTask(id))
  }

  const removeTask = (id: number): void => {
    dispatch(doRemoveTask(id))
  }

  return (
    <TaskContext.Provider value={{
      taskState,
      toggleTask,
      addTask,
      removeTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}
