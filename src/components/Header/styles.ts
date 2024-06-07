import styled from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`;

export const BaseButton = styled.button`
  outline: 0;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  font-size: 14px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple"]};

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme.white};

    span {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const KartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;
