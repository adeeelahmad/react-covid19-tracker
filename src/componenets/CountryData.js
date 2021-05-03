import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import {  Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { Bar } from 'react-chartjs-2'






const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    width: '50%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '30%',
      height: theme.spacing(16),
    }}
}));

export default function SimpleSelect() {

  const[loading, setloading]= useState(false);
  const classes = useStyles();
  let mainData = {
    '' : '', 
    countryInfo:{'flag':''}
  };
  const[data, setdata] = useState(mainData);
  const data1 = {
    labels: ['Active', 'Deaths', 'Today Cases', 'Today Deaths'],
    datasets: [
      {
        label: 'Calculations',
        data: [ data.active, data.deaths, data.todayCases, data.todayDeaths],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const [country, setCountry] = useState('usa');

  const handleChange = (event) => {
    const newValue = event.target.value
    setCountry(newValue);
  };
  console.log(country)

  // Api call 

  
  

  useEffect(() => {
    requestPets();
    //eslint-disable-next-line
  }, [country]); 

  
  async function requestPets() {
    setloading(true);

    const res = await fetch(
      `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`

    );
     mainData = await res.json();

     setloading(false);
     console.log("loading", loading)
    
     setdata(mainData); 
     console.log(data , "data")

    

  }



  return (
    <div>
      
     
     
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={country}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="usa">
            <em>USA</em>
          </MenuItem>
          
          <MenuItem value={'Afghanistan'}>Afghanistan</MenuItem>
          <MenuItem value={'Albania'}>Albania</MenuItem>
          <MenuItem value={'Algeria'}>Algeria</MenuItem>
          <MenuItem value={'Andorra'}>Andorra</MenuItem>
          <MenuItem value={'Angola'}>Angola</MenuItem>
          <MenuItem value={'Anguilla'}>Anguilla</MenuItem>
          <MenuItem value={'Antigua and Barbuda'}>Antigua and Barbuda</MenuItem>
          <MenuItem value={'Argentina'}>Argentina</MenuItem>
          <MenuItem value={'Armenia'}>Armenia</MenuItem>
          <MenuItem value={'Aruba'}>Aruba</MenuItem>
          <MenuItem value={'Australia'}>Australia</MenuItem>
          <MenuItem value={'Austria'}>Austria</MenuItem>
          <MenuItem value={'Azerbaijan'}>Azerbaijan</MenuItem>
          <MenuItem value={'Bahamas'}>Bahamas</MenuItem>
          <MenuItem value={'Bahrain'}>Bahrain</MenuItem>
          <MenuItem value={'Bangladesh'}>Bangladesh</MenuItem>
          <MenuItem value={'Belarus'}>Belarus</MenuItem>
          <MenuItem value={'Belgium'}>Belgium</MenuItem>
          <MenuItem value={'Bermuda'}>Bermuda</MenuItem>
          <MenuItem value={'Bhutan'}>Bhutan</MenuItem>
          <MenuItem value={'Bosnia'}>Bosnia</MenuItem>
          <MenuItem value={'Brazil'}>Brazil</MenuItem>
          <MenuItem value={'Bulgaria'}>Bulgaria</MenuItem>
          <MenuItem value={'Burkina Faso'}>Burkina Faso</MenuItem>
          <MenuItem value={'Burundi'}>Burundi</MenuItem>
          <MenuItem value={'Cabo Verde'}>Cabo Verde</MenuItem>
          <MenuItem value={'Cambodia'}>Cambodia</MenuItem>
          <MenuItem value={'Cameroon'}>Cameroon</MenuItem>
          <MenuItem value={'Canada'}>Canada</MenuItem>
          <MenuItem value={'Cayman Islands'}>Cayman Islands</MenuItem>
          <MenuItem value={'Chad'}>Chad</MenuItem>
          <MenuItem value={'Chile'}>Chile</MenuItem>
          <MenuItem value={'China'}>China</MenuItem>
          <MenuItem value={'Colombia'}>Colombia</MenuItem>
          <MenuItem value={'Costa Rica'}>Costa Rica</MenuItem>
          <MenuItem value={'Curaçao'}>Curaçao</MenuItem>
          <MenuItem value={"'Côte d'Ivoire'"}>Côte d'Ivoire</MenuItem>
          <MenuItem value={'Diamond Princess'}>Diamond Princess</MenuItem>
          <MenuItem value={'Dominican Republic'}>Dominican Republic</MenuItem>
          <MenuItem value={'Egypt'}>Egypt</MenuItem>
          <MenuItem value={'Estonia'}>Estonia</MenuItem>
          <MenuItem value={'Finland'}>Finland</MenuItem>
          <MenuItem value={'France'}>France</MenuItem>
          <MenuItem value={'Georgia'}>Georgia</MenuItem>
          <MenuItem value={'Germany'}>Germany</MenuItem>
          <MenuItem value={'India'}>India</MenuItem>
          <MenuItem value={'Italy'}>Italy</MenuItem>
          <MenuItem value={'Myanmar'}>Myanmar</MenuItem>
          <MenuItem value={'New Zealand'}>New Zealand</MenuItem>
          <MenuItem value={'Pakistan'}>Pakistan</MenuItem>
          <MenuItem value={'Serbia'}>Serbia</MenuItem>
          <MenuItem value={'Turkey'}>Turkey</MenuItem>
          <MenuItem value={'Uzbekistan'}>Uzbekistan</MenuItem>
          <MenuItem value={'Zimbabwe'}>Zimbabwe</MenuItem>
          
          
          
        </Select>
        <FormHelperText>select a country</FormHelperText>
     </FormControl>
       
     <div style = {{display:'flex', justifyContent:'space-around', flexWrap:'wrap-reverse'}}>
      <Paper elevation={3} style={{borderBottom: "5px solid red", width:'280px', height:'140px'}}>
      <Typography variant = 'h3' style= {{paddingTop:"20px"}}><NumberFormat value={data.active} displayType={'text'} thousandSeparator={true}  /></Typography>
      <Typography variant = 'h5'>Total Active</Typography>
      </Paper >
      <Paper elevation={3} style={{borderBottom: "5px solid white", width:'280px', height:'140px'}} >
      <Typography><img style= {{width: '190px', maxWidth:'190px'}} src={data.countryInfo.flag} alt={country}/></Typography>
      </Paper >
      
      
    </div>
    {/* <ChatData /> */}
    
    
    <Bar data={data1} options={options} />

    
    </div>

    
  );
}
