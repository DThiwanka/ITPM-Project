import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactLoading from "react-loading";
import SvgComponent from "./SvgComponent";


import './checkout.css';
function App() {
  return (
    <div className="App">
      <h1>Checkout</h1>
   <div className="row">
  <div className="column">
  <div className="svg">
    <SvgComponent
            height={300}
            width={300}
        />
    </div>
  </div>

  <div className="column">
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
      <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Juliana Anderson" multiline style ={{width: '50%'}}/><br/>
      Card Number<br/>
      <TextField id="outlined-basic" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" multiline style ={{width: '50%'}}/><br/>
      CVV Number<br/>
      <TextField id="outlined-basic" label="CVV number" variant="outlined" placeholder="112" multiline style ={{width: '50%'}}/><br/>
      Expiry Date<br/>
      <TextField id="outlined-basic" label="Expiry Date" variant="outlined" style ={{width: '50%'}}/><br/>
    </Box>
  </div>
</div>


  </div>

  );
}

export default App;

