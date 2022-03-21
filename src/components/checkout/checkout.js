import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SvgComponent from "./SvgComponent";


import './checkout.css';
function App() {
  return (
    <div className="App">
      <h1>Checkout</h1>
      <div class="grid-container">

    <div class="grid-child purple">
    <div className="svg">
    <SvgComponent
            height={600}
            width={500}
        />
    </div>
    </div>

    <div class="grid-child green text-left">
    <Box 
    classname="mt-5"
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <b>Payment Area</b><br/><br/>
      Name<br/>
      <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Juliana Anderson" multiline style ={{width: '55%'}}/><br/>
      Card Number<br/>
      <TextField id="outlined-basic" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" multiline style ={{width: '55%'}}/><br/>
      CVV Number<br/>
      <TextField inputProps={{ maxLength: 3 }} id="outlined-basic" label="CVV number" variant="outlined" placeholder="112" multiline style ={{width: '55%'}}/><br/>
      Expiry Date<br/>
      <TextField type="month"  id="outlined-basic" label="Expiry Date" variant="outlined" style ={{width: '55%'}}/><br/>
      <button type="button" class="btn btn-outline-danger" multiline style ={{width: '20%', float: 'right', marginRight: '272px'}}>Danger</button>

    </Box>
    </div>
  
</div>

  </div>

  );
}

export default App;

