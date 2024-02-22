import { useState } from "react"

export const useCounter = (initialValue = 1) => {
  const [ counter, setCounter ] = useState( initialValue );

  const decrement = (value = 1) => {
    setCounter( (current) => current - value );
  }
  
  // the current value is passed as an argument to the function and take the value of the current state
  const increment = (value = 1) => {
    setCounter( (current) => current + value );
  }

  const reset = () => {
    setCounter( initialValue );
  }


  return {
    counter,
    decrement,
    increment,
    reset,
  }
}