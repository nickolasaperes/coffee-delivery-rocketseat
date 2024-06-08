import { Product } from "../Product";
import { ProductsContainer, ProductsSection } from "./styles";
import { coffees } from "./coffees";

export function Products() {
  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <ProductsSection>
        {coffees.map((coffee) => {
          return (
            <Product
              key={coffee.id}
              imgSrc={coffee.imgSrc}
              title={coffee.title}
              description={coffee.description}
              badges={coffee.badges}
              price={coffee.price}
            />
          )
        })}
      </ProductsSection>
    </ProductsContainer>
  )
}
