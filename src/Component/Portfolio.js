import React, { Component } from 'react';
import Gallery_1 from '../Assets/Images/gallery/tabata_app.png';
import Gallery_2 from '../Assets/Images/gallery/portfolio2.png';
import Gallery_3 from '../Assets/Images/gallery/portfolioCrossfitWarrior.png';
import Gallery_4 from '../Assets/Images/gallery/cross_programs.png'

const projects = [{name:'CROSS-PROGRAMS',desc:'REACTJS - TAILWIND - RESPONSIVE - COACHING', img : Gallery_4 },
                {name:'APPLICATION TABATA',desc:'REACTJS - REACT ROUTER - TAILWIND - WORKOUT', img : Gallery_1 },
                {name:'CROSSFIT WARRIOR',desc:'REACTJS - API - BOOTSTRAP - WOD', img : Gallery_3 }                 
                ]


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
                            {
                                projects.map(project=>(
                                    <div className="row" style={{margin : "20px"}}>
                                        <div className="col-lg-12" style={{color:"white"}}> 
                                            <h3 style={{color:"white"}}>{project.name}</h3>
                                            <h6 style={{color:"white",fontSize:"14px"}}>{project.desc}</h6>
                                        </div>
                                        <div className="col-lg-9 offset-lg-3"> 
                                            <img src={project.img} alt="portfolio"></img>
                                        </div>
                                    </div>      
                                ))
                            }
 
                            {/*<div className="row" style={{margin : "20px"}}>
                                <div className="col-lg-12" style={{color:"white"}}> 
                                    <h3 style={{color:"white"}}>SITE PART NUMERIQUE</h3>
                                    <h6 style={{color:"white",fontSize:"14px"}}>CREATION DE SITE - RESPONSIVE - WORDPRESS </h6>
                                </div>
                                <div className="col-lg-12"> 
                                    <img src={Gallery_2} alt="portfolio"></img>
                                </div>
                            </div>*/}

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Porfolio;