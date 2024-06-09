import { MapPinLine } from "@phosphor-icons/react";
import { AddressContainer, BairroInput, CidadeInput, ComplementoInput, Description, FormContainer, FormErrors, NumeroInput, RuaInput, TextInput, UfInput } from "./styles";
import { useFormContext } from "react-hook-form";

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  function getInputClassName(inputName: string) {
    return errors[inputName]?.message ? "error" : '';
  }

  return (
    <AddressContainer>
      <Description>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <FormErrors>
            {errors.uf?.message && <span>{`${errors.uf.message}`}</span>}
          </FormErrors>
        </div>
      </Description>
      <FormContainer>
        <p><TextInput type="text" placeholder="CEP" {...register('cep')} className={getInputClassName('cep')} /></p>
        <p><RuaInput type="text" placeholder="Rua" {...register('street')} className={getInputClassName('street')} /></p>
        <p>
          <NumeroInput type="text" placeholder="Número" {...register('number')} className={getInputClassName('number')} />
          <ComplementoInput type="text" placeholder="Complemento" {...register('complement')} className={getInputClassName('complement')} />
        </p>
        <p>
          <BairroInput type="text" placeholder="Bairro" {...register('neighborhood')} className={getInputClassName('neighborhood')} />
          <CidadeInput type="text" placeholder="Cidade" {...register('city')} className={getInputClassName('city')} />
          <UfInput type="text" placeholder="UF" {...register('uf')} />
        </p>
      </FormContainer>
    </AddressContainer>
  )
}
