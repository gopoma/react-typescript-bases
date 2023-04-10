import { type FC } from 'react'

interface Props {
  title: string
  content: string
}

export const TaskStat: FC<Props> = ({ title, content }) => {
  return (
    <section className='flex gap-4 text-xl'>
      <strong>{title}</strong>
      <span>{content}</span>
    </section>
  )
}
