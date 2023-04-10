import { type ChangeEvent, useState } from 'react'

// eslint-disable-next-line
export const useForm = <T extends Object>(initialFormState: T) => {
  const [formState, setFormState] = useState<T>(initialFormState)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleReset = (): void => {
    setFormState(initialFormState)
  }

  return {
    ...formState,
    formState,
    handleChange,
    handleReset
  }
}
