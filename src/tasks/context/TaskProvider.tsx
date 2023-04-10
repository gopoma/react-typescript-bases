import { type FC, useReducer, useEffect } from 'react'

import { type TaskState, type Task } from '../interfaces'
import { TaskContext } from './TaskContext'
import { doAddTask, doToggleTask } from '../actions/actions'
import { taskReducer } from './taskReducer'

const init = (): TaskState => {
  const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') as string) ?? []

  return {
    tasks,
    taskCount: tasks.length,
    completed: tasks.filter((task: Task) => task.completed).length,
    pending: tasks.filter((task: Task) => !task.completed).length
  }
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

  return (
    <TaskContext.Provider value={{
      taskState,
      toggleTask,
      addTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}
