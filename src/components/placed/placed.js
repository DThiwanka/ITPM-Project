import React from 'react'
import Deliverysvg from './Deliverysvg'
import './placed.css'

function placed() {
  return (
    <div>

<div className="flex-container">

<div className="flex-child magenta">
<div className="hclass   mt-3">
      <h1>Order <d> Placed </d>!</h1>
      <p>Order will recived as soon as possible<br/>
      within two or three working days.
      </p>
      <p style={{color: '#2949ff'}}>Thanks for deaing with us :)</p>
      </div>
<Deliverysvg
    height={500}
    width={500}
    />
</div>

<div className="flex-child green">
<div className="card bg-light shadow p-3 mb-10 bg-white rounded mt-5">
  <div className="card-body">
    <h5 className="card-title">CITY MEDICALS</h5>
    <h6 className="card-subtitle mb-2 text-muted">Online Payment Receipt</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Receipt ID : .............</p>
    <p className="card-text">Client ID : ..............</p>
    <p className="card-text">Items: </p>
        <ul>
            <li>ttt</li>
            <li>ttt</li>
            &nbsp;&nbsp; more
        </ul>
    <button href="/" className="card-link btn btn-danger">Another link</button>
    <button href="/" className="card-link btn btn-primary">Another link</button>
  </div>
</div>
</div>

</div>

    </div>
  )
}

export default placed
