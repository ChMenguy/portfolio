import React, { Component } from 'react';
import serviceImg_1 from '../Assets/Images/front-end.jpg';
import serviceImg_2 from '../Assets/Images/htmlcss.jpg';
import serviceImg_3 from '../Assets/Images/framework.jpg';
import serviceImg_4 from '../Assets/Images/cms.jpg';
import serviceImg_5 from '../Assets/Images/webdesign.jpg';
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
                    <div className="row" >
                        <div className="row col-md-6 mb-4" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Intégration Web</h3> 
                                <div className="row">
                                    <div>
                                        <img src={Html} alt="html" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>HTML</h5>
                                    </div>
                                    <div>
                                        <img src={Css} alt="css" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>CSS</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="row col-md-6" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Front-End</h3> 
                                <div className="row mt-4">
                                    <div className="mx-2">
                                        <img src={Js} alt="html" width="130px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>JavaScript</h5>
                                    </div>
                                    <div className="mx-2">
                                        <img src={ReactLogo} alt="css" width="130px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>ReactJS</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>                        
                    </div>
                    <div className="row col-12">
                        <div className="row col-md-12 mb-4 ml-auto mr-auto" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Gestionnaire de contenus</h3> 
                                <div className="row" style={{justifyContent:'center'}}>
                                    <div>
                                        <img className="p-3" src={WordPressLogo} alt="html" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>WordPress</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row col-md-6 mb-4" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Framework CSS</h3> 
                                <div className="row">
                                    <div>
                                        <img className="p-3" src={Bootstap} alt="html" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Bootstap</h5>
                                    </div>
                                    <div>
                                        <img className="p-3" src={Tailwind} alt="css" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Tailwind</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="row col-md-6" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Outils de collaboration</h3> 
                                <div className="row mt-4">
                                    <div className="mx-2">
                                        <img src={Git} alt="html" width="130px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Git</h5>
                                    </div>
                                    <div className="mx-2">
                                        <img src={Slack} alt="css" width="130px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Slack</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>                        
                    </div>
                    {/*
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_2} alt="integration web"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Intégration Web</h3>
                                        <div>
                                            <img src={Html} width="130px" alt="HtmlLogo"></img>
                                            <img src={Css} width="130px" alt="CssLogo"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_1} alt="Front-End"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Front-End</h3>
                                        <div>
                                            <img src={Js} width="130px" alt="JsLogo"></img>
                                            <img src={ReactLogo} width="130px" alt="ReactLogo"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_3} alt="Framework CSS"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Framework CSS</h3>
                                        <div>
                                            <img src={Bootstap} width="130px" alt="BootstapLogo" ></img>
                                            <img src={Tailwind} width="130px" alt="TailwindLogo"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_4} alt="Gestionnaire de contenus"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Gestionnaire de contenus</h3>
                                        <div>
                                        <img src={WordPressLogo} width="130px" alt="WordPressLogo"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_5} alt="design"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Outil de design</h3>
                                        <div>
                                            <img src={Photoshop} width="130px" alt="photoshop"></img>
                                            <img src={Illustrator} width="130px" alt="illustrator"></img>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_6} alt="cooperation"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Outils de collaboration</h3>
                                        <div>
                                            <img src={Git} width="130px" alt="git"></img>
                                            <img src={Slack} width="130px" alt="slack"></img>  
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        );
    }
}

export default Service;