import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


function Contact () {
        const [emailSend , setEmailSend] = useState ({
                    trysend : false,
                    message : null,
                    color : null
                })
        const [load,setLoad] = useState(false)

        const { register, handleSubmit } = useForm();
        const onSubmit = (data, e) => {
            setLoad(true)
            emailjs.sendForm('service_trh49bs', 'template_gtv5eyl', '#contact-form', 'user_E3SvJ23geAoN37LK8NooH')
                .then(()=>{
                    setEmailSend({
                        trysend : true,
                        message : 'Le message a bien été envoyé',
                        color : 'success'
                    })
                    setLoad(false)
                })
        };


        const onError = (errors, e) => {
            setEmailSend({
                trysend : true,
                message : 'Merci de renseigner tous les champs obligatoires',
                color : 'danger'
            })
        };
  
        return (
                <div id="contact" className="contact-page-area section-padding go-contact-area">
                    <div className="container">
                        { emailSend.trysend ?
                            <div className={`alert alert-${emailSend.color}`} role="alert">
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
                                            N'hésitez pas à me contacter via ce formulaire ou l'adresse mail ci-jointe. Nous pourrons ainsi déterminer vos besoins, vos objectifs et ainsi formaliser une solution personnalisée.
                                        </p> 
                                    <div className="email">
                                        <h3>Email </h3>
                                        <span>christophemenguy0@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-7">
                                <div className="contact-area contact-area-2 contact-area-3">
                                    <h2>Formulaire de contact</h2>
                                    <div className="contact-form">
                                        <form  onSubmit={handleSubmit(onSubmit, onError)} className="contact-validation-active" id="contact-form">
                                            <div className="half-col">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Nom*" {...register("name", { required: true })} style= {{color : 'white'}}/>
                                            </div>
                                            <div className="half-col">
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Email*" {...register("email", { required: true })} style= {{color : 'white'}}/>
                                            </div>
                                            <div className="half-col">
                                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Telephone" {...register("phone", { required: false })} style= {{color : 'white'}}/>
                                            </div>
                                            <div className="half-col">
                                                <input type="text" name="address" id="address" className="form-control" placeholder="Adresse" {...register("address", { required: false })} style= {{color : 'white'}}/>
                                            </div>
                                            <div>
                                                <textarea className="form-control" name="message"  id="note" placeholder="Votre message...*" {...register("message", { required: true })} style= {{color : 'white'}}></textarea>
                                            </div>
                                            <div className="submit-btn-wrapper">
                                                <button type="submit" className="theme-btn-s3">{!load ? 'Envoyer' : "En cours..."}</button>
                                                <div id="loader">
                                                    <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                                </div>
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