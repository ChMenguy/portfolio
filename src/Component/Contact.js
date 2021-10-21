import React from 'react';
import { InlineWidget } from "react-calendly";

function Contact () {
        return (
                <div id="contact" className="contact-page-area section-padding go-contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5" style={{marginTop:'100px', marginBottom : '100px'}}>
                                <div className="contact-page-item">
                                    <h2>Mes coordonnées</h2>
                                    <h3>Un projet?</h3>
                                        <p>
                                            N'hésitez pas à me contacter en prenant un rendez-vous directement en ligne ou via l'adresse mail ci-jointe. Nous pourrons ainsi déterminer vos besoins, vos objectifs et ainsi formaliser une solution personnalisée.
                                        </p> 
                                    <div className="email">
                                        <h3>Email </h3>
                                        <span>christophemenguy0@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-7">                               
                                <InlineWidget 
                                    url="https://calendly.com/christophemenguy0/reunion-projet-web" 
                                    styles={{
                                        minHeight : '0px',
                                        height: '780px',
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                </div> 
        );
    }

export default Contact;