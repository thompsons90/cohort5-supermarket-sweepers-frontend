import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const DropContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 40%;
    background-color: #5FDD97;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:${({ isOpen }) => (isOpen) ? '0' : '-100%'};
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`;

export const DropWrapper = styled.div`
    color: #000;
    margin: 1rem;
`

export const DropMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50px);
    text-align: center;
    
    @media screen and (max-width: 450px) {
        grid-template-rows: repeat(6, 50px);
        position: relative;
        top: 80px;
    }
`

export const DropLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    :hover {
         background-color: rgba(0,0,0,0.1);
         transform: translateY(-1px);
         border-radius: 5px;
    }
`;

export const NavLogo = styled.div`
    width: 20%;
`