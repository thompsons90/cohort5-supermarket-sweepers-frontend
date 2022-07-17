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
            </NavItem>
            <NavItem>
              <Links to="/about">About</Links>
            </NavItem>
            <NavItem>
              <Links to="/search">Search</Links>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
