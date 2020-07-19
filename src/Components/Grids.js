import React, { useState, useContext } from 'react';
import Flag from './Flag'
import Country from './CountryStates'
import Map from './Map'
import stateContext from './stateContext'
import { makeStyles } from '@material-ui/core/styles';
import Stats from './Fetch_API'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import flagContext from './ctx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding : 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'#DAFF7D'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  let rg = useContext(stateContext);
  
  let [region,setRegion] = useState(rg)
  
  
  // getting data from fetch api component
  async function fun()
  {
    const data =await Stats();
  }
  fun()

  return (
        <div className={classes.root}>


<Grid container spacing={3}>
          <stateContext.Provider value={{region,setRegion}}>
              <Grid item xs={12} sm={2}>
                    <Paper className={classes.paper} elevation={3}>
                            <h1>Data Statistics</h1>
                            <div>
                                <Country></Country>
                            </div>
                           
                    </Paper>
              </Grid>

              <Grid item xs={12} sm={7}>
                    <Paper className={classes.paper}>
                            <Map></Map> 
                    </Paper>
              </Grid>

              <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={3}>
                            <h1>Countries</h1>
                            <div>
                                <Flag></Flag>
                            </div>
                    </Paper>

              </Grid>
          </stateContext.Provider>    

          </Grid>



          
        </div>
  );
}