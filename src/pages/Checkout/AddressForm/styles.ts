import styled from "styled-components";

export const AddressContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  min-width: 640px;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  p {
    display: flex;
    gap: 0.75rem;
  }
`;

const BaseInput = styled.input`
  border: none;
  outline: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-label"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
  &::-ms-input-placeholder { /* Edge 12 -18 */
    color: ${(props) => props.theme["base-label"]};
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
