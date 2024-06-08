import { AddressContainer, CheckoutContainer, KartContainer } from "./styles";
import { AddressForm } from "./AddressForm";
import { PaymentMethod } from "./PaymentMethod";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentMethod />
      </AddressContainer>
      <KartContainer>
        <h2>Cafés selecionados</h2>
      </KartContainer>
    </CheckoutContainer>
  )
}
