import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import serviceImg_1 from '../Assets/Images/front-end.jpg';
import serviceImg_2 from '../Assets/Images/2.jpg';
import serviceImg_3 from '../Assets/Images/3.jpg';
import serviceImg_4 from '../Assets/Images/4.jpg';
import serviceImg_5 from '../Assets/Images/5.jpg';
import serviceImg_6 from '../Assets/Images/cooperation.jpg';
import Html from '../Assets/Images/skills/html.png';
import Css from '../Assets/Images/skills/css.png';
import Js from '../Assets/Images/skills/js.png';
import ReactLogo from '../Assets/Images/skills/react.png';
import WordPressLogo from '../Assets/Images/skills/wordpress.png'; 
import Git from '../Assets/Images/skills/git.png';
import Slack from '../Assets/Images/skills/slack.png'; 
import Photoshop from '../Assets/Images/skills/photoshop.png';
import Illustrator from '../Assets/Images/skills/illustrator.png'; 
import Tailwind from '../Assets/Images/skills/tailwind.png';
import Bootstap from '../Assets/Images/skills/bootstrap.png'



class Service extends Component {
    render () {
        return (
            <div id="service" className="hx-service-area ptb-100-70">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <span>Ce que je fais</span>
                            <h2>Mes compétences</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_2}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Intégration Web</h3>
                                        <div>
                                            <img src={Html} width="130px"></img>
                                            <img src={Css} width="130px"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_1}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Front-End</h3>
                                        <div>
                                            <img src={Js} width="130px"></img>
                                            <img src={ReactLogo} width="130px"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_3}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Framework CSS</h3>
                                        <div>
                                            <img src={Bootstap} width="130px"></img>
                                            <img src={Tailwind} width="130px"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_4}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Gestionnaire de contenus</h3>
                                        <div>
                                        <img src={WordPressLogo} width="130px"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_5}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Outil de design</h3>
                                        <div>
                                            <img src={Photoshop} width="130px"></img>
                                            <img src={Illustrator} width="130px"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_6}/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Outils de collaboration</h3>
                                        <div>
                                            <img src={Git} width="130px"></img>
                                            <img src={Slack} width="130px"></img>  
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

export default Service;