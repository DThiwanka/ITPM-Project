import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactLoading from "react-loading";
import SvgComponent from "./SvgComponent";


import './App.css';
function App() {
  return (
    <div className="App">
      <h1>ITPM PROJECT</h1>
      {/* <div className="anima">
        <ReactLoading
            type="cylon"
            color="#0000FF"
            height={200}
            width={100}
        />
    </div> */}
   
   <div class="row">
  <div class="column">
  <div className="svg">
    <SvgComponent
            height={500}
            width={500}
        />
    </div>
  </div>

  <div class="column">
  <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '500ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <b>Payment Area</b><br/><br/>
      Name<br/>
      <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Juliana Anderson" multiline style ={{width: '80%'}}/><br/>
      Card Number<br/>
      <TextField id="outlined-basic" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" multiline style ={{width: '80%'}}/><br/>
      CVV Number<br/>
      <TextField id="outlined-basic" label="CVV number" variant="outlined" placeholder="112" multiline style ={{width: '80%'}}/><br/>
      Expiry Date<br/>
      <TextField id="outlined-basic" label="Expiry Date" variant="outlined" style ={{width: '80%'}}/><br/>
    </Box>
  </div>
</div>


  </div>

  );
}

export default App;

