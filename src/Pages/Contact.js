import React, { useState } from 'react';
import './Contact.css';
import RequestAQuote from '../Components/RequestAQuote';
import RequestAQuoteModal from '../Components/Modal/RequestAQuoteModal';
import Navbar2 from "../Layout/Navbar2";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

function Contact() {
    const [openQuote, setOpenQuote] = useState(false);

    return (
        <>
            <Navbar2/>
            <Navbar2Mobile/>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <div className="contact-page">

                {/* ══════════════════════════════
        HERO HEADER
    ══════════════════════════════ */}
                <div className="contact-hero">

                    <h1 className="contact-main-title">
                        Parlons de votre <span className="contact-accent">performance QHSE</span>
                    </h1>

                </div>


                {/* ══════════════════════════════
        MAIN CONTENT
    ══════════════════════════════ */}
                <div className="contact-wrapper">


                    {/* ── LEFT: info ── */}
                    <div className="contact-left">


                        {/* Intro text */}
                        <div className="contact-intro">

                            <p className="contact-intro-text">

                                Notre équipe vous accompagne dans vos démarches d’amélioration
                                continue, de conformité réglementaire et de maîtrise des risques.
                                Contactez-nous pour échanger sur vos besoins et vos objectifs.

                            </p>


                            <p className="contact-intro-sub">

                                Une question ? Notre équipe
                                <strong style={{ color: 'black' }}> NatProtec </strong>
                                est à votre écoute.

                            </p>

                        </div>



                        {/* Contact details */}
                        <div className="contact-details">


                            {/* Phone */}

                            <a href="tel:+243971011222" className="contact-detail-row">

                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div className="contact-detail-text">

                        <span className="contact-detail-label">
                            Appelez-nous
                        </span>

                                    <span className="contact-detail-value">
                            +243 971 011 222
                        </span>

                                </div>

                            </a>



                            {/* Email */}

                            <a href="mailto:contact@natproteg.nl" className="contact-detail-row">

                                <div className="contact-detail-icon">

                                    <i className="fa-solid fa-envelope"></i>

                                </div>


                                <div className="contact-detail-text">

                        <span className="contact-detail-label">
                            E-mail
                        </span>

                                    <span className="contact-detail-value">
                            contact@natproteg.nl
                        </span>

                                </div>

                            </a>



                            {/* Address */}

                            <div className="contact-detail-row">

                                <div className="contact-detail-icon">

                                    <i className="fa-solid fa-location-dot"></i>

                                </div>


                                <div className="contact-detail-text">

                        <span className="contact-detail-label">
                            Adresse
                        </span>

                                    <span className="contact-detail-value">

                            Avenue Uvira 60<br/>
                            C/Gombe<br/>
                            Kinshasa, République Démocratique du Congo

                        </span>

                                </div>

                            </div>



                            {/* Hours */}

                            <div className="contact-detail-row">

                                <div className="contact-detail-icon">

                                    <i className="fa-solid fa-clock"></i>

                                </div>


                                <div className="contact-detail-text">

                        <span className="contact-detail-label">
                            Disponibilité
                        </span>


                                    <div className="contact-hours">


                                        <div className="contact-hours-row">

                                <span>
                                    Lundi – Vendredi
                                </span>

                                            <span className="contact-hours-time">
                                    08:00 – 17:00
                                </span>

                                        </div>


                                        <div className="contact-hours-row">

                                <span>
                                    Samedi - Dimanche
                                </span>

                                            <span className="contact-hours-closed">
                                    Fermé
                                </span>

                                        </div>


                                    </div>


                                </div>


                            </div>


                        </div>




                        {/* Social media */}

                        <div className="contact-social-block">

                            <p className="contact-social-label">
                                Suivez-nous
                            </p>


                            <div className="contact-socials">


                                <a
                                    href="#"
                                    className="contact-social-btn"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>


                                <a
                                    href="#"
                                    className="contact-social-btn"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>


                                <a
                                    href="#"
                                    className="contact-social-btn"
                                    aria-label="WhatsApp"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>


                                <a
                                    href="#"
                                    className="contact-social-btn"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>


                                <a
                                    href="#"
                                    className="contact-social-btn"
                                    aria-label="TikTok"
                                >
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>


                            </div>


                        </div>



                    </div>





                    {/* ── RIGHT: CTA card ── */}

                    <div className="contact-right">


                        <div className="contact-cta-card">


                            <div className="contact-cta-icon">

                                <i className="fa-solid fa-shield-halved"></i>

                            </div>



                            <h2 className="contact-cta-title">

                                Renforcez votre sécurité

                            </h2>



                            <p className="contact-cta-text">

                                Demandez dès aujourd’hui un accompagnement personnalisé.
                                Nos experts vous aideront à améliorer vos performances
                                QHSE et à mettre en place des solutions adaptées à vos enjeux.

                            </p>




                            <ul className="contact-cta-list">


                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Diagnostic QHSE personnalisé
                                </li>


                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Accompagnement vers les normes ISO
                                </li>


                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Prévention et gestion des risques
                                </li>


                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Conseil et formation des équipes
                                </li>


                            </ul>




                            <button
                                className="contact-cta-btn"
                                onClick={() => setOpenQuote(true)}
                            >

                                Demander un audit

                                <i className="fa-solid fa-arrow-right"></i>

                            </button>



                        </div>


                    </div>



                </div>


            </div>

            {/* ══════════════════════════════
                MODAL
            ══════════════════════════════ */}
            <RequestAQuoteModal
                open={openQuote}
                onClose={() => setOpenQuote(false)}
            >
                <RequestAQuote onClose={() => setOpenQuote(false)} />
            </RequestAQuoteModal>

            <Footer/>
        </>
    );
}

export default Contact;