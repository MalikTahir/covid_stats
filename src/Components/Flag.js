import React , {useState, useContext} from 'react'
import Stats from './Fetch_API'
import Paper from '@material-ui/core/Paper';
import stateContext from './stateContext';
import flagContext from './ctx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding : 10
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#B2EF9B',
      marginTop:20
    },
  }));

function Flag(){
    const classes = useStyles();

    const [globalStats,setGlobalStats] = useState([{}]);
    let {region,setRegion} = useContext(stateContext);
     
    //function to change the state and data based on clicked image
    function elementClicked(name){
     
            setRegion(name);
    }  
    //function to get data from api
     async function fun()
    {
            const data = await Stats();
            setGlobalStats(data);
    }
  
  fun()
  
  return(
      <div>
          {globalStats.map(states=>{
              return(
                  <div>
                      <Paper elevation={3} className={classes.paper1} >
                          <div onClick={()=>{elementClicked(states.country)}}>
                            <img src = {`${states && states.country && states["countryInfo"].flag}`} />
                            <h1>
                                    {states.country}
                                    
                            </h1>
                            </div> 
                      </Paper>
                      
                  </div>
              )
          })}
      </div>
  )


}
export default Flag;

