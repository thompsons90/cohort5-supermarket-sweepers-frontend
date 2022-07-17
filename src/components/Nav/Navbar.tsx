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
  Hamburger,
  NavLinkExtended
} from "../../styles/Nav.style";
// import { Link } from 'react-router-dom';
import LogoImg from "../../assets/logo.png";

const Nav = () => {

  const [responsiveNav, setResponsiveNav ] = useState(false)

  return(
    <NavContainer extend={responsiveNav}>
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
                    {responsiveNav ? <>&#10005;</> : <> &#8801;</>}
              </Hamburger>
          </NavLinkContainer>
        </ContainerRight>
      </ContainerInner>
      {Hamburger && (
        <ContainerExtended>
              <NavLinkExtended to="/">Home</NavLinkExtended>
              <NavLinkExtended to="/about">About</NavLinkExtended>
              <NavLinkExtended to="/search">Search</NavLinkExtended>
      </ContainerExtended>
      )}
    </NavContainer>
  );
   
}

export default Nav;

