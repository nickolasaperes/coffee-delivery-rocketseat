import styled from "styled-components";


export const HomeContainer = styled.main`
  margin: 7rem 0;

  img {
    width: 476px;
    height: 360px;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 7rem;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', monospace;
  color: ${(props) => props.theme["base-title"]};
  font-size: 3rem;
  font-weight: 900;

  span {
    display: block;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]}
`;

export const FeatureContainer = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`;

export const Feature = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const FeatureIcon = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  aspect-ratio: 1;
  border-radius: 50%;

  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;
