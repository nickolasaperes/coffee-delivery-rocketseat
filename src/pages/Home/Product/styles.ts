import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.5rem;

  font-family: 'Baloo 2', monospace;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 120px;
    height: 120px;
    margin-top: -45px;
  }
`;


export const Badges = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  color: ${(props) => props.theme["base-subtitle"]}
`;

export const Description = styled.span`
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme["base-label"]}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 100%;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 900;

  :first-child {
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

export const ButtonContainer = styled.span`
  display: flex;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["white"]};

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
    color: ${(props) => props.theme.white};
  }
`;
