import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { CheckoutSuccessContainer, IllustrationContainer, InfoIcon, OrderDetails, OrderInformation, Subtitle, TextContainer, Title } from "./styles";
import illustration from '../../assets/checkout-illustration.svg';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CheckoutSuccess() {
  const { address, paymentMethod } = useContext(CartContext);

  return (
    <CheckoutSuccessContainer>
      <div>
        <TextContainer>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
        </TextContainer>

        <OrderDetails>
          <OrderInformation>
            <InfoIcon color="purple"><MapPin size={16} weight="fill" /></InfoIcon>
            <div>
              <div>Entrega em <b>{`${address.street}, ${address.number}`}</b></div>
              <div>{`${address.neighborhood} - ${address.city}, ${address.uf}`}</div>
            </div>
          </OrderInformation>
          <OrderInformation>
            <InfoIcon color="yellow"><Timer size={16} weight="fill" /></InfoIcon>
            <div>
              <div>Previsão de entrega</div>
              <div><b>20 min - 30 min</b></div>
            </div>
          </OrderInformation>
          <OrderInformation>
            <InfoIcon color="yellow-dark"><CurrencyDollar size={16} /></InfoIcon>
            <div>
              <div>Pagamento na entrega</div>
              <div><b>{paymentMethod?.description}</b></div>
            </div>
          </OrderInformation>
        </OrderDetails>
      </div>

      <IllustrationContainer>
        <img src={illustration}/>
      </IllustrationContainer>
    </CheckoutSuccessContainer>
  )
}
