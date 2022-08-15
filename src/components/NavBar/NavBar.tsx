import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import '../DropDown/DropDown.css'

interface Props {
  setIsOpen: boolean;
  isOpen: boolean;

}

const NavBar: React.FC<Props> = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  
const handleClick = () => {
  setIsOpen(!isOpen);
}

  return (
    <nav className='NavBar'>
        <div className="Nav-container">
            <img src={Logo} alt="" className="Logo"/>
            
            <div className="NavMenu">
            
              <ul className="NavItems">
                <li className='Link'>
                  <Link to="/">Home</Link>
                </li>
                {/* <li className='Link'>
                  <Link to="/about">About</Link>
                </li> */}
                <li className='Link'>
                  <Link to="/search">Search</Link>
                </li>
                
              </ul>       
            </div>
        </div>
        <FaBars className="Hamburger" onClick={handleClick} />
        <div>
        {/* <aside className={isOpen ? "DropContainer" : "Hidden"}>
        <ul className="DropItems">
                <li className='DropLink'>
                  <Link to="/">Home</Link>
                </li>
                <li className='DropLink'>
                  <Link to="/about">About</Link>
                </li>
                <li className='DropLink'>
                  <Link to="/search">Search</Link>
                </li>
                
              </ul>       
        </aside> */}

    </div>
    </nav>
  )
}

export default NavBar