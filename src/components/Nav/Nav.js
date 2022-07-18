import React from "react";
import { FaBars } from "react-icons/fa";
import LogoImg from "../../assets/logo.png";
import "./logo.css";
import {
  Nav,
  NavContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavContent,
  Links,
} from "./NavElements";



const NavBar = ({toggleState}) => {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img className="logo" src={LogoImg}></img>
          </NavLogo>
          <Hamburger onClick={toggleState}>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavContent>
              <Links to="/">Home</Links>
            </NavContent>
            <NavContent>
              <Links to="/about">About</Links>
            </NavContent>
            <NavContent>
              <Links to="/search">Search</Links>
            </NavContent>
          </NavMenu>
        </NavContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
