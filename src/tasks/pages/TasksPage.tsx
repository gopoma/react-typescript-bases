import { TaskForm, TaskList, TaskStats } from '../components'

export default function TasksPage (): JSX.Element {
  return (
    <section className='max-w-xl m-auto'>
      <h1 className='text-4xl font-bold text-center py-4'>Tasks</h1>

      <TaskForm />

      <TaskStats />

      <TaskList />
    </section>
  )
}
