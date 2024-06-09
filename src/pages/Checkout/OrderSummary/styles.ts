import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 1rem;
  padding: 2.5rem;
  min-width: 448px;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  p {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1.5rem;


  font-family: 'Roboto', sans-serif;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 64px;
    height: 64px;
  }

  div {
    width: 100%;
  }
`;
export const ItemDescription = styled.div`
  color: ${(props) => props.theme["base-subtitle"]};
  display: flex;
  justify-content: space-between;

  :last-child {
    color: ${(props) => props.theme["base-text"]};
    font-weight: 900;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const RemoveButton = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  cursor: pointer;

  border: 1px solid transparent;

  :first-child {
    color: ${(props) => props.theme["purple"]};
    margin-top: -1px;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  &:active {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;

export const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-family: 'Roboto', sans-serif;
`;

export const PriceDescription = styled.div`
  display: flex;
  justify-content: space-between;


  :first-child {
    font-size: 0.875rem;
  }
`;

export const PriceTotal = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 900;

  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ConfirmButton = styled.button`
  align-self: center;
  width: 100%;
  height: 46px;

  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};

  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;

  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;

  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 900;
`;
