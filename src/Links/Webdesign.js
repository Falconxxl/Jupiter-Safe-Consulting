import './Webdesign.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_photograhy from "../Images/background_webdesign6.png";
import mobile_banner from "../Images/background_Brenda_blue_mobile6.png";
import compo_webdesign_laptop1 from "../Images/compo_laptop1a_webdesign.png";
import compo_webdesign_laptop2 from "../Images/compo_laptop2a_webdesign.png";
import compo_webdesign_laptop3 from "../Images/compo_laptop3a_webdesign.png";

import { Link } from "react-scroll";
import OurWorkflow from "../Layout/OurWorkflow";
import PricingWebdesign from "../Layout/PricingWebdesign";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";

function Webdesign() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // images lourdes → petit délai pour rendu fluide
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <PageLoader />}

            <div className={`webdesign-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*---------------- Banner ----------------*/}
                <div className="Container-webdesign">
                    <img
                        src={desktop_banner_photograhy}
                        alt="Banner desktop"
                        className="Webdesign-banner desktop-image"
                    />

                    <img
                        src={mobile_banner}
                        alt="Banner mobile"
                        className="Webdesign-banner mobile-image"
                    />

                    <div className="hero-content-webdesign">
                        <h1>Web Design, Innovation, Experience</h1>

                        <p className="webdesign-paragraphe-desktop">
                            From <strong>corporate sites</strong> to{" "}
                            <strong>creative portfolios</strong> and{" "}
                            <strong>e-commerce webshops</strong>,<br/>
                            Falcon XXL builds powerful digital platforms for every industry.
                        </p>

                        <p className="webdesign-paragraphe-mobile">
                            From websites to webshops, Falcon XXL creates clean,
                            high-performing digital experiences.
                        </p>

                        <button
                            className="cta-btn-webdesign"
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
                        to="Section-WhoAreWe"
                        className="scroll-down-webdesign"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                {/*---------------- Description ----------------*/}
                <div className="Section-WhoAreWe"
                style={{backgroundColor:"black"}}>
                    <div className="WhoAreWe-left">
                        <h1>What Our Websites and Apps Offer You</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title">
                            Tailor-made digital solutions designed to elevate your brand
                        </p>

                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>100% Custom Websites and Smart UX Design</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>Built-in SEO Optimization</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>Flexible Pricing Plans</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*---------------- Projects ----------------*/}
                <div className="Container-OurWorkflow">
                    <h1>Our Web Design Projects</h1>

                    <div className="OurWorkflow-wrapper">
                        {[compo_webdesign_laptop1, compo_webdesign_laptop2, compo_webdesign_laptop3].map(
                            (img, index) => (
                                <div
                                    key={index}
                                    className="Container-OurWorkflow-content"
                                    style={{ backgroundColor: "#f3bb2f", width: "400px" }}
                                >
                                    <div className="OurRealisations-webdesign-image">
                                        <img
                                            src={img}
                                            alt="Webdesign project"
                                            className="image_realisation_iphone"
                                            style={{ width: "400px" }}
                                        />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <PricingWebdesign/>
                <OurWorkflow/>
                <WhatsappFunction/>
                {/*<TopButton/>*/}
                <Footer/>
            </div>
        </>
    );
}

export default Webdesign;
