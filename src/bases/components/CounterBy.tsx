import { type FC, useState } from 'react'

interface Props {
  initialValue?: number
}

interface CounterState {
  counter: number
  clicks: number
}

export const CounterBy: FC<Props> = ({ initialValue = 5 }) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  })

  const handleClick = (accumulator: number): void => {
    setCounterState(({ counter, clicks }: CounterState) => ({
      counter: counter + accumulator,
      clicks: clicks + 1
    }))
  }

  const { counter, clicks } = counterState

  return (
    <>
      <h2>CounterBy: {counter}</h2>
      <h2>Clicks: {clicks}</h2>

      <button onClick={() => { handleClick(1) }}>+1</button>
      <button onClick={() => { handleClick(5) }}>+5</button>
    </>
  )
}
