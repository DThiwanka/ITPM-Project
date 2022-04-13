import React from "react";
import '../CSS/Footer.css'

//Import Footer Icons
import visa_ico from '../Icons/Footer_Icons/visa.png'
import master_ico from '../Icons/Footer_Icons/mc_symbol_opt_73_3x.png'
import facebook_ico from '../Icons/Footer_Icons/Social_Media_Icons/facebook.png'
import instagram_ico from '../Icons/Footer_Icons/Social_Media_Icons/instagram.png'
import linkedin_ico from '../Icons/Footer_Icons/Social_Media_Icons/linkedin.png'
import twitter_ico from '../Icons/Footer_Icons/Social_Media_Icons/twitter.png'

const Footer = () => {
    return (
        <div className="footerContainer">

            <div id="firstFooterBox" className="footerBoxs">
                <h3><u>Contact Details</u></h3>
                <p>+947X - XXXXXXX</p>
                <p>+947X - XXXXXXX</p>
                <p>citymedic@gmail.com</p>
            </div>

            <div className="footerBoxs">
                <h3><u>Address</u></h3>
                <p>
                    No 10, <br />
                    Jesmin Road, <br />
                    Kande Waththa, <br />
                    Mahanuwara
                </p>
            </div>

            <div className="footerBoxs">
                <h3><u>Other Services</u></h3>
                <p>Delight 8 Resturant</p>
                <p>JK Travellings</p>
            </div>

            <div className="footerBoxs">
                <h3><u>Sponsers</u></h3>
                <p>Johnson's Baby Soap</p>
                <p>Signal</p>
                <p>VISA & MASTER Cards</p>
                <img className="visacard_img"  src={visa_ico}/> <img className="mastercard_img" src={master_ico}/>
            </div>

            <div className="footerBoxs">
                <h3><u>Follow Us</u></h3>
                <img className="socialmedia_imgs" src={linkedin_ico}/> <img className="socialmedia_imgs" src={twitter_ico}/> <img className="socialmedia_imgs" src={facebook_ico}/> <img className="socialmedia_imgs" src={instagram_ico}/>
            </div>

        </div>
    )

};

export default Footer;
