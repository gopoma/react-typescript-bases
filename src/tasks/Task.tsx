import { TaskProvider } from './context/TaskProvider'
import { TasksPage } from './pages'

const foo = 'bar'

export default function Task (): JSX.Element {
  return (
    <TaskProvider>
      <TasksPage />
    </TaskProvider>
  )
}
