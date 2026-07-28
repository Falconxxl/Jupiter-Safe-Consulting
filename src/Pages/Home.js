import './Home.css';
// import ContainerBanner from "../Layout/ContainerBanner";
// import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
// import ContainerBanner3 from "../Components/ContainerBanner3";
import ContainerBanner2 from "../Layout/ContainerBanner2";
import ServiceHome from "../Layout/ServiceHome";
// import ServiceHome2 from "../Tests/ServiceHome2";
import OurWorkflow from "../Layout/OurWorkflow";
import WhyUs from "../Layout/WhyUs";
import OurRealisations from "../Layout/OurRealisations";
import WhatsappFunction from "../Components/WhatsappFunction";
// import TestTwo from "../Tests/TestTwo/TestTwo";

import React, { useEffect, useState } from "react";
import PageLoader from "../Components/PageLoader";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import TopButton from "../Components/TopButton";
import Testimony from "../Layout/Testimony";
import Experience from "../Layout/Experience";
import AllServicesDetails from "../Layout/AllServicesDetails";
// import logo from "../Assets/Jupiter Safe_logo3.png";
// import logo2 from '../Assets/logo_jupiter safe_fond_blue2.png';


function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simule le chargement (images, composants lourds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700); // ajuste si besoin

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {loading && <PageLoader />}

            <div className={`home-wrapper ${loading ? "hidden" : "visible"}`}>

                {/*<Navbar2/>*/}
                <Navbar2Mobile/>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<ContainerBanner3/>*/}
                <ContainerBanner2/>
                {/*<ContainerBanner/>*/}
                <div className="Section-WhoAreWe"
                >
                    <div className="WhoAreWe-left">
                        <h1>Qui sommes-nous?</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <p>
                            <strong>Jupiter Safe</strong> est un cabinet de consultance spécialisé en Qualité, Hygiène, Sécurité et
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
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    Formations des outils
                                    {/*Développement des compétences des équipes à travers des formations adaptées.*/}
                                </div>
                            </div>
                        </div>


                        {/*<p className="WhoAreWe-text">*/}
                        {/*    We combine creativity, technical expertise, and storytelling to bring your*/}
                        {/*    brand to life through audiovisual production, web design, branding, and*/}
                        {/*    music, using techniques tailored to each client.<br/><br/>*/}

                        {/*    With an enthusiastic and experienced team, we collaborate closely with*/}
                        {/*    clients to deliver high-quality results quickly, ensuring impactful and*/}
                        {/*    memorable visuals.*/}
                        {/*</p>*/}
                    </div>
                </div>

                <ServiceHome/>
                <Experience/>
                <OurWorkflow/>
                <WhyUs/>
                <Testimony/>
                <AllServicesDetails/>
                <TopButton/>
                <WhatsappFunction/>
                <Footer/>

            </div>
        </>
    );
}

export default Home;