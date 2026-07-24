import React from "react";
import "./Objectifs.css";

/* =====================================================================
   ICON — white circle / blue check, matches the mockup exactly.
===================================================================== */

const IconCheck = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
        <path
            d="M7.2 12.4L10.1 15.3L16.8 8.4"
            stroke="#2175D9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* =====================================================================
   CONTENT
   -----------------------------------------------------------------
   Kept as plain constants (rather than hardcoded JSX) so the text can
   be edited in one place without touching the markup below.
===================================================================== */

const label = "NatProtec";
const title = "Nos objectifs et cibles";

const introLead = "NatProtec";
const introRest =
    " apporte son accompagnement aux entreprises dans la mise en place du système de management QHSE visant à :";

const objectives = [
    "Améliorer la performance QHSE.",
    "Améliorer la conformité aux exigences normatives et règlementaires QHSE.",
    "Prévenir les accidents de travail et maladies professionnelles.",
    "Améliorer la culture QHSE.",
    "Réduire l'impact environnemental.",
    "Améliorer les compétences QHSE des travailleurs.",
    "Evaluer les processus internes (audits).",
];

/* =====================================================================
   COMPONENT
===================================================================== */

function Objectifs() {
    return (
        <section className="objectif">
            <div className="objectif__container">
                <div className="objectif__left">
                    {/*<span className="objectif__label">{label}</span>*/}
                    <h2 className="objectif__title">{title}</h2>
                </div>

                <div className="objectif__right">
                    <p className="objectif__intro">
                        <strong className="objectif__intro-lead">{introLead}</strong>
                        {introRest}
                    </p>

                    <ul className="objectif__list">
                        {objectives.map((item) => (
                            <li className="objectif__item" key={item}>
                <span className="objectif__icon">
                  <IconCheck />
                </span>
                                <span className="objectif__text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Objectifs;