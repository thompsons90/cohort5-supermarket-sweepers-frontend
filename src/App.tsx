import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' />
        <Route path='/about' />
        <Route path='/search' />
      </Routes>
    </Router>
  );
}

export default App;
