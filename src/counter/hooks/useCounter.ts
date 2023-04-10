import { useReducer } from 'react'

import * as CounterActions from '../actions'
import { type CounterState } from '../interfaces'
import { counterReducer } from '../reducers'

const INITIAL_COUNTER_STATE: CounterState = {
  changes: 10,
  counter: 10,
  previous: 10
}

// eslint-disable-next-line
export const useCounter = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_COUNTER_STATE)

  const handleReset = (): void => {
    dispatch(CounterActions.doReset())
  }

  const handleIncreasementBy = (value: number): void => {
    dispatch(CounterActions.doIncreaseBy(value))
  }

  return {
    ...counterState,
    counterState,
    handleReset,
    handleIncreasementBy
  }
}
