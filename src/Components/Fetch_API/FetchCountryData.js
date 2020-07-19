import React ,{useState,useEffect,useContext} from 'react'
import stateContext from './../stateContext'

 function CountryDetails(){


    const [cStats,setCStats] = useState([{}])

  useEffect(()=>{
    async function fun(){
       
      const response = await fetch("https://corona.lmao.ninja/v2/historical/")
      const data = await response.json();
      
      await setCStats(data);
      

     // return data;
    }
    fun();
    
  },[])
  
  return cStats;
  
}
export default CountryDetails;