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
              product={coffee}
            />
          )
        })}
      </ProductsSection>
    </ProductsContainer>
  )
}
