import './CertificationMichael.css';
import React from "react";
import logo_the_hague from "../Images/logo_haagse1.png";
import logo_novi from "../Images/logo_novi.png";
import logo_sae from "../Images/logo_SAE.png";

function CertificationMichael() {


    return (


        <div className="Container-WhyUs" style={{backgroundColor:"white"}}>

            <div className="Container-WhyUs-left">
                <h1 style={{color:"black"}}>His Certifications, Expertises</h1>
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content" >
                    <div className="Container-WhyUs-right-title"
                         style={{color:"#1c6077",
                             display:"flex",
                             justifyContent:'center',
                             alignItems:"center"
                    }}>
                        {/*The Hague University (The Hague, The Netherlands)*/}
                        <img src={logo_the_hague} alt="Mike giving direction during a shoot"
                             className="logo_university" style={{width:"250px"}}/>
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text" >
                            {/*<i className="fa-solid fa-circle-check"></i>*/}
                            <p style={{color:"#9ea700", fontSize:"20px", fontWeight:"700"}}>
                                The Hague University (The Hague, The Netherlands)
                            </p>
                        </div>
                        <div className="icon-text">
                            <p style={{color:"black"}}>
                                Certified in <strong>Communication, Multimedia Design </strong>from The Hague University,
                                where he earned a Bachelor in <strong>Information Technology </strong>with a strong focus
                                on digital problem-solving and creative media production.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Communication</strong> : Communicating effectively with a target audience through digital media.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >UX/UI Design</strong> : Designing intuitive interfaces (UI) and smooth user experiences (UX).
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Interaction Design</strong> : Designing how users interact with a digital product through actions and feedback.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Digital Product Design</strong> : Building complete digital products by combining strategy, usability, and visual design.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content" >
                    <div className="Container-WhyUs-right-title"
                         style={{color:"#1c6077",
                             display:"flex",
                             justifyContent:'center',
                             alignItems:"center"
                         }}>
                        {/*The Hague University (The Hague, The Netherlands)*/}
                        <img src={logo_novi} alt="Mike giving direction during a shoot"
                             className="logo_university" style={{width:"250px"}}/>
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text" >
                            {/*<i className="fa-solid fa-circle-check"></i>*/}
                            <p style={{color:"#d96a30", fontSize:"20px", fontWeight:"700"}}>
                                The Novi University (Utrecht, The Netherlands)
                            </p>
                        </div>
                        <div className="icon-text">
                            <p style={{color:"black"}}>
                                Certified in <strong>Front-End Development </strong>from The Novi University,
                                Where he learned to build modern, high-performance web applications, especially
                                <strong>Single Page Applications (SPA).</strong>
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >React</strong> : Building dynamic user interfaces and component-based applications.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >JavaScript</strong> : Adding logic, interactivity, and functionality to web applications.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >HTML</strong> : Structuring web content with clean, semantic markup.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >CSS</strong> : Styling interfaces and creating responsive layouts.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >  Git & GitHub</strong> : Version control, collaboration, and project management.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >  WebStorm & IntelliJ (IDEs)</strong> : Working with professional
                                development environments for efficient coding.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >   Figma (Wireframes & Prototypes)</strong> :
                                Designing wireframes, UI layouts, and interactive prototypes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title"
                         style={{color:"#1c6077",
                             display:"flex",
                             justifyContent:'center',
                             alignItems:"center"
                         }}>
                        {/*The Hague University (The Hague, The Netherlands)*/}
                        <img src={logo_sae} alt="Mike giving direction during a shoot"
                             className="logo_university" style={{width:"250px"}}/>
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text" >
                            {/*<i className="fa-solid fa-circle-check"></i>*/}
                            <p style={{color:"#034da5", fontSize:"20px", fontWeight:"700"}}>
                                SAE Institute (Rotterdam, The Netherlands)
                            </p>
                        </div>
                        <div className="icon-text">
                            <p style={{color:"black"}}>
                                Certified in <strong>Electronic Music Production </strong>from SAE Institute,
                                Where he learned the principles of <strong>electronic music creation, beatmaking,
                                vocal recording, </strong>and <strong>professional audio production.</strong>
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Electronic Music Production</strong> : Understanding sound design, arrangement, synthesis, and creative composition.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Beatmaking</strong> : Creating drum patterns, grooves, and rhythmic structures.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Vocal recording</strong> : Capturing clean, high-quality vocals with studio techniques.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Use of Plugins</strong> : Working with synthesizers, mixing plugins, and sound-processing tools.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Logic Pro/ FL Studio/ Cubase</strong> : Beat-making, Producing, arranging, and mixing complete tracks.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >Pro Tools</strong> : A professional showcase site to present services.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default CertificationMichael;