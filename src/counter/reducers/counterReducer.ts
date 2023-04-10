import { CounterActionTypes, type CounterAction } from '../actions'
import { type CounterState } from '../interfaces'

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionTypes.reset: {
      return {
        changes: 0,
        counter: 0,
        previous: 0
      }
    }
    case CounterActionTypes.increaseBy: {
      const { changes, counter } = state
      const { payload } = action

      return {
        changes: changes + 1,
        counter: counter + payload.value,
        previous: counter
      }
    }
    default: {
      return state
    }
  }
}
