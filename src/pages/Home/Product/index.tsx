import { ShoppingCart } from "@phosphor-icons/react";
import { Badges, ButtonContainer, CounterContainer, Description, Footer, KartButton, Price, ProductContainer, Title } from "./styles";
import { ProductBadge } from "../ProductBadge";


interface Badge {
  id: string;
  text: string;
}

export interface ProductProps {
  id?: string;
  imgSrc: string;
  title: string;
  description: string;
  badges: Badge[];
  price: number;
  initialQuantity?: number;
}

export function Product({ imgSrc, title, description, badges, price, initialQuantity = 1}: ProductProps) {
  return (
        <ProductContainer>
          <img src={imgSrc} />
          <Badges>
            {badges.map((badge) => {
              return <ProductBadge description={badge.text} key={badge.id} />
            })}
          </Badges>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Footer>
            <Price><span>R$</span> <span>{price}</span></Price>
            <ButtonContainer>
              <CounterContainer>
                <button>-</button>
                <span>{initialQuantity}</span>
                <button>+</button>
              </CounterContainer>
              <KartButton><ShoppingCart size={20} weight="fill" /></KartButton>
            </ButtonContainer>
          </Footer>
        </ProductContainer>
  )
}
