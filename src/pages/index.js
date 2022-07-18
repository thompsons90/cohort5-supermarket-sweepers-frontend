import React, { useState } from 'react'
import NavBar from '../components/Nav/Nav';
import DropDown from '../components/DropDown/DropDown'


const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleState = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
        <DropDown isOpen={isOpen} toggleState={toggleState} />
        <NavBar toggleState={toggleState} />
    </>
  )
}

export default Home 
