import { BannerContainer, Feature, FeatureContainer, FeatureIcon, HomeContainer, Subtitle, Title } from "./styles";
import homeImage from "../../assets/home-image.svg";
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Products } from "./Products";

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <BannerContainer>
        <div>
          <Title>
            <span>Encontre o café perfeito</span>
            <span>para qualquer hora do dia</span>
          </Title>
          <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
          <FeatureContainer>
            <Feature><FeatureIcon color={theme["yellow-dark"]}><ShoppingCart size={16} weight="fill" /></FeatureIcon>Compra Simples e segura</Feature>
            <Feature><FeatureIcon color={theme["base-text"]}><Package size={16} weight="fill" /></FeatureIcon>Embalagem mantém o café intacto</Feature>
            <Feature><FeatureIcon color={theme.yellow}><Timer size={16} weight="fill" /></FeatureIcon>Entrega rápida e rastreada</Feature>
            <Feature><FeatureIcon color={theme.purple}><Coffee size={16} weight="fill" /></FeatureIcon>O café chega fresquinho até você</Feature>
          </FeatureContainer>
        </div>
        <img src={homeImage} />
      </BannerContainer>
      <Products />
    </HomeContainer>
  )
}
