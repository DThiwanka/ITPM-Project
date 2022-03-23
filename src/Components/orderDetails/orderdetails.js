import React, { Component } from "react";
import "./orderdetails.css";

function orderdetails() {
  return (
    <body>
      <div class="mb-2">
        <div class="row mt-3 ">


          <div class="col-sm-7">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-header">
                <i
                  class="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Payment Methods
              </div>

              <div class="card-body">
                <b class="card-title">Full Name</b>
                <p class="card-text">
                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form6Example3"
                        class="form-control"
                      />
                    </div>

                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example1">
                            <b>First name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example1"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">
                            <b>Last name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example2"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </p>
                
              </div>

              
            </div>
          </div>




          <div class="col-sm-4 mt-3">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-header">
                <i
                  class="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Total
              </div>

              <div class="card-body">
                <b class="card-title">Special title treatment</b>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-sm-7">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-header">
                <i
                  class="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Payment Methods
              </div>
              <div class="card-body">
                <b class="card-title">Full Name</b>
                <p class="card-text">
                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form6Example3"
                        class="form-control"
                      />
                    </div>

                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example1">
                            <b>First name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example1"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">
                            <b>Last name</b>
                          </label>
                          <input
                            type="text"
                            id="form6Example2"
                            class="form-control"
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

        <div class="row mt-3">
          <div class="col-sm-7">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-header">
                <i
                  class="fa fa-chevron-circle-right fa-lg"
                  aria-hidden="true"
                ></i>{" "}
                Payment Methods
              </div>
              <div class="card-body">
                
                <b class="card-title">Special title treatment</b>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" class="btn btn-primary">
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
