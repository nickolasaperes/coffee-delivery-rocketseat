import { ButtonsContainer, HeaderContainer, KartButton, LocationButton } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <ButtonsContainer>
        <LocationButton><MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span></LocationButton>
        <KartButton><ShoppingCart size={22} weight="fill" /></KartButton>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
