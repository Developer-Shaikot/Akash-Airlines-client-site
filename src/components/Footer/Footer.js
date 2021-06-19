import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  
    const ourAddress = [
        {name: "DHAKA - BANGLADESH" },
    
       
    ]
  
    return (
        <footer className=" container">
        <div className="container">
            <div className="py-5 ml-2">
                    
                    <FooterCol key={4} menuTitle="Our Address"  menuItems={ourAddress}> 
                        <ul className="social-media list-inline text-center">
                            <li className="list-inline-item text-center"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-primary">+8801833440993</button>
                        </div>
                    </FooterCol>
                </div>
                <p className="mt-5 text-white">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
        
    );
};

export default Footer;