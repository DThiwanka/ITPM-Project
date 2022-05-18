import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SvgComponent from "./SvgComponent";


import './checkout.css';
function App() {
  return (
    <div>
    <div className="App mb-5 mt-5">
     
      <div className="grid-container">

    <div className="grid-child purple">
    <div className="svg d-flex justify-content-center">
    <SvgComponent
            height={450}
            width={450}
        />
    </div>
    </div>

    <div className="grid-child green text-left">
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


            <div class="hrdivider">
              <hr />
              <span>Payment Gateway</span>
            </div>


      Name<br/>
      <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Juliana Anderson" multiline style ={{width: '65%'}}/><br/>
      Card Number<br/>
      <TextField id="outlined-basic" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" multiline style ={{width: '65%'}}/><br/>
      CVV Number<br/>
      <TextField inputProps={{ maxLength: 3 }} id="outlined-basic" label="CVV number" variant="outlined" placeholder="112" multiline style ={{width: '65%'}}/><br/>
      Expiry Date<br/>
      <TextField type="month"  id="outlined-basic" label="Expiry Date" variant="outlined" style ={{width: '65%'}}/><br/>
      <button type="button" className="btn btn-outline-success" multiline style ={{width: '20%', float: 'right', marginRight: '272px'}}>Next&nbsp;&nbsp;<i className="fa fa-forward" aria-hidden="true"></i></button>

    </Box>
    </div>
  
</div>

  </div>
  </div>

  );
}

export default App;

