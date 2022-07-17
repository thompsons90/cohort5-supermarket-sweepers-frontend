import React from 'react';
import LogoImg from "../../assets/logo.png";
import './logo.css';
import {
    Nav,
    NavContainer,
    NavLogo
} from './NavElements'

const NavBar = () => {
  return (
    <div>
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                  <img className="logo" src={LogoImg}></img>
                </NavLogo>
            </NavContainer>
        </Nav>
    </div>
  )
}

export default NavBar