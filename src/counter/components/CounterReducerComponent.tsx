import { type FC } from 'react'

import { useCounter } from '../hooks'

export const CounterReducerComponent: FC = () => {
  const {
    counter,
    counterState,
    handleReset,
    handleIncreasementBy
  } = useCounter()

  return (
    <>
      <h2>Counter Reducer: {counter}</h2>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => { handleReset() }}>Reset</button>
      <button onClick={() => { handleIncreasementBy(1) }}>+1</button>
      <button onClick={() => { handleIncreasementBy(5) }}>+5</button>
      <button onClick={() => { handleIncreasementBy(10) }}>+10</button>
    </>
  )
}
