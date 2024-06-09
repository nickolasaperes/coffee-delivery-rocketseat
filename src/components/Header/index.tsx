import { ButtonsContainer, HeaderContainer, LocationButton } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { CartButton } from "../CartButton";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home"><img src={logo}/></NavLink>
      <ButtonsContainer>
        <LocationButton><MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span></LocationButton>
        <NavLink to="/checkout" title="Checkout">
          <CartButton />
        </NavLink>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
