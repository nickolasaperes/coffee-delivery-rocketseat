import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  min-width: 640px;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

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

export const Description = styled.div`
  display: flex;
  gap: 0.5rem;

  color: ${(props) => props.theme["purple"]};
  font-family: 'Roboto', sans-serif;

  div {
    h3 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1rem;
      font-weight: 400;
    }

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
    }
  }
`;

export const MethodsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 0.875rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  border: 1px solid transparent;

  text-transform: uppercase;
  font-size: 0.75rem;

  :first-child {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;
