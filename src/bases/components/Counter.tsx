import { type FC, useState } from 'react'

interface Props {
  initialValue?: number
}

export const Counter: FC<Props> = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState<number>(initialValue)

  const handleClick = (): void => {
    setCounter((prev) => prev + 1)
  }

  return (
    <>
      <h2>Counter {counter}</h2>

      <button
        onClick={() => { handleClick() }}
      >
          +1
      </button>
    </>
  )
}
