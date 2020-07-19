import React, {useState, useContext } from 'react';
import stateContext from './stateContext'


function Test() {
  let {region,setRegion} = useContext(stateContext)
  
  return (
    <div >
         {region}   
        <button onClick={()=>{setRegion("Russia")}}></button>
        <br></br>
    </div>
  );
}

export default Test;
