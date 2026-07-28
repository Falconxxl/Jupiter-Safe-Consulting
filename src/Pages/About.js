import './About.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../Components/LanguageSwitcher";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import OurWorkflow from "../Layout/OurWorkflow";

// import videoBannerAbout from "../../src/MyVideos/banner_video_about2.mp4"
// import video_drone from "../MyVideos/DRONE_SHOT_VIDEO.mp4";
// import video_drone_mobile from "../MyVideos/DRONE_SHOT_VIDEO (Mobile).mp4";
// import React from "react";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";


// import Michea_pic_about from "../Images/michael_pic1.png";
// import mike_direction_photo from "../Images/mike_photography_model2";
// import pic_about_tel1 from "../Images/pic_about_tel1.png";
import WhyUs from "../Layout/WhyUs";
// import CertificationMichael from "../Layout/CertificationMichael";
import OurTeamAbout from "../Layout/OurTeamAbout";
import WhatsappFunction from "../Components/WhatsappFunction";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import Experience from "../Layout/Experience";
import History from "../Layout/History";
import Objectifs from "../Layout/Objectifs";
// import ContainerBanner2 from "../Layout/ContainerBanner2";
// import ServiceHome from "../Layout/ServiceHome";
// import Testimony from "../Layout/Testimony";

function About() {
    // const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);


    // const { t } = useTranslation();

    useEffect(() => {
        // page lourde (vidéos + images)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <PageLoader />}
            <div className={`about-wrapper ${loading ? "hidden" : "visible"}`}>

                <Navbar2/>
                <Navbar2Mobile/>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}
                <div className="container-top"></div>

                {/*---------------Banner-About----------------*/}

                {/*<div className="section-drone-video" style={{ backgroundColor: "#f3bb2f" }}>*/}
                {/*    <div className="texte-drone" style={{ backgroundColor: "#f3bb2f" }}>*/}
                {/*        <h1*/}
                {/*            style={{ fontSize: "48px", lineHeight:1.1 , fontWeight:400, color:"black"}}>*/}
                {/*            We build your dream*/}
                {/*        </h1>*/}
                {/*        <p style={{color:"black"}}>*/}
                {/*            Every entrepreneur starts with a dream. At <strong>FalconXXL</strong>, we help you turn that dream into reality.*/}
                {/*            Through our creativity and expertise, we build the visual identity that sets you apart, strengthens your brand,*/}
                {/*            and makes your business unstoppable. We help you stand out, grow, and reach your goals with confidence.*/}
                {/*        </p>*/}
                {/*        <button className="Drone-quote-button"*/}
                {/*                onClick={() => setOpenQuote(true)}*/}

                {/*                style={{backgroundColor: "#f3bb2f",color:"black", border:"1px solid black"}}>*/}
                {/*            Request a Quote*/}
                {/*            <i className="fa-solid fa-arrow-right"></i>*/}
                {/*        </button>*/}
                {/*        <RequestAQuoteModal*/}
                {/*            open={openQuote}*/}
                {/*            onClose={() => setOpenQuote(false)}*/}
                {/*        >*/}
                {/*            <RequestAQuote />*/}
                {/*        </RequestAQuoteModal>*/}
                {/*    </div>*/}

                {/*    <div className="wrapper-drone-video">*/}
                {/*        /!* Vidéo Desktop *!/*/}
                {/*        <video*/}
                {/*            className="drone-video-desktop"*/}
                {/*            src={video_drone}*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*        />*/}

                {/*        /!* Vidéo Mobile *!/*/}
                {/*        <video*/}
                {/*            className="drone-video-mobile"*/}
                {/*            src={video_drone_mobile}*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*---------------Wie zijn we?---------------------------------------*/}


                <div className={`home-wrapper ${loading ? "hidden" : "visible"}`}>
                    <div className="Section-WhoAreWe"
                         style={{height:"60vh", marginTop:"30px"}}
                    >
                        <div className="WhoAreWe-left">
                            <h1>Qui sommes-nous?</h1>
                        </div>

                        <div className="WhoAreWe-right">
                            <p>
                                <strong
                                    // style={{color:"#43defb"}}
                                >Jupiter Safe</strong> est un cabinet de consultance spécialisé en Qualité, Hygiène, Sécurité et
                                Environnement (QHSE), qui accompagne les organisations dans l'amélioration de leurs
                                performances et la maîtrise durable de leurs risques professionnels.
                            </p>

                            <div className="WhoAreWe-text">
                                <div className="checklist-item">
                                    <i className="fa-solid fa-circle-check checklist-icon"></i>
                                    <div>
                                        Systèmes de management ISO
                                        {/*Mise en place, amélioration et accompagnement vers les certifications ISO.*/}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <i className="fa-solid fa-circle-check checklist-icon"></i>
                                    <div>
                                        Audits QHSE
                                        {/*Évaluation des pratiques, identification des écarts et recommandations d’amélioration.*/}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <i className="fa-solid fa-circle-check checklist-icon"></i>
                                    <div>
                                        Gestion des risques professionnels
                                        {/*Analyse, prévention et réduction des risques pour un environnement de travail plus sûr.*/}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <i className="fa-solid fa-circle-check checklist-icon"></i>
                                    <div>
                                        Formations QHSE
                                        {/*Développement des compétences des équipes à travers des formations adaptées.*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*---------------History-------------------------------------------------*/}

                <History/>

                {/*---------------Nos objectifs?---------------------------------------*/}




                {/*--------------------Objectifs et cibles-----------------------------------------------*/}

                <Objectifs/>


                {/*----------------------------------------------------------------------*/}

                {/*------------------Notre mission/ notre vision-------------------------------------------------*/}

                <div className="Container-WhyUs"

                     style={{backgroundColor:"White",
                         // paddingTop:"100px", paddingBottom:"50px"
                }}

                >

                    {/*<div className="Container-WhyUs-left">*/}
                    {/*    <h1>*/}
                    {/*        Nos objectifs<br />*/}
                    {/*        <span>Jupiter Safe</span> ?*/}
                    {/*    </h1>*/}
                    {/*</div>*/}

                    <div className="Container-WhyUs-right"
                    >

                        {/* Bloc 1 */}
                        <div className="Container-WhyUs-right-content"
                             style={{borderBottom:"1px solid #2175d9"}}
                        >
                            <div className="Container-WhyUs-right-title"
                                 style={{color:"#2175d9"}}
                            >
                                Notre mission
                            </div>

                            <div className="Container-WhyUs-right-paragraf">
                                <div className="icon-text"
                                >
                                    {/*<i className="fa-solid fa-circle-check"></i>*/}
                                    <p
                                        style={{color:"#0f1941"}}
                                    >
                                        Apporter de la valeur ajoutée à nos partenaires de manière efficace,
                                        en transformant les exigences normatives et réglementaires en leviers
                                        de performance durable, par la maitrise des risques qualité, hygiène,
                                        sécurité et environnement.

                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* Bloc 4 */}
                        <div className="Container-WhyUs-right-content-x"

                        >
                            <div className="Container-WhyUs-right-title"
                                 style={{color:"#2175d9"}}
                            >
                                Notre vision
                            </div>
                            <div className="Container-WhyUs-right-paragraf">
                                <div className="icon-text"
                                     style={{color:"#2175d9"}}
                                >
                                    <p
                                        style={{color:"#0f1941"}}
                                    >
                                        Être un partenaire stratégique de choix en matière de QHSE, et participer
                                        activement à l’amélioration de la qualité des produits et services,
                                        la préservation des maladies et accidents en milieu professionnel,
                                        et la réduction de l’impact environnemental des organisations.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/*----------------------------------------------------------------------*/}


                {/*-------------------------------------------------------------*/}

                <OurTeamAbout/>

                <Experience/>

                {/*-------------------------------------------------------------*/}

                {/*<h1 className="text-try">{t("about")}</h1>*/}
                {/*<LanguageSwitcher/>*/}
                <NavbarMenu/>



                {/*<div className="text-try">*/}
                {/*    {t("welcome").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("about").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("contact").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("yes").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <OurWorkflow/>
                <WhyUs/>
                <TopButton/>
                <WhatsappFunction/>
                <Footer/>
            </div>

        </div>
    );
}

export default About;