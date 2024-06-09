import styled from "styled-components";

export const AddressContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  min-width: 640px;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  p {
    display: flex;
    gap: 0.75rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const BaseInput = styled.input`
  border: none;
  outline: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};

  border: 1px solid transparent;
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
  &::-ms-input-placeholder { /* Edge 12 -18 */
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }

  &.error {
    border: 1px solid ${(props) => props.theme.red};
  }
`

export const TextInput = styled(BaseInput)``;

export const RuaInput = styled(BaseInput)`
  width: 100%;
`;

export const NumeroInput = styled(BaseInput)`
  width: 200px;
`;

export const ComplementoInput = styled(BaseInput)`
  width: 100%;
`;

export const BairroInput = styled(BaseInput)`
  width: 200px;
`;

export const CidadeInput = styled(BaseInput)`
  width: 100%;
`;

export const UfInput = styled(BaseInput)`
  width: 10%;
`;

export const Description = styled.div`
  display: flex;
  gap: 0.5rem;

  color: ${(props) => props.theme["yellow-dark"]};
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

export const FormErrors = styled.div`
  margin-top: 1rem;
  font-weight: 900;

  span {
    color: ${(props) => props.theme.red} !important;
  }
`;
