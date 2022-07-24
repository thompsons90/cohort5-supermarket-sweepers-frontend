import React, { useState } from 'react';
import './DropDown.css';

const DrowDown = () => {
    const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div>
        <aside className={!isOpen ? "DropContainer" : "Hidden"}>
        <ul className="DropItems">
                <li className='DropLink'><a href="/">Home</a></li>
                <li className='DropLink'><a href="/about">About</a></li>
                <li className='DropLink'><a href="/search">Search</a></li>
              </ul>       
        </aside>

    </div>
  )
}

export default DrowDown