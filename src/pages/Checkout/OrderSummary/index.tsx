import { ButtonsContainer, ConfirmButton, Item, ItemDescription, OrderSummaryContainer, PriceDescription, PriceSummary, PriceTotal, Products, RemoveButton } from "./styles";
import americano from '../../../assets/americano.svg';
import { CounterButton } from "../../../components/CounterButton";
import { Trash } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function OrderSummary() {
  return (
    <OrderSummaryContainer>
      {/* Products */}
      <Products>
        {/* Item */}
        <Item>
          <img src={americano} />
          <div>
            <ItemDescription><span>Expresso Tradicional</span><span>R$ 9,90</span></ItemDescription>
            <ButtonsContainer>
              <CounterButton initialQuantity={1} />
              <RemoveButton><Trash size={16} />REMOVER</RemoveButton>
            </ButtonsContainer>
          </div>
        </Item>
        <Item>
          <img src={americano} />
          <div>
            <ItemDescription><span>Expresso Tradicional</span><span>R$ 9,90</span></ItemDescription>
            <ButtonsContainer>
              <CounterButton initialQuantity={1} />
              <RemoveButton><Trash size={16} />REMOVER</RemoveButton>
            </ButtonsContainer>
          </div>
        </Item>
      </Products>

      {/* Price summary */}
      <PriceSummary>
        <PriceDescription><span>Total de itens</span><span>R$ 29,70</span></PriceDescription>
        <PriceDescription><span>Entrega</span><span>R$ 3,50</span></PriceDescription>
        <PriceTotal><span>Total</span><span>R$ 33,20</span></PriceTotal>
      </PriceSummary>

      <NavLink to="/success" title="Checkout Success"><ConfirmButton>Confirmar Pedido</ConfirmButton></NavLink>
    </OrderSummaryContainer>
  )
}
