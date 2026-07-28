import './Footer.css';
import logo_footer from '../Assets/1.LOGO-Jupiter-Safe-white.png';

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import {NavLink} from "react-router-dom";

function Footer() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-Footer">
            <div className="Container-Footer-content1">

                <div className="Container-Footer-logoSlogan">
                    <img src={logo_footer} alt="flaconXXL-logo" className="logo-falcon-Footer"/>
                    <h1>Obtenez votre audit QHSE personnalisé</h1>
                    <button
                        onClick={() => setOpenQuote(true)}>
                        Demander un audit
                    </button>
                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>
                </div >

                <div className="Container-Footer-links">

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Expertises</h>
                        <NavLink to="/ServiceDetail" className="Footer-links">Systèmes de management ISO</NavLink>
                        <NavLink to='#' className="Footer-links">Gestion des risques </NavLink>
                        <NavLink to='#'  className="Footer-links">Formations QHSE</NavLink>
                        <NavLink to='#'  className="Footer-links">Excellence opérationnelle</NavLink>
                        {/*<NavLink to='#'  className="Footer-links">Branding (NextEclat)</NavLink>*/}
                        {/*<NavLink to='/Music' className="Footer-links">Keukenrenovatie</NavLink>*/}
                        {/*<NavLink to='/BrandIdentity' className="Footer-links">Parketvloer</NavLink>*/}
                        {/*<NavLink to='/DigitalMarketing' className="Footer-links">Verbouwingen</NavLink>*/}
                        {/*<NavLink to='/Music' className="Footer-links">Elektrawerk</NavLink>*/}

                        <a
                            href="https://nexteclat.com/"
                            target="_blank"
                            style={{color:"#f9d1fb"}}
                            rel="noopener noreferrer"
                            className="Footer-links"
                        >
                            Branding (NextEclat)
                        </a>

                        <a
                            href="https://nexteclat.com/Webdesign"
                            target="_blank"
                            style={{color:"#f9d1fb"}}
                            rel="noopener noreferrer"
                            className="Footer-links"
                        >
                            Webdesign (NextEclat)
                        </a>

                        <a
                            href="https://nexteclat.com/AudioVisual"
                            target="_blank"
                            style={{color:"#f9d1fb"}}
                            rel="noopener noreferrer"
                            className="Footer-links"
                        >
                            Audiovisuel (NextEclat)
                        </a>

                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Liens</h>
                        {/*<NavLink to='/Projects' className="Footer-links">Realisations</NavLink>*/}
                        <NavLink to='/About' className="Footer-links">A propos</NavLink>
                        <NavLink to='/News' className="Footer-links">Actualités</NavLink>
                        <NavLink to='/Prices' className="Footer-links">Partenaires</NavLink>
                        {/*<NavLink to='/News' className="Footer-links">News</NavLink>*/}
                        <NavLink to='/Contact' className="Footer-links">Contact</NavLink>

                        {/*<a*/}
                        {/*    href="https://www.instagram.com/falconxxl.media?igsh=ZWxsZ2t4djFoNTll&utm_source=qr"*/}
                        {/*    target="_blank"*/}
                        {/*    style={{color:"#5ba7fd"}}*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*    className="Footer-links"*/}
                        {/*>*/}
                        {/*    FalconXXL Beat*/}
                        {/*</a>*/}
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Extra</h>
                        {/*<NavLink to='/News' className="Footer-links">News</NavLink>*/}
                        {/*<NavLink to='/Trainings' className="Footer-links">Trainings</NavLink>*/}
                        <NavLink to='/Shop' className="Footer-links">Politique des cookies</NavLink>
                        <NavLink to='/PrivacyPolicy' className="Footer-links">Déclaration de confidentialité</NavLink>
                        <NavLink to='/ConditionsOfSale' className="Footer-links">Conditions générales de service (CGS)</NavLink>
                        <NavLink to='/Faq' className="Footer-links">FAQ</NavLink>
                    </div>

                    <div className="Container-Footer-links-details-contact">
                        <h className="Footer-title">Contacts</h>
                        <p className="Footer-title-details">Tel:</p>
                        <p className="Footer-title-details-small">+243 971 011 222</p>
                        {/*<p className="Footer-title-details-small">+31685533124 (France)</p>*/}
                        {/*<p className="Footer-title-details-small">+31685533124 (Belgium)</p>*/}
                        {/*<p className="Footer-title-details-small">+31685533124 (DRC/Kinshasa)</p>*/}

                        <p className="Footer-title-details">Email:</p>
                        <p className="Footer-title-details-small">contact@jupiter safe.nl</p>

                        <p className="Footer-title-details">Adres:</p>
                        <p className="Footer-title-details-small">Avenue Uvira 60 </p>
                        <p className="Footer-title-details-small">C/Gombe, Kinshasa (DRC)</p>
                        {/*<p className="Footer-title-details-small">Industrieweg / 4338PR / Middelburg</p>*/}

                    </div>

                </div>

                <div className="Container-Footer-SocialMedia">
                    <h className="Footer-title">Social media</h>
                    <div className="Footer-SocialMedia">
                        <a
                            href="https://www.instagram.com/falconxxl.media?igsh=ZWxsZ2t4djFoNTll&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="https://www.youtube.com/@falcon-xxl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="YouTube"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                        <a
                            href="https://www.tiktok.com/@falconxxl2.0?_r=1&_t=ZG-92fGBLUC3Yu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="TikTok"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/110433729/admin/dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                    </div>
                </div>

            </div>

            <div className="Container-Footer-content2">
                {/*<h1>Receive our latest news and offers directly by email.</h1>*/}

                {/*<div className="Container-Footer-TextNewsletter">*/}

                {/*    <form className="Form-footer-newsletter">*/}
                {/*        <input type="text"*/}
                {/*               placeholder="Email@example.com..."*/}
                {/*               className="Input-Form-footer"*/}
                {/*               id="x-name"*/}
                {/*               name="name"*/}
                {/*               style={{color:"white"}}*/}
                {/*        />*/}

                {/*        <button type="submit"*/}
                {/*                className="button-Form-footer"*/}
                {/*                value="send-newsletter">*/}
                {/*            Suscribe*/}
                {/*        </button>*/}
                {/*    </form>*/}
                {/*</div>*/}

                <p>
                    Website ontwikkeld door <strong>

                        <a
                            href="https://nexteclat.com"
                            target="_blank"
                            style={{color:"white"}}
                            rel="noopener noreferrer"
                        >
                            Nexteclat
                        </a>

                    </strong>
                    <br/>
                    <i className="fa-regular fa-copyright"></i>&nbsp;
                     2026 <strong>NEXTECLAT</strong> | Alle rechten voorbehouden
                </p>
            </div>
        </div>
    );
}

export default Footer;