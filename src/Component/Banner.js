import React, { Component } from 'react';
import { faGithub,faLinkedin , faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/slide-2.jpg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides}/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>Christophe Menguy</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Developpeur Front-end React</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="theme-btn go-contact-area">Contactez Moi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Developpeur Front-End</p></div>
                <div className="social-links">
                    <ul>
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
            </section>
        )
    }
}

export default Banner;