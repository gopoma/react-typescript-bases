import { type FC } from 'react'
import { useCounter } from '../hooks'

export const CounterHook: FC = () => {
  const { counter, counterElement, handleClick } = useCounter({ maximumCount: 16 })

  return (
    <>
      <h2>Counter</h2>
      <h3 ref={counterElement}>{counter}</h3>

      <button onClick={() => { handleClick() }}>+1</button>
    </>
  )
}
