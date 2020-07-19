import React, { useState, useContext } from 'react';
import Grids from './Components/Grids'
import NavBar from './Components/NavBar'
export default function App() {
  

  return (
        <div >
          <NavBar></NavBar>
          <Grids></Grids>
        </div>
  );
}