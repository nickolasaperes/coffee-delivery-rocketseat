import styled from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;

  a {
    display: flex;
  }
`;

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  font-size: 0.875rem;

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

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    text-decoration: none;
  }
`;
