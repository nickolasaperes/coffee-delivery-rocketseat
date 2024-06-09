import { CheckoutContainer } from "./styles";
import { AddressForm } from "./AddressForm";
import { PaymentMethod } from "./PaymentMethod";
import { OrderSummary } from "./OrderSummary";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentMethod />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderSummary />
      </div>
    </CheckoutContainer>
  )
}
