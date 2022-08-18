import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import axios from 'axios';

const home = () => {

  useEffect(() =>{
    axios.get("https://supermarket-sweepers-backend.herokuapp.com/api/heartbeat")
  }, [])

  return (
    <>
      <Hero />
    </>
  )
}

export default home