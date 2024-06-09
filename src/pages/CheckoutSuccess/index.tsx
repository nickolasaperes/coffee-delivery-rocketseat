import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { CheckoutSuccessContainer, IllustrationContainer, InfoIcon, OrderDetails, OrderInformation, Subtitle, TextContainer, Title } from "./styles";
import illustration from '../../assets/checkout-illustration.svg';

export function CheckoutSuccess() {
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
              <div>Entrega em <b>Rua João Daniel Martinelli, 102</b></div>
              <div>Farrapos - Porto Alegre, RS</div>
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
              <div><b>Cartão de crédito</b></div>
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
