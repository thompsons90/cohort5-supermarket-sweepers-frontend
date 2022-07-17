import styled from 'styled-components';  
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.responsiveNav === props.setResponsiveNav ? "30vh" : "50px")};
    background-color: #5FDD97;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 700px) {
        height: 50px;
    }

`;

export const ContainerLeft = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`
export const ContainerRight = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`

export const ContainerInner = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`

export const NavLinkContainer = styled.div`
    display: flex;
`;

export const NavLink = styled(Link)`
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
    :hover {
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media (max-width: 700px) {
        display: none;
    }

`

export const NavLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  :hover {
    /* background-color: rgba(0,0,0,0.2); */
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }
`;


export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: 90%;

    @media (max-width: 500px) {
        max-width: 140px;
        height: 70%;
    }
`

export const Hamburger = styled.div`
    height: 60px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;
    @media (min-width: 700px) {
        display: none;
    }
`

export const ContainerExtended = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px)  {
        display: none;
    }
`