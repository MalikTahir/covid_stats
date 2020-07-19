import React ,{useState,useEffect,useContext} from 'react'
import stateContext from './../stateContext'

 function Stats(){
    
    const [globalStats,setGlobalStats] = useState([{}])
    const [countryStats,setCountryStats] = useState([{}])
    let {region} = useContext(stateContext);
 
  useEffect(()=>{
    async function fun(){
      const response = await fetch('https://corona.lmao.ninja/v2/countries')
      const data = await response.json();
      setGlobalStats(data);
     
     // return data;
    }
    fun();
  },[])

  return globalStats;
 
}
export default Stats;