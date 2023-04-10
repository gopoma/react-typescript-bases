import { useReducer, type FC } from 'react'

interface CounterState {
  changes: number
  counter: number
  previous: number
}

const INITIAL_COUNTER_STATE: CounterState = {
  changes: 10,
  counter: 10,
  previous: 10
}

type CounterAction =
  | { type: 'reset' }
  | { type: 'increaseBy', payload: { value: number } }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'reset': {
      return {
        changes: 0,
        counter: 0,
        previous: 0
      }
    }
    case 'increaseBy': {
      const { changes, counter } = state
      const { payload } = action

      return {
        changes: changes + 1,
        counter: counter + payload.value,
        previous: counter
      }
    }
  }
}

export const CounterReducerComponent: FC = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_COUNTER_STATE)

  const reset = (): void => {
    const action: CounterAction = { type: 'reset' }

    dispatch(action)
  }

  const increaseBy = (value: number): void => {
    const action: CounterAction = {
      type: 'increaseBy',
      payload: { value }
    }

    dispatch(action)
  }

  const handleReset = (): void => {
    reset()
  }

  const handleIncreasement = (value: number): void => {
    increaseBy(value)
  }

  const { counter } = counterState

  return (
    <>
      <h2>Counter Reducer: {counter}</h2>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => { handleReset() }}>Reset</button>
      <button onClick={() => { handleIncreasement(1) }}>+1</button>
      <button onClick={() => { handleIncreasement(5) }}>+5</button>
      <button onClick={() => { handleIncreasement(10) }}>+10</button>
    </>
  )
}
