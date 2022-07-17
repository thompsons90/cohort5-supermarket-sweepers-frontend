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

`;

export const NavLogo = styled.div`

`;