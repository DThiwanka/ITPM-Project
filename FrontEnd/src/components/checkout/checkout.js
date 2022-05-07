import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SvgComponent from "./SvgComponent";
import axios from "axios";
import NumberFormat from 'react-number-format';


import './checkout.css';
function App() {

  const [name, setName] = useState();
  const [cardNumber, setCardnumber] = useState();
  const [cvvNumber, setCvvNumber] = useState();
  const [expDate, setExpDate] = useState();


  function sendData(e) {
    e.preventDefault();

    const newVisa = {

      name,
      cardNumber,
      cvvNumber,
      expDate

    }

    //  console.log(newVisa);
    console.log(newVisa, "data data");
    axios.post('http://localhost:8090/visa/add', newVisa).then(res => {
      alert("Visa Card Checked 💯");

      console.log(newVisa, "data");
      window.location.reload();

      //test

    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <div>

      <div className="App mb-5 mt-5 mh-100">

        <div className="grid-container">

          <div className="grid-child purple">
            <div className="svg d-flex justify-content-center">
              <SvgComponent
                height={500}
                width={500}
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


              <div className="hrdivider mr-3">

                <span>Payment Gateway</span>
                <br />
              </div>

              <form onSubmit={sendData}>
                Name<br />
                <TextField id="name" label="Name" className="mb-3 mt-1" variant="outlined" placeholder="Juliana Anderson" value={name} onChange={e => setName(e.target.value)} multiline style={{ width: '100%' }} /><br />
                Card Number<br />
                <NumberFormat customInput={TextField} format="#### #### #### ####" id="cardNumber" className="mb-3  mt-1" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" onChange={e => setCardnumber(e.target.value)} multiline style={{ width: '100%' }} /><br />
                {/* <TextField format="###-####" id="cardNumber" className="mb-3  mt-1" label="Card Number" variant="outlined" placeholder="112 3265 2345 6854" onChange={e => setCardnumber(e.target.value)} multiline style={{ width: '100%' }} /><br /> */}
                CVV Number<br />
                <NumberFormat customInput={TextField} inputProps={{ maxLength: 3 }} className="mb-3  mt-1" id="cvvNumber" label="CVV number" onChange={e => setCvvNumber(e.target.value)} variant="outlined" placeholder="112" multiline style={{ width: '100%' }} /><br />
                Expiry Date<br />
                <TextField type="month" id="expDate" className="mb-3  mt-1" label="Expiry Date" onChange={e => setExpDate(e.target.value)} variant="outlined" style={{ width: '100%' }} /><br />
                <button type="submit" className="btn btn-primary d-block mr-0 ml-auto mb-3">SUBMIT</button>
              </form>
            </Box>

          </div>

        </div>

      </div>

    </div>

  );
}

export default App;

