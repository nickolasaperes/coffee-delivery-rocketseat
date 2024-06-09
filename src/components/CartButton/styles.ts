import styled from "styled-components";

export const CartContainer = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  font-size: 0.875rem;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ItemCounter = styled.div`
  position: absolute;
  right: -7px;
  top: -7px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 20px;
  min-height: 20px;

  border-radius: 9999px;

  font-weight: 900;
  font-size: 0.75rem;

  color: white;
  background-color: ${(props) => props.theme["yellow-dark"]};
`;
