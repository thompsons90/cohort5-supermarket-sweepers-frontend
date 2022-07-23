import React from 'react'
import './NavBar.css';
import Logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <div className="Nav-container">
            <img src={Logo} alt="" className="Logo"/>

        </div>
    </nav>
  )
}

export default NavBar