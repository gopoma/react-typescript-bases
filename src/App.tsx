import {
  Counter,
  CounterBy,
  CounterEffect,
  CounterHook
} from './bases'

import { CounterReducerComponent } from './counter/components'

export default function App (): JSX.Element {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter initialValue={15} />
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <CounterEffect />
      <hr />
      <CounterHook />
      <CounterHook />
      <hr />
      <CounterReducerComponent />
    </>
  )
}
