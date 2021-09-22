import React, { Component } from 'react';
import { faGithub,faLinkedin ,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';
import CookieConsent from "react-cookie-consent";

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                    <img src={Logo} alt="logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li>
                                        <a href="https://github.com/ChMenguy" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/ChMengu" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/chmenguy/" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <CookieConsent
                    buttonText= "Accepter"
                    buttonStyle={{ backgroundColor: "#002735" , color: "white" }}
                >
                    Ce site Web utilise des cookies dans le but d'optimiser votre visite.
                </CookieConsent>
            </div>
        );
    }
}

export default Footer;