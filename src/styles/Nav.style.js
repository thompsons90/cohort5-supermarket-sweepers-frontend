import styled from 'styled-components';  
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
    width: 100%;
    height: 70px;
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
    height: 80px;
    display: flex;
`

export const NavLinkContainer = styled.div`
    display: flex;
`;

export const NavLink = styled(Link)`
    color: black;
    font-size: large;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    padding: .5em;
    background-color: #E8FFB7;
    border-radius: 35%;
    border: 4px solid black;
    :hover {
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

`




export const ContainerExtended = styled.div`

`