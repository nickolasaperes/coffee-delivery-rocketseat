import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { Description, Label, MethodsContainer, PaymentMethodContainer, RadioInput } from "./styles";

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <Description>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </Description>

      <form>
        <MethodsContainer>
          <RadioInput type="radio" name="payment-method" id="credito" value="Cartão de Crédito" />
          <Label htmlFor="credito"><CreditCard size={16} />Cartão de Crédito</Label>
          <RadioInput type="radio" name="payment-method" id="debito" value="Cartão de Débito" />
          <Label htmlFor="debito"><Bank size={16} />Cartão de Débito</Label>
          <RadioInput type="radio" name="payment-method" id="dinheiro" value="Dinheiro" />
          <Label htmlFor="dinheiro"><Money size={16} />Dinheiro</Label>
        </MethodsContainer>
      </form>

    </PaymentMethodContainer>
  )
}
