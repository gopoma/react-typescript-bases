export enum CounterActionTypes {
  reset = 'reset',
  increaseBy = 'increaseBy'
}

export type CounterAction =
  | { type: CounterActionTypes.reset }
  | { type: CounterActionTypes.increaseBy, payload: { value: number } }

export const doReset = (): CounterAction => ({
  type: CounterActionTypes.reset
})

export const doIncreaseBy = (value: number): CounterAction => ({
  type: CounterActionTypes.increaseBy,
  payload: { value }
})
