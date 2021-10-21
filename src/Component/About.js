import React, { Component } from 'react';
import aboutImg from '../Assets/Images/about.png';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Christophe MENGUY || Developpeur Front-End ReactJS</span>
                                    <h2>A PROPOS</h2>
                                </div>
                                <p style={{color:'white'}}>Je met à votre service mon expertise pour la réalisation de tous vos projets digitaux du simple site vitrine à l'application web plus complexe en passant par le site de vente en ligne. Ainsi je vous réaliserai une proposition détaillée et totalement personnalisée à votre entreprise ainsi qu'à vos objectifs</p>
                                <p style={{color:'white'}}>Mes services comprennent, au delà du developpement technique de la solution demandée, un véritable regard d'expert afin d'opter pour la meilleure option pour votre entreprise.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg} alt="profil"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;