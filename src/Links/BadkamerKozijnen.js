import './BadkamerKozijnen.css';
import { NavLink } from "react-router-dom";

import video_drone from "../../src/MyVideos/DRONE_SHOT_VIDEO.mp4";
import video_drone_mobile from "../../src/MyVideos/DRONE_SHOT_VIDEO (Mobile).mp4";

import mike_direction_image from "../../src/Images/mike_direction_audiovisual.png";


import { Link } from "react-scroll";
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import TypeVideos from "../Layout/TypeVideos";
import ArchiveVideoReel from "../Layout/ArchiveVideoReel";
import OurWorkflow from "../Layout/OurWorkflow";
import PricingVideo from "../Layout/PricingVideo";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
import WhatsappFunction from "../Components/WhatsappFunction";
import desktop_banner_photograhy from "../Images/background_digital_marketing5.png";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import WhyUs from "../Layout/WhyUs";
import Testimony from "../Layout/Testimony";
import deur_kozijn2 from "../Images/pic_kozijn_deur3.jpg";
import icon_deuren from "../Images/icon_deur1.jpg";
import ServiceComparison from "../Layout/ServiceComparison";
import TopButton from "../Components/TopButton";

function BadkamerKozijnen() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simule le chargement (vidéos lourdes)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <PageLoader />}

            <div className={`audiovisual-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <Navbar2Mobile/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*----------Badkamer & Kozijnen--------------------------------------*/}

                <div className="Container-BadkamerKozijnen"
                     // style={{backgroundColor:"red"}}
                >

                    <div className="hero-content-BadkamerKozijnen">

                        <h1
                            style={{color:"white"}} >Deuren & Kozijnen</h1>

                        <p className="BadkamerKozijnen-paragraphe-desktop" style={{color:"white"}}>

                            We help brands grow and shine online. Our digital strategies attract, convert, and retain your audience. From <br/>
                            social media to SEO,we boost your visibility and impact. Creative, data-driven, and
                            result-focused — we make digital work for you
                        </p>

                        <button className="cta-btn-BadkamerKozijnen"
                                onClick={() => setOpenQuote(true)}
                        >
                            Vraag een offerte aan
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>
                    </div>

                </div>

                {/*----------------Section Deuren en Kozijn--------------------------*/}

                <div className="Container-BadkamerKozijnen-page">
                    <h1 className="title-BadkamerKozijnen-page">
                        Deuren en Kozijnen op Maat <br/>
                    </h1>
                    <h1 className="title-BadkamerKozijnen-page-mobile">
                        Deuren en Kozijnen op Maat
                    </h1>

                    <div className="Container-BadkamerKozijnen-page-single">

                        <NavLink to='/Webdesign' className="media-Container-BadkamerKozijnen-page-single">
                            <img src={deur_kozijn2} alt="wedding_home"
                                 className="image-mike_brenda-home"
                            />
                        </NavLink>

                        <div className="text-Container-BadkamerKozijnen-page-single">

                            <h3>
                                <img src={icon_deuren} alt="wedding_home" className="icon_home_BadkamerKozijnen-page" />
                                Deuren/Kozijnen
                            </h3>
                            <h2>Duurzame deuren en kozijnen voor een moderne en veilige woning.</h2>

                            <p>
                                Bij Pasha Bouw zorgen wij voor de professionele plaatsing en renovatie van
                                deuren en kozijnen die perfect passen bij uw woning. Met oog voor detail en
                                kwaliteit zorgen onze vakmensen voor een duurzame afwerking, betere isolatie
                                en meer comfort.<br/><br/>

                                Van moderne deuren tot hoogwaardige kozijnen: wij realiseren oplossingen die
                                uw woning een nieuwe uitstraling geven en jarenlang meegaan.<br/><br/>

                            </p>

                            <NavLink to='/Webdesign' className="btn-text-Container-BadkamerKozijnen-page-single">
                                Vraag een offerte aan
                                <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>


                            <RequestAQuoteModal
                                open={openQuote}
                                onClose={() => setOpenQuote(false)}
                            >
                                <RequestAQuote />
                            </RequestAQuoteModal>

                        </div>

                    </div>
                </div>

                <ServiceComparison/>


                {/*---------------Description----------------*/}
                {/*<div className="AudioVisual-Description">*/}
                {/*    <div className="AudioVisual-Description-left">*/}
                {/*        <h1>Falcon XXL brings your ideas to life in style</h1>*/}
                {/*        <p>*/}
                {/*            We transform your ideas into memorable visuals that move,*/}
                {/*            inspire, and enhance your identity.*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    <div className="AudioVisual-Description-Right">*/}
                {/*        <p>*/}
                {/*            We produce <strong>music videos</strong>, <strong>teasers</strong>,*/}
                {/*            <strong>luxurious event films</strong>, content for creators and*/}
                {/*            <strong> lifestyle influencers</strong>, visual productions for beauty*/}
                {/*            and fashion brands, as well as <strong>professional videos</strong> for businesses.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<TypeVideos/>*/}
                {/*<PricingVideo/>*/}
                {/*<ArchiveVideoReel/>*/}

                {/*---------------Section-Drone-Video----------------*/}
                {/*<div className="section-drone-video">*/}
                {/*    <div className="texte-drone">*/}
                {/*        <h1>Aerial Shots</h1>*/}
                {/*        <h2>Cinematic 4K Drone Footage that makes the difference</h2>*/}
                {/*        <p>*/}
                {/*            Thanks to our 4K drones, we capture spectacular aerial footage for your projects.*/}
                {/*        </p>*/}
                {/*        <button className="Drone-quote-button">*/}
                {/*            Request a Quote <i className="fa-solid fa-arrow-right"></i>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    <div className="wrapper-drone-video">*/}
                {/*        <video className="drone-video-desktop" src={video_drone} autoPlay muted loop playsInline />*/}
                {/*        <video className="drone-video-mobile" src={video_drone_mobile} autoPlay muted loop playsInline />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*---------------Where Creativity Meets Direction----------------*/}
                {/*<section className="audiovisual-direction-Mike">*/}
                {/*    <div className="direction-Mike-inner">*/}
                {/*        <div className="audiovisual-direction-image">*/}
                {/*            <img src={mike_direction_image} alt="Mike giving direction during a shoot"/>*/}
                {/*        </div>*/}
                {/*        <div className="audiovisual-direction-text">*/}
                {/*            <h1>Where Creativity Meets Direction</h1>*/}
                {/*            <p>*/}
                {/*                My direction blends technical precision with emotional intuition,*/}
                {/*                creating visuals that amplify who artists truly are.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <OurWorkflow/>
                <Testimony/>
                <WhatsappFunction/>
                <TopButton/>
                <Footer/>
            </div>
        </>
    );
}

export default BadkamerKozijnen;
