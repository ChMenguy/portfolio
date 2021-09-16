import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub,faLinkedin , faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                    <img src={Logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li>
                                        <a href="https://github.com/ChMenguy">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/ChMengu">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/chmenguy/">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;