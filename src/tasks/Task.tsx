import { TaskProvider } from './context/TaskProvider'
import { TasksPage } from './pages'

export default function Task (): JSX.Element {
  return (
    <TaskProvider>
      <TasksPage />
    </TaskProvider>
  )
}
