import './NavbarMenu.css';
// import '../App.css';
import {NavLink} from "react-router-dom";
// import {Link} from 'react-scroll';
import logo from '../Assets/1.LOGO-Jupiter-Safe.png';
// import logo_falcon_Beat from '../Assets/Logo-falconxxl-beat2.png';
import React, { useState } from 'react';
// import { useTranslation } from "react-i18next";
// import LanguageDropdown from "../Components/LanguageDropdown"
// import Navbar2 from "./Navbar2";
// import { FaTimes, FaBars } from "react-icons/fa";



/* =====================================================================
   PDF DOCUMENTS
   -----------------------------------------------------------------
   Each `filePath` is a Dropbox share link. Dropbox link format must
   end with `?dl=1` (NOT `?dl=0`) so the browser triggers an actual
   download instead of opening Dropbox's preview page.
   Replace the placeholder URLs below with your real Dropbox links.
===================================================================== */

const pdfDocuments = [
    {
        label: "Brochure de présentation (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/brochure-presentation.pdf?dl=1",
    },
    {
        label: "Catalogue des services (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/catalogue-services.pdf?dl=1",
    },
    {
        label: "Company Profile (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/company-profile.pdf?dl=1",
    },
    {
        label: "Présentation des expertises (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/presentation-expertises.pdf?dl=1",
    },
    {
        label: "Fiches de formation (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/fiches-formation.pdf?dl=1",
    },
    {
        label: "Tarifs indicatifs (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/tarifs-indicatifs.pdf?dl=1",
    },
    {
        label: "Formations QHSE (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/formations-qhse.pdf?dl=1",
    },
    {
        label: "Formations des outils (PDF)",
        filePath: "https://www.dropbox.com/scl/fi/XXXXXXXX/formations-qhse.pdf?dl=1",
    },
];

