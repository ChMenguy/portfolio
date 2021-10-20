import React, { Component } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Assets/Images/gallery/tabataportfolio.png';
import Gallery_2 from '../Assets/Images/gallery/portfolio2.png';
import Gallery_3 from '../Assets/Images/gallery/portfolioCrossfitWarrior.png';

import WordPressLogo from '../Assets/Images/skills/wordpress.png'; 
import Html from '../Assets/Images/skills/html.png';
import Css from '../Assets/Images/skills/css.png';
import ReactLogo from '../Assets/Images/skills/react.png';

class Porfolio extends Component {

    state = {
        isOpen : false,
    }

    render() {
        
        return (
            <section id="portfolio" className="gallery-section section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>Projets réalisés</h2>
                                </div>
                            </div>
                            <div className="row" style={{margin : "20px", padding:"20px", backgroundColor:"#202020"}}>                                
                                <div className="col-lg-4" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>APPLICATION TABATA</h3>
                                    <h6 style={{color:"white"}}>REACTJS - REACT ROUTER - TAILWIND - WORKOUT</h6>
                                </div>
                                <div className="col-lg-8"> 
                                    <img src={Gallery_1} alt="portfolio"></img>
                                </div>                                
                            </div> 
                            <div className="row" style={{margin : "20px"}}>
                                <div className="col-lg-4" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>SITE PART NUMERIQUE</h3>
                                    <h6 style={{color:"white"}}>CREATION DE SITE - RESPONSIVE - WORDPRESS </h6>
                                </div>
                                <div className="col-lg-8"> 
                                    <img src={Gallery_2} alt="portfolio"></img>
                                </div>
                            </div>
                            <div className="row" style={{margin : "20px", padding:"20px", backgroundColor:"#202020"}}>                                
                                <div className="col-lg-4" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>CROSSFIT WARRIOR</h3>
                                    <h6 style={{color:"white"}}>REACTJS - API - BOOTSTRAP - WOD</h6>
                                </div>
                                <div className="col-lg-8"> 
                                    <img src={Gallery_3} alt="portfolio"></img>
                                </div>                                
                            </div> 

                            {/*
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                              
                                <div className={this.state.isOpen ? "grid" : "grid open"
                                    }>
                                    <div>
                                        <h3 style={{color: "white"}}>CRÉATION DE SITE <img src={WordPressLogo} alt="wordpress" style={{width:"32px"}}></img></h3> 
                                        
                                    </div>

                                   <img src={Gallery_1} className="img img-responsive" alt="" />
                                    <div className="icon">
                                        <a href="https://www.artnumeriqueplanetec7.fr/" target="_blank" rel="noopener noreferrer" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} /> 
                                        </a>
                                    </div>
                                </div>
                                <div className={
                                    this.state.isOpen ? "grid" : "grid open"}>
                                    <h3 style={{color: "white"}}>
                                        INTEGRATION WEB
                                        <img src={Html} style={{width:"32px"}} alt="html"></img>
                                        <img src={Css} style={{width:"32px"}} alt="css"></img>
                                    </h3> 
                                    <img src={Gallery_2} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <h3 style={{color: "white"}}>
                                        APPLICATION WEB
                                        <img src={ReactLogo} style={{width:"32px"}} alt="react"></img>
                                    </h3> 

                                    <img src={Gallery_6} alt="portfolio" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                                */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Porfolio;