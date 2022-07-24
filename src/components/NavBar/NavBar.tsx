import React from 'react'
import './NavBar.css';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <div className="Nav-container">
            <img src={Logo} alt="" className="Logo"/>
            
            <div className="NavMenu">
            
              <ul className="NavItems">
                <li className='Link'><a href="/">Home</a></li>
                <li className='Link'><a href="/about">About</a></li>
                <li className='Link'><a href="/search">Search</a></li>
              </ul>  
               
            </div>

        </div>
        <FaBars className="Hamburger" />
    </nav>
  )
}

export default NavBar