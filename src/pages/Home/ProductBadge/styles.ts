import styled from "styled-components";

export const BadgeContainer = styled.div`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 900;

  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
`;

