import React from "react";
import "./orderdetails.css";
import SvgComponent from "./visa";
import CodComponent from "./cod"

function orderdetails() {
  return (

    <div>

      <h1 className="ml-4 h4 mt-3 text-decoration-underline"><i class="fa fa-check-circle" aria-hidden="true"></i>&nbsp;Order Details</h1>
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
                    />
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example1">
                          <b>Email</b>
                        </label>
                        <input
                          type="email"
                          id="form6Example1"
                          className="form-control"
                          placeholder="janith@profile.com"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example2">
                          <b>Telephone</b>
                        </label>
                        <input
                          type="text"
                          id="form6Example2"
                          className="form-control"
                          placeholder="070-XXXXXXX"
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
            <table class="table table-hover table-borderless">

              <tbody>
                <tr class="h5">
                  <td >Sub Total</td>
                  <td class="text-right">Rs. 2000.00</td>
                </tr>
                <tr class="text-warning">
                  <td>Discout</td>
                  <td class="text-right">Rs. 500.00</td>
                </tr>
                <tr class="h5 text-success">
                  <td >Total Price</td>
                  <td class="text-right">Rs. 1500.00</td>
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
                  />
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form6Example1">
                        <b>City</b>
                      </label>

                      <select id="demo_overview" class="form-control dropdown-toggle selectpicker show-tick" data-role="select-dropdown" data-live-search="true">
                        <option >Badulla</option>
                        <option Default>Bandarawela</option>
                        <option>Kadawatha</option>
                        <option>Kurunagala</option>
                      </select>


                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form6Example2">
                        <b>Secondary Phone</b>
                      </label>
                      <input
                        type="number"
                        id="form6Example2"
                        className="form-control"
                        placeholder="070-XXXXXXX"
                      />
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
            <div class="form-check">

              <div class="tg-wrap"><table>

                <div class="form-check">
                  <tr>
                    <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /></td>
                    <td>

                      <CodComponent
                        height={40}
                        width={40}
                        className="ml-3 mr-3 mb-1"
                      />

                      {/* <img src="../../images/cod.png" style={{width: '55%', height: '50%'}}></img> */}

                    </td>
                    <td><label class="form-check-label" for="flexRadioDefault2">
                      Cash on Delivery
                    </label></td>
                  </tr>

                  <tr>
                    <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /></td>
                    <td><SvgComponent
                      height={50}
                      width={50}
                      className="ml-3 mr-3 mb-1"

                    /></td>
                    <td><label class="form-check-label" for="flexRadioDefault2">

                      Pay by Visa Master Credit/Debit Card
                    </label></td>
                  </tr>
                </div>
              </table></div>
            </div>




          </div>


        </div>
      </div>
      <div className="col-sm-7 ml-4">
        <div class="alert alert-success" role="alert">
        <i class="fa fa-cloud" aria-hidden="false"></i> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lacinia lorem, nec elementum lectus. Integer in tortor in magna posuere dictum. Phasellus consectetur nibh justo, maximus rhoncus ipsum gravida in. In malesuada orci odio, quis congue neque facilisis vitae. Aenean tempus convallis nibh.
        </div>
      </div>
    </div>




  );
}

export default orderdetails;
