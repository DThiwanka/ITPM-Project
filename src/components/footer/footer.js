import React from "react";
import '../../CSS/Footer.css'

//Import Footer Icons
import visa_ico from '../../Icons/Footer_Icons/visa.png'
import master_ico from '../../Icons/Footer_Icons/mc_symbol_opt_73_3x.png'
import facebook_ico from '../../Icons/Footer_Icons/Social_Media_Icons/facebook.png'
import instagram_ico from '../../Icons/Footer_Icons/Social_Media_Icons/instagram.png'
import linkedin_ico from '../../Icons/Footer_Icons/Social_Media_Icons/linkedin.png'
import twitter_ico from '../../Icons/Footer_Icons/Social_Media_Icons/twitter.png'

const footer = () => {
    return (
        <div className="footerContainer">

            {/* Footer Content */}
            <div className="FooterContent">
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
                    <a href="https://www.johnsonsbaby.com/" target="_blank"><p>Johnson's Baby Soap</p></a>
                    <a href="https://www.signal.lk/toothpaste.html" target="_blank"><p>Signal</p></a>
                    <p>VISA & MASTER Cards</p>
                    <a href="https://www.visa.com.lk/" target="_blank"><img className="visacard_img" src={visa_ico} /></a> <a href="https://www.mastercard.us/en-us.html" target="_blank"><img className="mastercard_img" src={master_ico} /></a>
                </div>

                <div className="footerBoxs">
                    <h3><u>Follow Us</u></h3>
                    <a href="https://www.linkedin.com/" target="_blank"><img className="socialmedia_imgs" src={linkedin_ico} /></a> <a href="https://twitter.com/?lang=en" target="_blank"><img className="socialmedia_imgs" src={twitter_ico} /></a> <a href="https://www.facebook.com/" target="_blank"><img className="socialmedia_imgs" src={facebook_ico} /></a> <a href="https://www.instagram.com/" target="_blank"><img className="socialmedia_imgs" src={instagram_ico} /></a>
                </div>
            </div>

            <div className="copyRight">
                <h4>
                    Copyright &copy;Team_Realm <br />
                    AllRight Reserved
                </h4>
            </div>


        </div>
    )

};

export default footer;
