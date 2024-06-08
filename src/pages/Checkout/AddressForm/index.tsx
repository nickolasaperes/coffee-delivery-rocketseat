import { MapPinLine } from "@phosphor-icons/react";
import { AddressContainer, BairroInput, CidadeInput, ComplementoInput, Description, NumeroInput, RuaInput, TextInput, UfInput } from "./styles";

export function AddressForm() {
  return (
    <AddressContainer>
      <Description>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </Description>
      <form>
        <p><TextInput type="text" placeholder="CEP" /></p>
        <p><RuaInput type="text" placeholder="Rua" /></p>
        <p>
          <NumeroInput type="text" placeholder="Número" />
          <ComplementoInput type="text" placeholder="Complemento" />
        </p>
        <p>
          <BairroInput type="text" placeholder="Bairro" />
          <CidadeInput type="text" placeholder="Cidade" />
          <UfInput type="text" placeholder="UF" />
        </p>
      </form>
    </AddressContainer>
  )
}
