import { type FC, useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const MAXIMUM_COUNT = 10

export const CounterEffect: FC = () => {
  const [counter, setCounter] = useState<number>(0)
  const counterElement = useRef<HTMLHeadingElement>(null)

  const handleClick = (): void => {
    (counter < MAXIMUM_COUNT) && setCounter((prev) => prev + 1)
  }

  // Ejecutar después de la carga efectiva del HTML
  useLayoutEffect(() => {
    if (counter < MAXIMUM_COUNT) return

    console.log('%cSe llegó al valor máximo', 'color: #F00; background-color: #000')

    const tl = gsap.timeline()

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 10, duration: 1, ease: 'bounce.out' })
  }, [counter])

  return (
    <>
      <h2>Counter</h2>
      <h3 ref={counterElement}>{counter}</h3>

      <button onClick={() => { handleClick() }}>+1</button>
    </>
  )
}
