import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import NavBar from './components/NavBar/NavBar';



const App = () => {

  return (
    <>
    <NavBar isOpen={false} setIsOpen={false}  />
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/about' element={<About />} /> */}
      <Route path='/search' element={<Search />} />
     </Routes>
    </>
  )
}


export default App