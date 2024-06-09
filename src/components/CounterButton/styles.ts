import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  max-width: 72px;

  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  button {
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme.purple};

    height: 100%;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