function NavbarMenu() {

    const [click, setClick] = useState(false)

    // const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    // -----------------------------------------------------------------------------------

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // ------------------------languages selector--------------------------------------

    // const { i18n, t } = useTranslation();

    // ------------------------PDF download confirmation--------------------------------

    // Holds the document object the user just clicked on, or null when
    // no confirmation dialog is open.
    const [pendingDownload, setPendingDownload] = useState(null);

    const requestDownload = (doc) => (event) => {
        event.preventDefault();
        setPendingDownload(doc);
    };

    const cancelDownload = () => setPendingDownload(null);

    const confirmDownload = () => {
        if (pendingDownload) {
            // Cross-origin files (Dropbox) ignore the `download` attribute,
            // but Dropbox's `?dl=1` link already forces an attachment
            // download server-side, so opening the link is enough.
            const link = document.createElement("a");
            link.href = pendingDownload.filePath;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        setPendingDownload(null);
        closeMenu();
    };

    // --------------------------------------------------------------

    return (
        <div className="Navbar1">
            <div className="Container-NavbarMenu">
                {/*<Link to="Container-banner" id="logo-falcon-NavMenu"*/}
                {/*      spy={true} smooth={true} offset={-40} duration={500}*/}
                {/*      onClick={closeMenu}>*/}
                {/*    <img src={logo} alt="flaconXXL-logo" className="logo-falcon-NavMenu"/>*/}
                {/*</Link>*/}

                <NavLink
                    to="/"
                    className="logo-menu"
                    onClick={scrollToTop}
                >
                    <img
                        src={logo}
                        alt="flaconXXL-logo"
                        className="logo-falcon-NavMenu"
                    />
                </NavLink>

                <ul className='Container-buttons-NavbarMenu'>

                    <li>
                        <div className="dropdown button-Menu"
                             spy={true}
                             smooth={true}
                             offset={50}
                             duration={500}
                             onClick={closeMenu} id='nav-item'>
                            Expertises <i className="fa-solid fa-angle-down"></i>
                            {/*<i className="fa-solid fa-sort-down"></i>*/}

                            <div className="dropdown-content"
                            >
                                <NavLink className="Services-Link" to="/ServiceDetail">Systèmes de management ISO</NavLink>
                                <NavLink className="Services-Link" to="#">Audits QHSE</NavLink>
                                <NavLink className="Services-Link" to="#">Gestion des risques</NavLink>
                                <NavLink className="Services-Link" to="#">Formations QHSE</NavLink>
                                <NavLink className="Services-Link" to="#">Formations des outils</NavLink>

                                <a
                                    href="https://nexteclat.com/"
                                    target="_blank"
                                    // style={{color:"#5ba7fd"}}
                                    rel="noopener noreferrer"
                                    className="Services-Link"
                                    // aria-label="Instagram"
                                >
                                    Nexteclat (Branding)
                                </a>

                                <a
                                    href="https://nexteclat.com/Webdesign"
                                    target="_blank"
                                    // style={{color:"#5ba7fd"}}
                                    rel="noopener noreferrer"
                                    className="Services-Link"
                                    // aria-label="Instagram"
                                >
                                    Nexteclat (Webdesign)
                                </a>

                                <a
                                    href="https://nexteclat.com/AudioVisual"
                                    target="_blank"
                                    // style={{color:"#5ba7fd"}}
                                    rel="noopener noreferrer"
                                    className="Services-Link"
                                    // aria-label="Instagram"
                                >
                                    Nexteclat (Audiovisuel)
                                </a>


                                {/*<NavLink className="Services-Link" to="#">Parketvloer</NavLink>*/}
                                {/*<NavLink className="Services-Link" to="#">Verbouwingen</NavLink>*/}
                                {/*<NavLink className="Services-Link" to="#">Elektrawerk</NavLink>*/}
                            </div>
                        </div>
                    </li>

                    {/*<li>*/}
                    {/*    <NavLink  to='/Projects' className="button-Menu" activeClassName="active-link">Réalisations</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink  to='/About' className="button-Menu" activeClassName="active-link">A propos</NavLink>
                    </li>
                    <li>
                        <NavLink  to='/News' className="button-Menu" activeClassName="active-link">Actualités</NavLink>
                    </li>
                    <li>
                        <NavLink  to='/Prices' className="button-Menu" activeClassName="active-link">Partenaires</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <NavLink  to='/Contact' className="button-Menu" activeClassName="active-link">Contact</NavLink>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        href="https://www.instagram.com/falconxxl.media?igsh=ZWxsZ2t4djFoNTll&utm_source=qr"*/}
                    {/*        target="_blank"*/}
                    {/*        style={{color:"#5ba7fd"}}*/}
                    {/*        rel="noopener noreferrer"*/}
                    {/*        className="button-Menu"*/}
                    {/*        // aria-label="Instagram"*/}
                    {/*    >*/}
                    {/*        FalconXXL Beat*/}
                    {/*    </a>*/}

                    {/*</li>*/}

                    {/*--------------------Dropdown-content 2------------------------------------------------*/}

                    <li>
                        <div className="dropdown button-Menu"
                             spy={true}
                             smooth={true}
                             offset={50}
                             duration={500}
                             id='nav-item'>
                            Télécharger (PDF) <i className="fa-solid fa-angle-down"></i>
                            {/*<i className="fa-solid fa-sort-down"></i>*/}

                            <div className="dropdown-content"
                            >
                                {pdfDocuments.map((doc) => (
                                    <button
                                        type="button"
                                        key={doc.label}
                                        className="Services-Link Services-Link--button"
                                        onClick={requestDownload(doc)}
                                    >
                                        {doc.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </li>
                </ul>




                <div className='Container-ContactUs-Languages'>

                    <div
                        className="container-telephone"
                        style={{color:"#2175d9", fontSize:"18px", fontWeight:"450"}}
                    >
                        <i className="fa-solid fa-phone"></i> +243 971 011 222
                    </div>

                    <NavLink to='/Contact' className="button-menu-ContactUs">
                        Contactez-nous
                    </NavLink>

                    {/*<NavLink to='/Contact' className="button-menu-ContactUs">*/}
                    {/*    Contact us*/}
                    {/*</NavLink>*/}

                    {/*------------------selector languages-------------------------------------*/}

                    {/*<div className="container-languages">*/}
                    {/*    /!*<h2>{t("")}</h2>*!/*/}
                    {/*    /!*<label>{t("")}</label>*!/*/}
                    {/*    <LanguageDropdown i18n={i18n} />*/}
                    {/*    /!*<i className="fa-solid fa-chevron-down"></i>*!/*/}
                    {/*</div>*/}


                </div>
            </div>

            {/* =====================================================================
                PDF DOWNLOAD CONFIRMATION MODAL
                Shown whenever `pendingDownload` is set. Clicking the overlay or
                the "Non" button cancels; clicking "Oui" triggers the download.
            ===================================================================== */}
            {pendingDownload && (
                <div className="pdf-confirm-overlay" onClick={cancelDownload}>
                    <div
                        className="pdf-confirm-modal"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            type="button"
                            className="pdf-confirm-close"
                            onClick={cancelDownload}
                            aria-label="Fermer"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <p className="pdf-confirm-text">
                            Voulez-vous télécharger <strong>{pendingDownload.label}</strong> ?
                        </p>

                        <div className="pdf-confirm-actions">
                            <button
                                type="button"
                                className="pdf-confirm-btn pdf-confirm-btn--yes"
                                onClick={confirmDownload}
                            >
                                Oui
                            </button>
                            <button
                                type="button"
                                className="pdf-confirm-btn pdf-confirm-btn--no"
                                onClick={cancelDownload}
                            >
                                Non
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default NavbarMenu;