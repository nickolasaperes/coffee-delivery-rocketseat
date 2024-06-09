import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { Description, FormErrors, Label, MethodsContainer, PaymentMethodContainer, RadioInput } from "./styles";
import { useFormContext } from "react-hook-form";

export function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const formErrors = errors.paymentMethod?.message;

  return (
    <PaymentMethodContainer>
      <Description>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          <FormErrors>
            {formErrors && <span>{`${formErrors}`}</span>}
          </FormErrors>
        </div>
      </Description>

      <div>
        <MethodsContainer>
          <RadioInput type="radio" id="credito" value="credit-card" {...register('paymentMethod')} className={formErrors ? 'error' : ''} />
          <Label htmlFor="credito"><CreditCard size={16} />Cartão de Crédito</Label>
          <RadioInput type="radio" id="debito" value="debit-card" {...register('paymentMethod')} className={formErrors ? 'error' : ''} />
          <Label htmlFor="debito"><Bank size={16} />Cartão de Débito</Label>
          <RadioInput type="radio" id="dinheiro" value="money" {...register('paymentMethod')} className={formErrors ? 'error' : ''} />
          <Label htmlFor="dinheiro"><Money size={16} />Dinheiro</Label>
        </MethodsContainer>
      </div>

    </PaymentMethodContainer>
  )
}
