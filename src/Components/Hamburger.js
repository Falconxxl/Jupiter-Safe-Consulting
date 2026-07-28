import './Hamburger.css';

// import TopButton from "../../Components/TopButton";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import {NavLink} from "react-router-dom";


/* =====================================================================
   PDF DOCUMENTS
   -----------------------------------------------------------------
   Same list/links as the "Télécharger (PDF)" dropdown in NavbarMenu.js.
   Each `filePath` is a Dropbox share link ending in `?dl=1` (NOT
   `?dl=0`) so the browser triggers an actual download instead of
   opening Dropbox's preview page. Replace the placeholder URLs below
   with your real Dropbox links (keep them identical to the ones used
   in NavbarMenu.js so both menus point to the same files).
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


function Hamburger() {



    const [menuOpen, setMenuOpen] = useState(false);

    const [servicesOpen, setServicesOpen] = useState(false);

    const [extraOpen, setExtraOpen] = useState(false);

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
    };



    return (

        <div className="navbar-hamburger">

            <button

                className="menu-icon"

                onClick={() => setMenuOpen(!menuOpen)}

                aria-label="Toggle menu"

            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </button>



            <nav className={`menu ${menuOpen ? "open" : ""}`}>

                <ul>

                    <li>

                        <button

                            className="menu-button"

                            onClick={() => setServicesOpen(!servicesOpen)}

                        >

                            Expertises

                        </button>

                        <ul className={`submenu ${servicesOpen ? "open" : ""}`}>

                            <li><NavLink to='/ServiceDetail' className="Submenu-button-hamburger">Systèmes de management ISO</NavLink></li>

                            <li><NavLink to='#' className="Submenu-button-hamburger">Audits QHSE</NavLink></li>

                            <li><NavLink to="#" className="Submenu-button-hamburger">Gestion des risques</NavLink></li>

                            <li><NavLink to="#" className="Submenu-button-hamburger">Formations QHSE</NavLink></li>

                            <li><NavLink to="#" className="Submenu-button-hamburger">Formations des outils</NavLink></li>

                            <li>

                                <a

                                    href="https://nexteclat.com"

                                    target="_blank"

                                    style={{color:"#f9aafc"}}

                                    rel="noopener noreferrer"

                                    className="Submenu-button-hamburger"

                                >

                                    Branding (NextEclat)

                                </a>

                            </li>



                            <li>

                                <a

                                    href="https://nexteclat.com/Webdesign"

                                    target="_blank"

                                    style={{color:"#f9aafc"}}

                                    rel="noopener noreferrer"

                                    className="Submenu-button-hamburger"

                                >

                                    Webdesign (NextEclat)

                                </a>

                            </li>



                            <li>

                                <a

                                    href="https://nexteclat.com/AudioVisual"

                                    target="_blank"

                                    style={{color:"#f9aafc"}}

                                    rel="noopener noreferrer"

                                    className="Submenu-button-hamburger"

                                >

                                    Audiovisuel (NextEclat)

                                </a>

                            </li>

                        </ul>

                    </li>

                    <li><NavLink to='/About' className="menu-button">A propos</NavLink></li>

                    <li><NavLink to='/News' className="menu-button">Actualités</NavLink></li>

                    <li><NavLink to='/Prices' className="menu-button">Partenaires</NavLink></li>

                    {/*--------------------Dropdown Télécharger PDF------------------------------------------------*/}

                    <li>

                        <button

                            className="menu-button"

                            onClick={() => setExtraOpen(!extraOpen)}

                        >

                            Télécharger PDF

                        </button>

                        <ul className={`submenu ${extraOpen ? "open" : ""}`}>

                            {pdfDocuments.map((doc) => (
                                <li key={doc.label}>
                                    <button
                                        type="button"
                                        className="Submenu-button-hamburger Submenu-button-hamburger--pdf"
                                        onClick={requestDownload(doc)}
                                    >
                                        {doc.label}
                                    </button>
                                </li>
                            ))}

                        </ul>

                    </li>

                </ul>

            </nav>

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
                            <FaTimes />
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



export default Hamburger;