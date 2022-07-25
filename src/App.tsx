import React from 'react'
import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Search from './pages/search';
import NavBar from './components/NavBar/NavBar';



const App = () => {

  return (
    <>
    <NavBar isOpen={false} setIsOpen={false}  />
    <div className='container'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<Search />} />
     </Routes>
    </div>
    </>
  )
}


export default App