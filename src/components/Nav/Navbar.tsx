import React, { useState } from 'react'
import {
  NavContainer,
  ContainerLeft,
  ContainerRight,
  ContainerExtended,
  ContainerInner,
  NavLinkContainer,
  NavLink,
  Logo,
  Hamburger
} from "../../styles/Nav.style";
import { Link } from 'react-router-dom';
import LogoImg from "../../assets/logo.png";

const Nav = () => {

  const [responsiveNavBar, setResponsiveNav ] = useState(false)
  return(
    <NavContainer extend={responsiveNavBar}>
      <ContainerInner>
        <ContainerLeft>
        <Logo src={LogoImg}></Logo>
        </ContainerLeft>
        <ContainerRight>
        <NavLinkContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/search">Search</NavLink>
              <Hamburger onClick={() => {
                setResponsiveNav((curr) => !curr);
                  }}
                  > 
                    {responsiveNavBar ? <>&#10005;</> : <> &#8801;</>}
              </Hamburger>
          </NavLinkContainer>
        </ContainerRight>
      </ContainerInner>
      {Hamburger && (
        <ContainerExtended>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/search">Search</NavLink>
      </ContainerExtended>
      )}
    </NavContainer>
  );
   
}

export default Nav;