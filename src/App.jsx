import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
const[amount,setAmount]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)

const[interest,setInterest]=useState(0)
console.log(amount);
console.log(rate);
console.log(year);

const calculate=(e)=>{
  const output=amount*rate*year/100
  console.log(output);
  setInterest(output)
}

const reset=(e)=>{
  setInterest(0)
  setAmount(0)
  setRate(0)
  setYear(0) 
}

  return (
    <div className="App">
      <div className="container">

        <div className="header">
          <h1>SIMPLE INTERERST CALCULATOR</h1>
          <p>Calculate Your Simple Interest With Us ❤️</p>
        </div>

        <div className="total">
          <h3> &#8377;{interest}</h3>
          <p>Your Total Interest</p>
        </div>

        <div className="form">
          <form>
            <div className="input">
              <TextField id="outlined-basic"   value={amount||""} onChange={(e)=>setAmount(e.target.value)}   label="Amount" variant="outlined" />
              <br />
              <TextField id="filled-basic"  value={rate||""}  onChange={(e)=>setRate(e.target.value)} label="Rate" variant="outlined" />
              <br />
              <TextField id="standard-basic" value={year||""} onChange={(e)=>setYear(e.target.value)}      label="Year" variant="outlined" />
            </div>
            <div className="button">
              <Button variant="contained" onClick={(e)=>calculate(e)} >Calculate</Button>
              <Button variant="contained" onClick={(e)=>reset(e)}>Reset</Button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}

export default App;
