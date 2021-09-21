import React, { Component, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReactDOM from 'react-dom';


function Contact () {

        const form = useRef()

        const [emailSend , setEmailSend] = useState ({
            trysend : false,
            message : null,
            color : null
        })

        const sendEmail = (e) =>{

            e.preventDefault();

            emailjs.sendForm('service_trh49bs', 'template_gtv5eyl', form.current, 'user_E3SvJ23geAoN37LK8NooH')
            .then((result) => {
                setEmailSend({
                    trysend : true,
                    message : 'Le message a bien été envoyé',
                    color : 'success'
                })
            }, (error) => {
                setEmailSend({
                    trysend : true,
                    message : "Erreur lors de l'envoi. Merci de réessayer",
                    color : 'alert'
                })
            });
        }

        return (
                <div id="contact" className="contact-page-area section-padding go-contact-area">
                    <div className="container">
                        { emailSend.trysend ?
                            <div class={`alert alert-${emailSend.color}`} role="alert">
                                {emailSend.message}
                            </div>
                            : ''
                        }
                        
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <div className="contact-page-item">
                                    <h2>Mes coordonnées</h2>
                                    <h3>Un projet?</h3>
                                        <p>
                                            N'hésitez pas à me contacter via ce formulaire ou l'adresse mail ci-jointe. Nous pourrons ainsi déterminer vos besoins, vos objectifs et ainsi formailiser une solutions personnalisée
                                        </p> 
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
                                        <form ref={form} onSubmit = {sendEmail} className="contact-validation-active" id="contact-form">
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
                                                <textarea className="form-control" name="message"  id="note" placeholder="Votre message..."></textarea>
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

export default Contact;