import styled from 'styled-components';  
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
    width: 100%;
    /* height: ${(props) => (props.responsiveNavBar ? "100vh" : "50px")}; */
    background-color: #5FDD97;
    display: flex;
    flex-direction: column;

`;

export const ContainerLeft = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    border-bottom: 3px solid black;
`
export const ContainerRight = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    border-bottom: 3px solid black;
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

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: 90%;
`

export const Hamburger = styled.div`
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;
    margin-bottom: 2px;

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