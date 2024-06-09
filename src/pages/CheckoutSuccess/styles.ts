import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  align-items: end;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.span`
  font-family: 'Baloo 2', monospace;
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) => props.theme["yellow-dark"]};
  display: block;
`;

export const Subtitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  display: block;
`;

export const OrderDetails = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px 36px;

  border: 1px solid ${(props) => props.theme.purple};

`;

export const OrderInformation = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const InfoIcon = styled.div<{color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 32px;
  min-height: 32px;
  border-radius: 999px;

  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme[props.color]};
`;

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
