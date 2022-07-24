import React from 'react'
import './NavBar.css';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

interface Props {
  open: boolean;
  isOpen: boolean;
}

const NavBar: React.FC<Props> = () => {
  const [ open, isOpen ] = useState(false);
  
const handleClick = () => {
  isOpen(!open);
}

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
        <FaBars className="Hamburger" onClick={handleClick} />
    </nav>
  )
}

export default NavBar