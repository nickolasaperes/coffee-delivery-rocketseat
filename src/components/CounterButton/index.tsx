import { useState } from "react";
import { CounterContainer } from "./styles";

interface CounterButtonProps {
  initialQuantity: number;
}

export function CounterButton({ initialQuantity }: CounterButtonProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increase() {
    setQuantity((state) => state + 1)
  }

  function decrease() {
    setQuantity((state) => {
      if (state - 1 <= 0) return 0;
      return state - 1;
    })
  }

  return (
    <CounterContainer>
      <button onClick={decrease}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </CounterContainer>
  )
}
