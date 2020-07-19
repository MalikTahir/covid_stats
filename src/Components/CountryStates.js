import React, { useState, useContext } from 'react'
import Stats from './Fetch_API'
import Paper from '@material-ui/core/Paper';
import stateContext from './stateContext';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding : 10
    },
    paper3: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#B2EF9B',
      marginTop:20
    },
  }));



function Country(){
    const classes = useStyles();
    let {region} = useContext(stateContext)
    
    
    
    const [states,setStates] = useState([{}])
    const [stateIndex,setStateIndex] = useState(0)
    async function fun()
        {
            const data = await Stats();
            for(var i = 0; i < states.length; i++)
            {
                delete data[i].countryInfo;
                delete data[i].updated;
            }
            
            setStates(data);

            for(var j = 0; j < states.length; j++) {
                if(states[j]["country"] === region) {
                     setStateIndex(j);
                }
            }
            
        }
        
    fun()
    
    return(
        <div>
            
            
            {Object.keys(states[stateIndex]).map(val=>{
                return(
               <div > 
                     <Paper elevation ={3} margin={"100"} className={classes.paper3}>
                          <div> <h5> {val} </h5> </div>
                          <div> {states[stateIndex][val]} </div>
                     </Paper>
               </div>
                )
            })}
        

        </div>
    )
}
export default Country;
