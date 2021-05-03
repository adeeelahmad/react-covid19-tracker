import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import {useEffect, useState} from 'react'
// import NumberFormat from 'react-number-format';
import LoopIcon from '@material-ui/icons/Loop'
import "./globalData.css"
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  
  },
}));

export default function SimplePaper() {
   
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  
  let mainData = {
    "": ""
  };
  const[data, setdata] = useState(mainData);

  useEffect(() => {
    requestPets();
    //eslint-disable-next-line
  }, []); 

  
  async function requestPets() {
    setLoading(true);

    const res = await fetch(
      `https://corona.lmao.ninja/v2/all?yesterday`

    );
     mainData = await res.json();
     setdata(mainData);

     setLoading(false);

  }

  // loading handler
  if(loading){
    return (
      <div className={classes.root}>
  
      <Paper elevation={3} style={{ borderBottom:'5px solid black'}} > 
        
          
        <Typography variant= "h3">
        <LoopIcon fontSize = "large" className = "spin mole" />
       
            
            <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
                Global Data As Of Today
            </Typography>
            
        </Typography>           
      </Paper>
        
        <Paper elevation={3} style={{ borderBottom:'5px solid red'}} > 
          
          <Typography variant= "h3"  style={{color:'red'}}>
          <LoopIcon fontSize = "large" className = "spin mole"/>
              
              <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
                 Total Active
              </Typography>
              
          </Typography>     
        </Paper>
  
        <Paper elevation={3}  style={{ borderBottom:'5px solid orange'}} > 
        
          
          <Typography variant= "h3" style = {{color:'orange'}}>
          <LoopIcon fontSize = "large" className = "spin mole"/>
              
              <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
                  Total Deaths
              </Typography>
              
          </Typography>        
        </Paper>
  
        <Paper elevation={3}  style={{ borderBottom:'5px solid green'}}> 
        
          
          <Typography variant= "h3" style = {{color:'green'}}>
          <LoopIcon fontSize = "large" className = "spin mole"/>
              
              <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
                  Total Recoverd
              </Typography>
              
          </Typography>        
        </Paper>
  
       
  
        
      </div>
    );
  }
   
  return (
    <div className={classes.root}>

    <Paper elevation={3} style={{ borderBottom:'5px solid black'}} > 
      
        
      <Typography variant= "h3">
      
          <CountUp
          start={0}
          end={data.cases}
          duration={0.5}
          separator=","
          decimals={0}
          decimal=","/>
          
          <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
              Global Data As Of Today
          </Typography>
          
      </Typography>           
    </Paper>
      
      <Paper elevation={3} style={{ borderBottom:'5px solid red'}} > 
        
        <Typography variant= "h3"  style={{color:''}}>
      
            <CountUp
            start={0}
            end={data.active}
            duration={0.5}
            separator=","
            decimals={0}
            decimal=","/>
            
            <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
               Total Active
            </Typography>
            
        </Typography>     
      </Paper>

      <Paper elevation={3}  style={{ borderBottom:'5px solid orange'}} > 
      
        
        <Typography variant= "h3" style = {{color:''}}>
        
            <CountUp
            start={0}
            end={data.deaths}
            duration={0.5}
            separator=","
            decimals={0}
            decimal=","/>
            
            <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
                Total Deaths
            </Typography>
            
        </Typography>        
      </Paper>

      <Paper elevation={3}  style={{ borderBottom:'5px solid green'}}> 
      
        
        <Typography variant= "h3" style = {{color:''}}>
        
            <CountUp
            start={0}
            end={data.recovered}
            duration={0.5}
            separator=","
            decimals={0}
            decimal=","/>
            
            <Typography variant="subtitle2" style= {{color:'black', fontSize: '24px'}}>
                Total Recoverd
            </Typography>
            
        </Typography>        
      </Paper>

     

      
    </div>
  );
}
