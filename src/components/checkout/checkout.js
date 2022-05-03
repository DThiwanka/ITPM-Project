import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SvgComponent from "./SvgComponent";
import axios from "axios";


import './checkout.css';
function App() {

  const [name, setName] = useState();
  const [cardNumber, setCardnumber] = useState();
  const [cvvNumber, setCvvNumber] = useState();
  const [expDate, setExpDate] = useState();


 function sendData(e){
   e.preventDefault();

   const newVisa = {

    name,
    cardNumber,
    cvvNumber,
    expDate

   }

  //  console.log(newVisa);

   axios.post('http://localhost:8090/visa/add', newVisa).then(() => {
     alert("Visa Card Checked");
     console.log(newVisa); 
     this.setState({
  
      //  name : "",
      //  cardNumber : "",
      //  cvvNumber : "",
      //  expDate : ""

      

     })
   }).catch((err) => {
     alert(err)
   })

 }

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
              
              sx={{
                '& > :not(style)': { m: 2, width: '50ch' },
              }}
              noValidate
              autoComplete="off"
            >
              {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}


              <div className="hrdivider">
                <hr />
                <span>Payment Gateway</span>
              </div>

              <form onSubmit={sendData}>
              Name<br />
              <TextField id="name" label="Name" variant="outlined" placeholder="Juliana Anderson" value={name} onChange={e => setName(e.target.value)} multiline style={{ width: '65%' }} /><br />
              Card Number<br />
              <TextField id="cardNumber" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" onChange={e => setCardnumber(e.target.value)} multiline style={{ width: '65%' }} /><br />
              CVV Number<br />
              <TextField inputProps={{ maxLength: 3 }} id="cvvNumber" label="CVV number" onChange={e => setCvvNumber(e.target.value)} variant="outlined" placeholder="112" multiline style={{ width: '65%' }} /><br />
              Expiry Date<br />
              <TextField type="month" id="expDate" label="Expiry Date" onChange={e => setExpDate(e.target.value)} variant="outlined" style={{ width: '65%' }} /><br />
              <button type="submit" className="btn btn-primary">SUBMIT</button>
              </form>
            </Box>
            
          </div>

        </div>
        
      </div>
  
    </div>

  );
}

export default App;

