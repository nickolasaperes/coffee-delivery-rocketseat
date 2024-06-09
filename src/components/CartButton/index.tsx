import { ShoppingCart } from "@phosphor-icons/react";
import { ItemCounter, CartContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function CartButton() {
  const { cartProducts } = useContext(CartContext);

  const itemsQuantity = cartProducts.length;

  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
      {itemsQuantity > 0 && <ItemCounter>{itemsQuantity}</ItemCounter>}
    </CartContainer>
  )
}
