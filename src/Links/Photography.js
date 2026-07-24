import './Photography.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Navbar2 from "../Layout/Navbar2";

import desktop_banner_photograhy from "../Images/background_Brenda_blue2.png";
import mobile_banner from "../Images/background_Brenda_blue_mobile4.png";

import batemburg_direction_photo from "../Images/Batemburg_photography_models";
import mike_direction_photo from "../Images/mike_photography_model2";

import { Link } from "react-scroll";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import TypePhotos from "../Layout/TypePhotos";
import OurWorkflow from "../Layout/OurWorkflow";
import PricingPhotography from "../Layout/PricingPhotography";
import PhotographyGallery from "../Components/PhotographyGallery";
import WhatsappFunction from "../Components/WhatsappFunction";

function Photography() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // images lourdes → petit délai pour un rendu fluide
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <PageLoader />}

            <div className={`photography-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenuMobile/>
                <NavbarMenu/>
                <Navbar2/>
                
                <div className="Container-webdesign">

                    <img src={desktop_banner_photograhy} alt="Banner desktop" className="Webdesign-banner desktop-image"/>

                    <img src={desktop_banner_photograhy} alt="Banner mobile" className="Webdesign-banner mobile-image"/>

                    <div className="hero-content-webdesign">

                        <h1 style={{color:"#f3bb2f"}} >Digital Marketing, Strategy, Growth</h1>

                        <p className="webdesign-paragraphe-desktop" style={{color:"white"}}>

                            we help brands grow and shine online.
                            Our <strong style={{color:"#f3bb2f"}}>digital strategies </strong> attract, <br/>
                            convert, and retain your audience. From
                            <strong style={{color:"#f3bb2f"}}> social media </strong> to
                            <strong style={{color:"#f3bb2f"}}> SEO,<br/></strong> we boost your visibility and impact. Creative, data-driven, and <br/>
                            result-focused — we make <strong style={{color:"#f3bb2f"}}>digital </strong> work for you
                        </p>

                        <p className="webdesign-paragraphe-mobile" style={{color:"white", fontSize:"17px"}}>
                            we help brands grow and shine online.
                            Our <strong>digital strategies </strong> attract, convert, and
                            retain your audience. From
                            <strong> social media </strong> to
                            <strong> SEO,</strong> we boost your visibility and impact. Creative, data-driven, and <br/>
                            result-focused we make <strong>digital </strong> work for you
                        </p>

                        <button className="cta-btn-webdesign"
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    <Link to="AudioVisual-Description" className="scroll-down-webdesign"
                          style={{border:"2px solid #f3bb2f"}}
                          offset={-90} duration={500} spy={true} smooth={true} >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                {/*---------------- Banner ----------------*/}
                <div className="Container-Photography">
                    <img
                        src={desktop_banner_photograhy}
                        alt="Banner desktop"
                        className="Photography-banner desktop-image"
                    />

                    <img
                        src={mobile_banner}
                        alt="Banner mobile"
                        className="Photography-banner mobile-image"
                    />

                    <div className="hero-content-photography">
                        <h1>Photography, Passion, Perfection</h1>

                        <p>
                            From fashion to sports, lifestyle, events, and weddings, we turn every moment <br/>
                            into a timeless image, for posters, magazines, album covers, and more.
                        </p>

                        <button
                            className="cta-btn"
                            onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>
                    </div>

                    <Link
                        to="Container-WhyUs"
                        className="scroll-down"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                <TypePhotos/>
                <PricingPhotography/>
                <PhotographyGallery/>

                {/*---------------- Direction Section ----------------*/}
                <section className="audiovisual-direction-Mike">
                    <div className="direction-Mike-inner">
                        <div className="audiovisual-direction-image">
                            <img src={batemburg_direction_photo} alt="Direction photo" />
                        </div>
                        <div className="audiovisual-direction-text">
                            <div className="audiovisual-direction-badge"></div>
                            <h1>Where Emotion Becomes Image</h1>
                            <p>
                                Photography is more than light and composition, it’s connection.
                                We strive to understand the spirit behind every shot.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="audiovisual-direction-Mike"
                    style={{ backgroundColor: "black" }}
                >
                    <div className="direction-Mike-inner">
                        <div className="audiovisual-direction-text">
                            <div className="audiovisual-direction-badge"></div>
                            <h1 style={{ color: "white" }}>Where Emotion Becomes Image</h1>
                            <p style={{ color: "white", marginBottom: "30px" }}>
                                Through creativity and precision,
                                we transform ordinary moments into unforgettable images.
                            </p>
                        </div>
                        <div className="audiovisual-direction-image">
                            <img src={mike_direction_photo} alt="Direction photo" />
                        </div>
                    </div>
                </section>

                <OurWorkflow/>

                {/*---------------- Why Choose ----------------*/}
                <div
                    className="Section-WhoAreWe"
                    style={{
                        backgroundColor:"black",
                        color: "#75deff",
                        paddingBottom: "100px",
                        paddingTop: "100px"
                    }}
                >
                    <div className="WhoAreWe-left">
                        <h1>Why Choose Falcon XXL, Photography</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        Unique Visual Identity:
                                    </strong>{" "}
                                    Every photo reflects your brand’s essence.
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        Creative Direction Included:
                                    </strong>{" "}
                                    We guide poses, moods, and concepts.
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        Professional Quality Gear:
                                    </strong>{" "}
                                    High-end cameras and lenses.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <WhatsappFunction/>

                <Footer/>
            </div>
        </>
    );
}

export default Photography;
