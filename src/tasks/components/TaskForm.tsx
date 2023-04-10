import { type SyntheticEvent, type FC } from 'react'
import { useForm } from '../../hooks'
import { useTasks } from '../hooks'
import { type Task } from '../interfaces'

interface TaskFormState {
  description: string
}

const initialTaskFormState: TaskFormState = {
  description: ''
}

export const TaskForm: FC = () => {
  const { description, handleChange, handleReset } = useForm<TaskFormState>(initialTaskFormState)
  const { addTask } = useTasks()

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const newTask: Task = {
      id: new Date().getTime(),
      description,
      completed: false,
      color: '#333'
    }

    addTask(newTask)

    handleReset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 bg-blue-200 p-4'
    >
      <label className='font-bold text-xl'>Description:</label>
      <textarea
        name='description'
        placeholder='Enter a Description'
        value={description}
        onChange={handleChange}
        rows={4}
        className='p-4 border border-black'
      />

      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-800 transition-colors text-lg text-white font-bold py-2'
      >
        Add Todo
      </button>
    </form>
  )
}
