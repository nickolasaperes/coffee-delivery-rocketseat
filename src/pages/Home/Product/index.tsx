import { ShoppingCart } from "@phosphor-icons/react";
import { Badges, ButtonContainer, Description, Footer, CartButton, Price, ProductContainer, Title } from "./styles";
import { ProductBadge } from "../ProductBadge";
import { CounterButton } from "../../../components/CounterButton";
import { ProductCartType } from "../../../reducers/cart/reducer";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";


interface Badge {
  id: string;
  text: string;
}

export interface ProductType {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  badges: Badge[];
  price: number;
}

export interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  const [productQuantity, setProductQuantity] = useState(1);

  const cartProduct: ProductCartType = {
    ...product,
    quantity: productQuantity
  }

  const { addProduct } = useContext(CartContext);
  return (
        <ProductContainer>
          <img src={product.imgSrc} />
          <Badges>
            {product.badges.map((badge) => {
              return <ProductBadge description={badge.text} key={badge.id} />
            })}
          </Badges>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Footer>
            <Price><span>R$</span> <span>{product.price}</span></Price>
            <ButtonContainer>
              <CounterButton
                initialQuantity={productQuantity}
                onIncreaseFn={(quantity: number) => setProductQuantity(quantity)}
                onDecreaseFn={(quantity: number) => setProductQuantity(quantity)}
              />
              <CartButton onClick={() => addProduct(cartProduct)}><ShoppingCart size={20} weight="fill" /></CartButton>
            </ButtonContainer>
          </Footer>
        </ProductContainer>
  )
}
