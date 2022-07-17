import React from 'react'
import './App.css'; 
import NavBar from './components/Nav/Nav';
import { BrowserRouter as Router  } from 'react-router-dom';
import DropDown from './components/DropDown/DropDown';




const App = () => {
  return (
    <Router>
      <DropDown />
      <NavBar />
    </Router>
  )
}

export default App