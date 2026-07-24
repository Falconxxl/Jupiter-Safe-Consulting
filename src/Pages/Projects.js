import './Projects.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";



// import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";


import ArchiveVideoReel from "../Layout/ArchiveVideoReel";
import PhotographyGallery from "../Components/PhotographyGallery";

import branding_image1 from "../Images/image_papeterie_branding4";
import branding_image2 from "../Images/image_support_pub2";
import branding_image3 from "../Images/image_branding_digital3";
import branding_image4 from "../Images/image_branding_digital4";

import compo_webdesign_laptop1 from "../Images/compo_laptop1a_webdesign.png";
import compo_webdesign_laptop2 from "../Images/compo_laptop2a_webdesign.png";
import compo_webdesign_laptop3 from "../Images/compo_laptop3a_webdesign.png";
import WhatsappFunction from "../Components/WhatsappFunction";
import OurRealisations from "../Layout/OurRealisations";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import TopButton from "../Components/TopButton";
import Navbar2Mobile from "../Layout/Navbar2Mobile";

function Projects() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // page lourde (vidéos / images)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <PageLoader />}

            <div className={`projects-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <Navbar2Mobile/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*----------banner--------------------------------------*/}

                {/*----------Badkamer & Kozijnen--------------------------------------*/}

                <div className="Container-BadkamerKozijnen"
                    // style={{backgroundColor:"red"}}
                >

                    <div className="hero-content-BadkamerKozijnen">

                        <h1
                            style={{color:"white"}} >Onze realisaties</h1>

                        <p className="BadkamerKozijnen-paragraphe-desktop" style={{color:"white"}}>

                            Bekijk een selectie van onze recente projecten. Met oog voor kwaliteit,
                            detail en vakmanschap realiseren wij renovaties en verbouwingen die perfect
                            aansluiten bij de wensen van onze klanten.
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

                {/*---------------Description----------------*/}
                <div className="AudioVisual-Description">
                    <div className="AudioVisual-Description-left">
                        <h1>Projecten waar wij trots op zijn...</h1>
                    </div>

                    <div className="AudioVisual-Description-Right">
                        <p>
                            Elke realisatie vertelt een eigen verhaal. Van renovaties
                            en verbouwingen tot volledige transformaties: wij zorgen
                            voor een professionele uitvoering met een hoogwaardige afwerking.
                        </p>
                    </div>
                </div>


                {/*<ArchiveVideoReel/>*/}


                {/*---------------Section Drone----------------*/}

                <PhotographyGallery/>

                {/*<OurRealisations/>*/}


                {/*------------Our Branding Divisions----------------*/}

                {/*----------------Webdesign Projects----------------*/}


                {/*<TopButton/>*/}
                <WhatsappFunction/>
                <TopButton/>
                <Footer/>
            </div>
        </>
    );
}

export default Projects;
