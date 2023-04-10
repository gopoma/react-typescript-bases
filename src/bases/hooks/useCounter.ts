import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// eslint-disable-next-line
export const useCounter = ({ maximumCount = 10 }) => {
  const [counter, setCounter] = useState<number>(0)
  const counterElement = useRef<HTMLHeadingElement>(null)

  const tl = useRef(gsap.timeline())

  const handleClick = (): void => {
    (counter < maximumCount) && setCounter((prev) => prev + 1)
  }

  // Ejecutar después de la carga efectiva del HTML
  useLayoutEffect(() => {
    tl.current
      .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 10, duration: 1, ease: 'bounce.out' })
      .pause()
  }, [])

  useEffect(() => {
    tl.current.play(0)
  }, [counter])

  return {
    counter,
    counterElement,
    handleClick
  }
}
