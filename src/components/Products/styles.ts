import styled from "styled-components";

export const ProductsContainer = styled.div`
  h1 {
    color: ${(props) => props.theme["base-subtitle"]}
    font-size: 2rem;
    font-family: 'Baloo 2', monospace;
  }
`;

export const ProductsSection = styled.div`
  padding: 3rem 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
