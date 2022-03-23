import React from 'react'
import './header.css'

const header = () => {
  return (
    <div>
      <div class="m-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a href="/" class="navbar-brand">
              <h4>CITY MEDICALS</h4>
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <form class="d-flex rl-5">
                  <div class="col-rt-3 equal-height px-5">
                    <div class="sb-example-3">
                      <div class="search__container">
                        <input
                          class="search__input"
                          type="text"
                          placeholder="Search Pharmacy Items..."
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="navbar-nav ms-auto">
                <a href="/" class="nav-item nav-link">
                  <i class="fa fa-user fa-2xl px-3 blackiconcolor" aria-hidden="true"></i>
                </a>
                <a href="/" class="nav-item nav-link">
                  <i
                    class="fa fa-shopping-cart fa-2xl px-3 blackiconcolor"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="/" class="nav-item nav-link">
                  <i class="fa fa-bars fa-2xl px-3 blackiconcolor" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default header
