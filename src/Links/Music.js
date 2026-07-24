import './Music.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";
import desktop_banner_music from "../Images/background_banner_music2.png";
import mobile_banner from "../Images/background_Brenda_blue_mobile8a.png";
// import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
// import React from "react";
import TypeMusic from "../Layout/TypeMusic";
import OurWorkflow from "../Layout/OurWorkflow";
import PricingMusic from "../Layout/PricingMusic";


import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";


function Music() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>
            {/*------banner---------------*/}

            <header className="hero-banner">
                {/* Image desktop */}
                <img src={desktop_banner_music} alt="Banner desktop" className="hero-image desktop-image" />

                {/* Image mobile */}
                <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />

                <div className="hero-content">

                    <h1>Music, Production, Creativity</h1>

                    <p>
                        We produce powerful, high-quality sound that brings your story to life.<br/>
                        From <strong style={{color:"#f3bb2f"}}>recording</strong> to <strong style={{color:"#f3bb2f"}}>
                        mixing</strong> and <strong style={{color:"#f3bb2f"}}>mastering</strong>, we turn every idea into <br/>a
                        professional track that resonates.
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

                <Link to="AudioVisual-Description" className="scroll-down"
                      offset={-90} duration={500} spy={true} smooth={true} >
                    <i className="fa-solid fa-angles-down"></i>
                </Link>
            </header>

            {/*------------description-music--------------*/}

            <div className="AudioVisual-Description">

                <div className="AudioVisual-Description-left">

                    <h1 style={{
                        fontSize:"39px"
                    }}>
                        Our Music Production Services
                    </h1>

                    <p style={{
                        fontSize:"25px"
                    }}>
                        We turn ideas into sound. From beat production to mastering,
                        we craft music that inspires, connects, and elevates your message.
                    </p>

                </div>

                <div className="AudioVisual-Description-Right" style={{height:"auto"}}>

                    <p style={{
                        fontSize:"16px",
                        // paddingTop:"30px",
                        // paddingBottom:"30px"
                    }}>
                        We produce professional music for <strong>artists</strong> and <strong>brands</strong>, from beat creation and
                        composition to full <strong>mixing and mastering</strong>. Our studio brings ideas to life,
                        delivering clean, powerful sound that matches your style and message.

                        Beyond artist production, we also craft original music for <strong>content creators,
                        entrepreneurs, </strong> and <strong>brands </strong>, perfect for <strong>ads, podcasts, promotional videos, </strong> and
                        <strong> lifestyle content</strong>.
                    </p>

                </div>

            </div>

            {/*-------TypeMusic---------*/}

            <TypeMusic/>

            <PricingMusic/>

            <OurWorkflow/>

            {/*----------why shoosing our music services-----------*/}

            <div className="Section-WhoAreWe" >
                <div className="WhoAreWe-left">
                    <h1>Why Choose Our Music Services</h1>
                </div>

                <div className="WhoAreWe-right">
                    {/*<p className="WhoAreWe-title">*/}
                    {/*    Tailor-made digital solutions designed to elevate your brand and grow*/}
                    {/*    your business*/}
                    {/*</p>*/}

                    <div className="WhoAreWe-text">
                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>On-Trend Production: </strong>
                                We create sounds that follow today’s music trends — fresh, modern, and radio-ready.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Versatile Creativity: </strong>
                                From Afrobeat to R&B or Trap, we adapt to your target audience and deliver exactly what your niche wants.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Top-Level Engineers: </strong>
                                Worked with gold-certified successful artists.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Expert Team: </strong>
                                Beatmakers and mixers with real experience.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Artistic Guidance: </strong>
                                We help shape your creative vision.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>All-in-One Studio: </strong>
                                Beat, vocal recording, mixing & mastering together.
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>Strong Network: </strong>
                                Connect with artists, influencers, entrepreneurs.
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/*---------------------*/}

            <div className="Container-Music">Music Production</div>
            {/*<TopButton/>*/}
            <WhatsappFunction/>
            <Footer/>
        </div>
    );
}

export default Music;