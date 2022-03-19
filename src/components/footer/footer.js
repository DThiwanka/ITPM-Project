import React, { Component } from 'react';

class Footer extends Component {
    render() {

        return (
          <footer className="text-center text-light bg-dark">
              <div class="container py-5">
            <div class="row gy-5 gx-7">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h5 text-white">Contact Details</h5>
                    <p class="small text-muted">+947X - XXXXXXX</p>
                    <p class="small text-muted">+947X - XXXXXXX</p>
                    <p class="small text-muted">citymedic@gamil.com</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Address</h5>
                    <ul class="list-unstyled text-muted">
                    <p class="small text-muted">No 10,</p>
                    <p class="small text-muted">Jesmine Road</p>
                    <p class="small text-muted">Kande Waththa</p>
                    <p class="small text-muted">Mahanuwara</p>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 class="text-white mb-3">Other Services</h5>
                    <ul class="list-unstyled text-muted">
                    <p class="small text-muted">Delight Resturant</p>
                    <p class="small text-muted">JK Travellings</p>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-4">
                    <h5 class="text-white mb-3">Sponsors</h5>
                    <ul class="list-unstyled text-muted">
                    <p class="small text-muted">Johnson's Baby Soap</p>
                    <p class="small text-muted">Signal</p>
                    <p class="small text-muted">Visa Master Cards</p>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-4">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
          <div className="container pb-2">    
          </div>
          <div className="text-center text-light pt-2 pb-3">
            © 2022 Copyright @TeamRealm
            <a className="text-light" href="https:/TeamRealm.com/">
              <br/>All Right Reserved</a>
          </div>
          </div>
        </footer>
        );
    }
}

export default Footer;