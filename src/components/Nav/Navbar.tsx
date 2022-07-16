import React from 'react'
import {
  NavContainer,
  ContainerLeft,
  ContainerRight,
  ContainerExtended,
  ContainerInner,
  NavLinkContainer,
  NavLink
} from "../../styles/Nav.style";
import { Link } from 'react-router-dom';


const Nav = () => {
  return(
    <NavContainer>
      <ContainerInner>
        <ContainerLeft>
        </ContainerLeft>
        <ContainerRight>
        <NavLinkContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/search">Search</NavLink>
          </NavLinkContainer>
        </ContainerRight>
      </ContainerInner>
      <ContainerExtended></ContainerExtended>
    </NavContainer>
  )
   
}

export default Nav;