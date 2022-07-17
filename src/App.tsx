import React from 'react'
import './App.css'; 
import NavBar from './components/Nav/Nav';
import { BrowserRouter as Router  } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  )
}

export default App