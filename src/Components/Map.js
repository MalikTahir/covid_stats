import React,{useContext, useState, useEffect} from 'react'
import stateContext from './stateContext'
import CountryDetails from './Fetch_API/FetchCountryData'
import MyCharts from './MyCharts'
import {Bar,Line} from 'react-chartjs-2'
function Map(){
    const {region,setRegion} = useContext(stateContext)
    const [index2,setIndex2] = useState(11)
    const [details,setDetails] = useState([{}])


    const [countryDetails,setCountryDetails] = useState([{}])
    const [cases,setCases] = useState([])
    

    async function fun(){
        const dat = await CountryDetails()
        await setDetails(dat)

        for(var i=0;i<details.length;i++){
            if(details && details[i] && details[i]["country"]===region){
                setIndex2(i)
                setCountryDetails(details[i])
                delete countryDetails.province
                delete countryDetails.country
                setCases(countryDetails && countryDetails["timeline"] && countryDetails["timeline"]["cases"])
                break;
            }
            
        }
        
    }
    fun()

    
    
    console.log(countryDetails)  
    console.log(index2)  
    console.log(region)
    
    return(
        <div>
            {region}            
            <MyCharts  title1="cases"  dataset1={countryDetails && countryDetails["timeline"] && countryDetails["timeline"]["cases"]}></MyCharts>

            <MyCharts  title1="deaths" dataset1={countryDetails && countryDetails["timeline"] && countryDetails["timeline"]["deaths"]}></MyCharts>

            <MyCharts  title1="recovered" dataset1={countryDetails && countryDetails["timeline"] && countryDetails["timeline"]["recovered"]}></MyCharts>
            
        </div>
        
    )
}
export default Map;