import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    background:  #5FDD97;
    height: 50px;
    /* margin-top: -50px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    height: 5em;
`;

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
      display: flex;
      align-items: center;
      list-style: none;
      text-align: center;
      margin-right: -25px;

      @media screen and (max-width: 768px) {
        display: none;
      }
`;

export const NavItem = styled.li`
    height: 50px;
    display: flex;
    flex-direction: row;
`;

export const Links = styled(LinkS)`
    /* color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%; 
    cursor: pointer;
    
    :hover {
         background-color: rgba(0,0,0,0.2)
    } */

    color: black;
    font-size: small;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    padding: .3em;
    align-self: center;
    background-color: #E8FFB7;
    border-radius: 35%;
    border: 2.5px solid black;
    cursor: pointer;
    :hover {
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    &.acticve{
        border-bottom: 3px solid black;
    }
`
