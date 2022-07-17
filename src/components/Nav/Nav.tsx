import React from "react";
import { FaBars } from 'react-icons/fa';
import LogoImg from "../../assets/logo.png";
import "./logo.css";
import { Nav, NavContainer, NavLogo, Hamburger, NavMenu, NavItem, Links } from "./NavElements";

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img className="logo" src={LogoImg}></img>
          </NavLogo>
          <Hamburger>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <Links to="/">Home</Links>
              <Links to="/about">About</Links>
              <Links to="/search">Search</Links>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
