import React, { Component } from 'react';
import Html from '../Assets/Images/skills/html.png';
import Css from '../Assets/Images/skills/css.png';
import Js from '../Assets/Images/skills/js.png';
import ReactLogo from '../Assets/Images/skills/react.png';
import WordPressLogo from '../Assets/Images/skills/wordpress.png'; 
import Git from '../Assets/Images/skills/git.png';
import Slack from '../Assets/Images/skills/slack.png'; 

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
                        <div className="row col-md-6 mb-4" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Front-End</h3> 
                                <div className="row mt-4">
                                    <div className="mx-2">
                                        <img src={Js} alt="javascript" width="140px" className="p-3"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>JavaScript</h5>
                                    </div>
                                    <div className="mx-2">
                                        <img src={ReactLogo} alt="react" width="140px" className="p-3"></img>
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
                                        <img className="p-3" src={WordPressLogo} alt="wordpress" width="150px"></img>
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
                                        <img className="p-3" src={Bootstap} alt="bootstrap" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Bootstap</h5>
                                    </div>
                                    <div>
                                        <img className="p-3" src={Tailwind} alt="tailwind" width="150px"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Tailwind</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="row col-md-6 mb-4" style={{justifyContent:'center'}}>
                            <div>
                                <h3  style={{color:"white", textAlign : 'center'}}>Outils de collaboration</h3> 
                                <div className="row mt-4">
                                    <div className="mx-2">
                                        <img src={Git} alt="git" width="150px" className="p-3"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Git</h5>
                                    </div>
                                    <div className="mx-2">
                                        <img src={Slack} alt="slack" width="150px" className="p-3"></img>
                                        <h5 style={{color:"white", textAlign : 'center'}}>Slack</h5>
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