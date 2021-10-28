import React, { Component } from 'react';
import Gallery_1 from '../Assets/Images/gallery/tabataportfolio.png';
import Gallery_2 from '../Assets/Images/gallery/portfolio2.png';
import Gallery_3 from '../Assets/Images/gallery/portfolioCrossfitWarrior.png';

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
                            <div className="row" style={{margin : "20px", padding:"20px"}}>                                
                                <div className="col-lg-12" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>APPLICATION TABATA</h3>
                                    <h6 style={{color:"white",fontSize:"14px"}}>REACTJS - REACT ROUTER - TAILWIND - WORKOUT</h6>
                                </div>
                                <div className="col-lg-12"> 
                                    <img src={Gallery_1} alt="portfolio"></img>
                                </div>                                
                            </div> 
                            <div className="row" style={{margin : "20px", padding:"20px"}}>                                
                                <div className="col-lg-12" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>CROSSFIT WARRIOR</h3>
                                    <h6 style={{color:"white" , fontSize:"14px"}}>REACTJS - API - BOOTSTRAP - WOD</h6>
                                </div>
                                <div className="col-lg-12"> 
                                    <img src={Gallery_3} alt="portfolio"></img>
                                </div>                                
                            </div>                             
                            <div className="row" style={{margin : "20px"}}>
                                <div className="col-lg-12" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>SITE PART NUMERIQUE</h3>
                                    <h6 style={{color:"white",fontSize:"14px"}}>CREATION DE SITE - RESPONSIVE - WORDPRESS </h6>
                                </div>
                                <div className="col-lg-12"> 
                                    <img src={Gallery_2} alt="portfolio"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Porfolio;