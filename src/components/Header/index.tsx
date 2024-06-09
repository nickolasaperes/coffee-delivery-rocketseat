import { ButtonsContainer, HeaderContainer, KartButton, LocationButton } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home"><img src={logo}/></NavLink>
      <ButtonsContainer>
        <LocationButton><MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span></LocationButton>
        <NavLink to="/checkout" title="Checkout"><KartButton><ShoppingCart size={22} weight="fill" /></KartButton></NavLink>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
