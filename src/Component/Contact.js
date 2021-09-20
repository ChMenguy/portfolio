import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component {
    
    render() {
        
        return (
            <div id="contact" className="contact-page-area section-padding go-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="contact-page-item">
                                <h2>Mes coordonnées</h2>
                                <p>Un projet? N'hésitez pas à me contacter via ce formulaire</p>
                                <div className="email">
                                    <h3>Email</h3>
                                    <span>christophemenguy0@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="contact-area contact-area-2 contact-area-3">
                                <h2>Formulaire de contact</h2>
                                <div className="contact-form">
                                    <form method="post" className="contact-validation-active" id="contact-form">
                                        <div className="half-col">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Nom" />
                                        </div>
                                        <div className="half-col">
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="half-col">
                                            <input type="text" name="phone" id="phone" className="form-control" placeholder="Telephone"/>
                                        </div>
                                        <div className="half-col">
                                            <input type="text" name="address" id="address" className="form-control" placeholder="Adresse"/>
                                        </div>
                                        <div>
                                            <textarea className="form-control" name="note"  id="note" placeholder="Votre message..."></textarea>
                                        </div>
                                        <div className="submit-btn-wrapper">
                                            <button type="submit" className="theme-btn-s3">Envoyer</button>
                                            <div id="loader">
                                                <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                            </div>
                                        </div>
                                        <div className="clearfix error-handling-messages">
                                            <div id="success">Thank you</div>
                                            <div id="error"> Error occurred while sending email. Please try again later. </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;