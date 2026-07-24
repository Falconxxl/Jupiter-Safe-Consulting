import './BrandIdentity.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";
import desktop_banner_branding from "../Images/background_sky_green_yellow12.png";
import mobile_banner from "../Images/background_Brenda_blue_mobile8.png";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
// import React from "react";
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import TypeBranding from "../Layout/TypeBranding";

import branding_image1 from "../Images/image_papeterie_branding4"
import branding_image2 from "../Images/image_support_pub2"
import branding_image3 from "../Images/image_branding_digital3"
import branding_image4 from "../Images/image_branding_digital4"
import PricingBranding from "../Layout/PricingBranding";
import OurWorkflow from "../Layout/OurWorkflow";
import WhatsappFunction from "../Components/WhatsappFunction";

function BrandIdentity() {


    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            {/*------banner---------------*/}

            <header className="hero-banner">
                {/* Image desktop */}
                <img src={desktop_banner_branding} alt="Banner desktop" className="hero-image desktop-image" />

                {/* Image mobile */}
                <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />

                <div className="hero-content">

                    <h1 >Branding, Identity, Impact</h1>

                    <p>
                        We craft creative and consistent brand identities that make your business stand out.<br/>
                        From logos to digital branding, every detail strengthens your image and connection  <br/>with your audience.
                    </p>

                    <button className="cta-btn"
                            onClick={() => setOpenQuote(true)}>
                        Request a free quote
                    </button>
                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                <Link to="Section-WhoAreWe" className="scroll-down"
                      offset={-90} duration={500} spy={true} smooth={true} >
                    <i className="fa-solid fa-angles-down"></i>
                </Link>
            </header>

            {/*------------description--------------*/}

            <div className="AudioVisual-Description">

                <div className="AudioVisual-Description-left">

                    <h1 style={{
                        fontSize:"50px"
                    }}>
                        Our branding solutions
                    </h1>

                    <p style={{
                        fontSize:"25px"
                    }}>
                        We help businesses create strong visual identities. Combining creativity,
                        strategy, and design, we bring your brand to life and make it memorable.
                    </p>

                </div>

                <div className="AudioVisual-Description-Right">
                    <p style={{fontSize:"17px"}}>
                        At Falcon XXL, we craft creative and consistent brand identities that make your business stand out.
                        From corporate stationery and advertising materials to <strong style={{color:"#f3bb2f"}}>
                        digital branding, promotional products, signage</strong> and
                        <strong style={{color:"#f3bb2f"}}> exhibition stands</strong> ,
                        we design every detail to strengthen your image and connect
                        powerfully with your audience.
                    </p>

                </div>

            </div>

            {/*------------services list branding---------------------------------------*/}

             <TypeBranding/>

            {/*------------Nos poles de branding-------------------------------*/}

            <div className="Container-OurWorkflow" style={{backgroundColor:"white"}}>
                <h1 style={{color:"#1c6077"}}>Our Branding Divisions</h1>

                <div className="OurWorkflow-wrapper">

                    <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                        <img src={branding_image1} alt="wedding_home"
                             className="icon_home_workflow"
                             style={{textAlign:"center", width:"100%"}}/>
                        <h2>Brand Identity & Core Design</h2>
                        <ul className="checklist">
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Brand logo & visual identity</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Branded stationery (letterheads, envelopes, folders)</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Business cards, brochures & flyers</span>
                            </li>
                        </ul>
                    </div>

                    <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                        <img src={branding_image2} alt="wedding_home"
                             className="icon_home_workflow"
                             style={{textAlign:"center", width:"100%"}}/>
                        <h2>Product & Packaging Design</h2>
                        <ul className="checklist">
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Product packaging & label design</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Promotional gift design (bags, cups, notebooks, apparel)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                        <img src={branding_image3} alt="wedding_home"
                             className="icon_home_workflow"
                             style={{textAlign:"center", width:"100%"}}/>
                        <h2>Digital & Online Branding</h2>
                        <ul className="checklist">
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Social media visual identity (templates, stories, highlights, banners)</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Supervise each step for quality and creativity.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>E-commerce visuals & web branding</span>
                            </li>
                        </ul>
                    </div>

                    <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                        <img src={branding_image4} alt="wedding_home"
                             className="icon_home_workflow"
                             style={{textAlign:"center", width:"100%"}}/>
                        <h2>Marketing & Campaign Design</h2>
                        <ul className="checklist">
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Poster & campaign design for product launches</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Lookbook & catalog design</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Store branding & signage design</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>Fashion show invitations & backstage materials</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/*------------Pricing Branding-------------------------------*/}

            <PricingBranding/>

            <OurWorkflow/>

            {/*----------why shoosing our Branding services-----------*/}

            <div className="Section-WhoAreWe" >
                <div className="WhoAreWe-left">
                    <h1>Why Our Branding Services Stand Out</h1>
                </div>

                <div className="WhoAreWe-right">
                    {/*<p className="WhoAreWe-title">*/}
                    {/*    Tailor-made digital solutions designed to elevate your brand and grow*/}
                    {/*    your business*/}
                    {/*</p>*/}

                    <div className="WhoAreWe-text">
                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Unique to You: </strong>
                                100% original, no templates.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Smart & Creative: </strong>
                                Design that performs.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Consistent Look: </strong>
                                Across all platforms.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>All-in-One Team: </strong>
                                Design, photo, video, marketing.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Premium Finish: </strong>
                                Crafted with precision.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Bold Impact: </strong>
                                Visuals that connect.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Bold Impact: </strong>
                                Visuals that connect.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Strategic Positioning: </strong>
                                 Define your story and stand out.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*-------------------------------------*/}

            {/*------------------------------------------------*/}

            <WhatsappFunction/>
            <Footer/>
        </div>
    );
}

export default BrandIdentity;