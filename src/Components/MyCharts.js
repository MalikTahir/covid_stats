import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Bar,Line} from 'react-chartjs-2'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding : 10
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#A2A79E',
      marginTop:20
    },
  }));

function MyCharts(props){
    const classes = useStyles();
    const array1 = props.dataset1;
    var title = props.title1;
    var border, bg =""
    switch(title){
        case 'cases':
            title = "Total confirmed Cases";
            border= "black";
            bg="yellow";
            break;
        case 'deaths':
            title = "Total confirmed Deaths";
            border= "black";
            bg="red";
            break;    
        case 'recovered':
            title = "Total confirmed Recoveries";
            border= "black";
            bg="#05F140";
            break;
        default:
            break;    
    }
    // setArray(props.dataset1)
    
    const chart1 = (
        typeof(array1) !== 'undefined'  ?
        <Line 
            data={{
                labels:Object.keys(array1),
                datasets:[{
                    data:Object.values(array1),
                    label:title,
                    borderColor:border,
                    backgroundColor:bg,
                    fill:true
                }]
            }}
        />:null
    );

    return(
        <div>
            <Paper elevation={3} className={classes.paper2}>
                {chart1}
            </Paper>
        </div>
    )
}
export default MyCharts;