import { CheckoutContainer } from "./styles";
import { AddressForm } from "./AddressForm";
import { PaymentMethod } from "./PaymentMethod";
import { OrderSummary } from "./OrderSummary";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutFormValidationSchema = z.object({
  cep: z.string().min(1),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().min(2, "UF deve ter 2 caracteres").max(2, "UF deve ter 2 caracteres"),
  paymentMethod: z.string().min(1, "Selecione uma forma de pagamento"),
})

export type CheckoutFormData = z.infer<typeof CheckoutFormValidationSchema>

export function Checkout() {
  const { updateAddress } = useContext(CartContext);
  const navigate = useNavigate();

  const addressForm = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  })

  const {
    handleSubmit,
    reset,
  } = addressForm;

  function handleAssignAddress(data: CheckoutFormData) {
    updateAddress(data);
    reset();
    navigate("/success");
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleAssignAddress)}>
      <FormProvider {...addressForm}>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressForm />
          <PaymentMethod />
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <OrderSummary />
        </div>
      </FormProvider>
    </CheckoutContainer>
  )
}
