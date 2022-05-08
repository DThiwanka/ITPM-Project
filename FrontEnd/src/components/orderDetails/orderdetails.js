import React, { useState } from 'react';
import "./orderdetails.css";
import SvgComponent from "./visa";
import CodComponent from "./cod"
import axios from "axios";
import validator from 'validator'

function Orderdetails() {

  const [fname, setFname] = useState();
  const [email, setEmail] = useState();
  const [tpnumber, setTpnumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [stpnumber, setStpnumber] = useState();
  const [paymethod, setPaymethod] = useState();

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
   
    if (validator.isEmail(email)) {
      setEmailError('')
      setEmail(email)
    } else {
      setEmailError('Please enter valid email')
    }
  }


 function sendData(e){
   e.preventDefault();

   const newDetail = {

    fname,
    email,
    tpnumber,
    address,
    city,
    stpnumber,
    paymethod

   }

   

  //  console.log(newDetail);
  
  axios.post('http://localhost:8090/details/add',newDetail).then(()=>{
    alert("Details Added Successfully 🚀");
    console.log(newDetail);
  }).catch((err)=>{
    alert(err);
    console.log("err");
  })

 }

  return (

    <div >
       <form onSubmit={sendData}>
      <h1 className="ml-4 h4 mt-3 text-decoration-underline"><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;Order Details</h1>
      <div className="row mt-3">
        <div className="col-sm-7 ml-4">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-header">
              <i
                className="fa fa-chevron-circle-right fa-lg"
                aria-hidden="true"
              ></i>{" "}
              Payment Methods
            </div>

            <div className="card-body">
              <b className="card-title">Full Name</b>
              <p className="card-text">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form6Example3"
                      className="form-control"
                      placeholder="Janith Dilshan Perera"
                      onChange={e => setFname(e.target.value)}
                    />
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                    {/* <pre>
        <h2>How to Validate an Email Address in  ReactJS</h2>
        <span>Enter Email: </span><input type="text" id="userEmail"
        onChange={(e) => validateEmail(e)}></input> <br /><br /><br />
        <h3 style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</h3>
      </pre> */}

      
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example1">
                          <b>Email</b>
                        </label>
                        {/* <input
                          type="email"
                          required 
                          class="form-control"
                          id="form6Example1"
                          className="form-control"
                          placeholder="janith@profile.com"
                          onChange={e => setEmail(e.target.value)}

                        /> */}
                        <input type="text"  class="form-control"
                          id="form6Example1"
                          className="form-control"
                          placeholder="janith@profile.com"
        onChange={(e) => validateEmail(e)}/>
        <span style={{
        
          color: 'red',
          fontSize : '11px'
        }}>{emailError}</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example2">
                          <b>Telephone</b>
                        </label>
                        <input
                          type="tel"
                          id="form6Example2"
                          className="form-control"
                          placeholder="070-XXXXXXX"
                          onChange={e => setTpnumber(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </p>

            </div>


          </div>
        </div>




        <div className="col-sm-4 ml-3">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            {/* <div className="card-header">
                <i
                  className="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Total1
              </div>

              <div className="card-body">
                <b className="card-title">Special title treatment</b>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
              
                  </p>
                
              </div> */}
            <table className="table table-hover table-borderless">

              <tbody>
                <tr className="h5">
                  <td >Sub Total</td>
                  <td className="text-right">Rs. 2000.00</td>
                </tr>
                <tr className="text-warning">
                  <td>Discout</td>
                  <td className="text-right">Rs. 500.00</td>
                </tr>
                <tr className="h5 text-success">
                  <td >Total Price</td>
                  <td className="text-right">Rs. 1500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col-sm-7 ml-4">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <i
              className="fa fa-chevron-circle-right fa-lg"
              aria-hidden="true"
            ></i>{" "}
            Delivery Address
          </div>

          <div className="card-body">
            <b className="card-title">Address</b>
            <p className="card-text">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                    placeholder="No3, Kadahapola Gedara, Mathale"
                    onChange={e => setAddress(e.target.value)}
                  />
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form6Example1">
                        <b>City</b>
                      </label>

                      <select id="demo_overview" className="form-control dropdown-toggle selectpicker show-tick" onChange={e => setCity(e.target.value)} data-role="select-dropdown" data-live-search="true">
                        <option >Badulla</option>
                        <option default>Bandarawela</option>
                        <option>Kadawatha</option>
                        <option>Kurunagala</option>
                        <option>Kandy</option>
                        <option>Galle</option>
                        <option>Jaffna</option>
                        <option>Dambulla</option>
                      </select>


                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form6Example2">
                        <b>Secondary Phone</b>
                      </label>
                      <input
                        type="tel"
                        id="form6Example2"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        className="form-control"
                        placeholder="070-XXXXXXX"
                        onChange={e => setStpnumber(e.target.value)}
                      />
                      <span className="validity"></span>
                    </div>
                  </div>
                </div>
              </form>
            </p>

          </div>


        </div>
      </div>


      <div className="col-sm-7 ml-4">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <i
              className="fa fa-chevron-circle-right fa-lg"
              aria-hidden="true"
            ></i>{" "}
            Payment Methods
          </div>
          <div className="card-body ml-2">
            <div className="form-check">

              <div className="tg-wrap"><table>

                <div className="form-check">
                  <tr>
                    <td><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onChange={e => setPaymethod(e.target.value)} checked /></td>
                    <td>

                      <CodComponent
                        height={40}
                        width={40}
                        className="ml-3 mr-3 mb-1"
                      />

                      {/* <img src="../../images/cod.png" style={{width: '55%', height: '50%'}}></img> */}

                    </td>
                    <td><option className="form-check-label" htmlFor="flexRadioDefault2" value="CashOnDelivery">
                      Cash on Delivery
                    </option></td>
                  </tr>

                  <tr>
                    <td><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /></td>
                    <td><SvgComponent
                      height={50}
                      width={50}
                      className="ml-3 mr-3 mb-1"

                    /></td>
                    <td><option className="form-check-label" htmlFor="flexRadioDefault2" value="VisaMaster">

                      Pay by Visa Master Credit/Debit Card
                    </option></td>
                  </tr>
                </div>
              </table></div>
            </div>


            

          </div>

         
        </div>
       
      </div>
      <div className="col-sm-7 ml-4">
        <div className="alert alert-success" role="alert">
        <i className="fa fa-cloud" aria-hidden="false"></i> 
        All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of (Address).
        </div>
        <button type="submit" className="btn btn-primary d-block mr-0 ml-auto mb-3">SUBMIT</button>
      </div>
      
      </form>
    </div>




  );
}

export default Orderdetails;
