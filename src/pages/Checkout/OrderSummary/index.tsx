import { ButtonsContainer, ConfirmButton, EmptyCartMessage, Item, ItemDescription, OrderSummaryContainer, PriceDescription, PriceSummary, PriceTotal, Products, RemoveButton } from "./styles";
import { CounterButton } from "../../../components/CounterButton";
import { Trash } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

export function OrderSummary() {
  const {
    cartProducts,
    deliveryPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct
  } = useContext(CartContext);

  const totalProductsPrice = cartProducts.reduce((acc, product) => {
    return acc + (product.quantity * product.price);
  }, 0);

  const totalPrice = totalProductsPrice + (deliveryPrice ?? 0);

  return (
    <OrderSummaryContainer>
      <Products>
        {cartProducts.length === 0 ?
          <EmptyCartMessage>Nenhum produto no carrinho</EmptyCartMessage>
          :
          cartProducts.map((product) => {
            return (
              <Item key={product.id}>
                <img src={product.imgSrc} />
                <div>
                  <ItemDescription><span>{product.title}</span><span>R$ {(product.price * product.quantity).toFixed(2)}</span></ItemDescription>
                  <ButtonsContainer>
                    <CounterButton
                      initialQuantity={product.quantity}
                      onIncreaseFn={() => increaseProductQuantity(product.id)}
                      onDecreaseFn={() => decreaseProductQuantity(product.id)}
                    />
                    <RemoveButton onClick={() => removeProduct(product.id)}><Trash size={16} />REMOVER</RemoveButton>
                  </ButtonsContainer>
                </div>
              </Item>
            )
          })
        }
      </Products>

      <PriceSummary>
        <PriceDescription>
          <span>Total de itens</span>
          <span>R$ {totalProductsPrice.toFixed(2)}</span>
        </PriceDescription>
        <PriceDescription>
          <span>Entrega</span>
          <span>
            {deliveryPrice ? `R$ ${deliveryPrice.toFixed(2)}` : 'Indisponível'}
          </span>
        </PriceDescription>
        <PriceTotal><span>Total</span><span>R$ {totalPrice.toFixed(2)}</span></PriceTotal>
      </PriceSummary>

      <ConfirmButton type="submit" disabled={cartProducts.length === 0}>Confirmar Pedido</ConfirmButton>
    </OrderSummaryContainer>
  )
}
