import { useState } from "react";
import { CounterContainer } from "./styles";

interface CounterButtonProps {
  initialQuantity: number;
  onIncreaseFn?: (quantity: number) => void;
  onDecreaseFn?: (quantity: number) => void;
}

export function CounterButton({ initialQuantity, onIncreaseFn, onDecreaseFn }: CounterButtonProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increase() {
    setQuantity((state) => state + 1)
    if(onIncreaseFn) onIncreaseFn(quantity + 1);
  }

  function decrease() {
    setQuantity((state) => {
      if (state - 1 <= 0) return 0;
      return state - 1;
    })
    if(onDecreaseFn) onDecreaseFn(quantity - 1);
  }

  return (
    <CounterContainer>
      <button onClick={decrease}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </CounterContainer>
  )
}
