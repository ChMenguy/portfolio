import React, { Component } from 'react';

class PricingPlan extends Component {
    render() {
        return (
            <div className="pricing-area ptb-100-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span>I Give You The Best</span>
                        <h2>Mes Tarifs</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-l2 col-md-4 col-sm-6 grid p-out">
                                    <div className="price-item">
                                        <div className="pricing-header">
                                            <h3>Création de site Vitrine</h3>
                                        </div>
                                        <div className="pricing-table">
                                            <div className="price-sub-header pricing-header-c">
                                            <h5>A partir de</h5>
                                            <h4>2500<span>€ HT</span></h4>
                                
                                            </div>
                                            <ul>
                                                <li>Developpement</li>
                                                <li>Design</li>
                                                <li>Responsive</li>
                                                <li>Référencement</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <div className="theme-btn"><a href="#contact">Demander un devis</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-l2 col-md-4 col-sm-6  grid p-out">
                                    <div className="price-item price-item-2">
                                        <div className="pricing-header">
                                            <h3>Tarif Journalier </h3>
                                        </div>
                                        <div className="pricing-table pricing-table-2">
                                            <div className="price-sub-header">
                                                <h5>A partir de</h5>
                                                <h4>350<span>€</span></h4>
                                                <h5>HT Par Jour</h5>
                                            </div>
                                            <ul>
                                                <li>Developpement spécifiques</li>
                                                <li>Web Development</li>
                                                <li>Responsive Design</li>
                                                <li>Creative Design</li>
                                            </ul>
                                            <div className="pricing-footer pricing-footer-2">
                                                <div className="theme-btn"><a href="#contact">Demander un devis</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-l2 col-md-4 col-sm-6 grid  p-out p-out-t">
                                    <div className="price-item price-item-3">
                                        <div className="pricing-header">
                                            <h3>Premium</h3>
                                        </div>
                                        <div className="pricing-table">
                                            <div className="price-sub-header pricing-header-b">
                                                <h4><span>$</span>50</h4>
                                                <h5>Per Month</h5>
                                            </div>
                                            <ul>
                                                <li>Web Design</li>
                                                <li>Web Development</li>
                                                <li>Responsive Design</li>
                                                <li>Creative Design</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <div className="theme-btn"><a href="#contact">Demander un devis</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingPlan;