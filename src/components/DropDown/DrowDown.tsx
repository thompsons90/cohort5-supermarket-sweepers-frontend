import React from 'react';
import './DropDown.css';

const DrowDown = () => {
  return (
    <div>
        <aside className="DropContainer">
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