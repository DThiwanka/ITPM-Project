import React, { Component } from 'react';

class Footer extends Component {
    render() {

        return (
          <footer className="text-center text-light bg-dark flex-end">
              <div className="container py-5">
            <div className="row gy-5 gx-7">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h5 text-white">Contact Details</h5>
                    <p className="small text-muted">+947X - XXXXXXX</p>
                    <p className="small text-muted">+947X - XXXXXXX</p>
                    <p className="small text-muted">citymedic@gamil.com</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Address</h5>
                    <ul className="list-unstyled text-muted">
                    <p className="small text-muted">No 10,</p>
                    <p className="small text-muted">Jesmine Road</p>
                    <p className="small text-muted">Kande Waththa</p>
                    <p className="small text-muted">Mahanuwara</p>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-4">
                    <h5 className="text-white mb-3">Other Services</h5>
                    <ul className="list-unstyled text-muted">
                    <p className="small text-muted">Delight Resturant</p>
                    <p className="small text-muted">JK Travellings</p>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-4">
                    <h5 className="text-white mb-3">Sponsors</h5>
                    <ul className="list-unstyled text-muted">
                    <p className="small text-muted">Johnson's Baby Soap</p>
                    <p className="small text-muted">Signal</p>
                    <p className="small text-muted">Visa Master Cards</p>
                    </ul>
                </div>

                {/* <div className="col-lg-4 col-md-4">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div> */}
            </div>
          <div className="text-center text-light pt-1 pb-5">
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