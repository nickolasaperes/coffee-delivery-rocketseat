import { ShoppingCart } from "@phosphor-icons/react";
import { ItemCounter, CartContainer } from "./styles";

interface CartButtonProps {
  itemsCounter?: number;
}

export function CartButton({ itemsCounter = 0 }: CartButtonProps) {
  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
      {itemsCounter > 0 && <ItemCounter>{itemsCounter}</ItemCounter>}
    </CartContainer>
  )
}
