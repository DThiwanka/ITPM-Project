import React from "react";
import "./orderdetails.css";

function orderdetails() {
  return (
    <body>
      <div className="mb-2">
        <div className="row mt-3 ">


          <div className="col-sm-7">
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
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form6Example1">
                            <b>First name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form6Example2">
                            <b>Last name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example2"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </p>
                
              </div>

              
            </div>
          </div>




          <div className="col-sm-4 mt-3">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-header">
                <i
                  className="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Total
              </div>

              <div className="card-body">
                <b className="card-title">Special title treatment</b>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-7">
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
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form6Example1">
                            <b>First name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form6Example2">
                            <b>Last name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example2"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </p>
                
              </div>
            </div>
          </div>
         
        </div>

        <div className="row mt-3">
          <div className="col-sm-7">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-header">
                <i
                  className="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Payment Methods
              </div>
              <div className="card-body">
                
                <b className="card-title">Special title treatment</b>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default orderdetails;
