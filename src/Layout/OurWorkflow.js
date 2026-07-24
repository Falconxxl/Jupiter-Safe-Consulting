import './OurWorkflow.css';
import icon_prise_contact from "../Images/icon_prise_contact.png"
import icon_analyse from "../Images/icon_analysing2.png"
import icon_werkzaamheden from "../Images/icon_werkzaamheden3.png"
import icon_controle from "../Images/icon_controle2.png"
import React from "react";

function OurWorkflow() {
    return (
        <div className="Container-OurWorkflow">
            <h1>Notre méthode de travail</h1>

            <div className="OurWorkflow-wrapper">

                <div className="Container-OurWorkflow-content">
                    <img src={icon_prise_contact} alt="wedding_home" className="icon_home_workflow" />
                    <h2>1. Prise de contact & Diagnostic</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Analyse de vos besoins et objectifs.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Compréhension de votre organisation et vos enjeux.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Évaluation initiale des risques et exigences applicables.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Identification des axes d’amélioration prioritaires.</span>
                        </li>
                    </ul>
                </div>


                {/*---------------------------------------------------------------------------------*/}


                <div className="Container-OurWorkflow-content">
                    <img src={icon_analyse} alt="wedding_home" className="icon_home_workflow" />
                    <h2>2. Analyse & Proposition d’accompagnement</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Réalisation d’un diagnostic QHSE approfondi.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Identification des écarts et opportunités d’amélioration.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Élaboration d’un plan d’action personnalisé.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Présentation des recommandations et solutions adaptées.</span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_werkzaamheden} alt="wedding_home" className="icon_home_workflow" />
                    <h2>3. Mise en œuvre & Accompagnement</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Déploiement des actions correctives et préventives.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Accompagnement des équipes dans l’application des solutions.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Mise en place des outils et procédures QHSE.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Formation et sensibilisation du personnel.</span>
                        </li>
                    </ul>
                </div>


                <div className="Container-OurWorkflow-content">
                    <img src={icon_controle} alt="wedding_home" className="icon_home_workflow" />
                    <h2>4. Évaluation & Amélioration continue</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Mesure des résultats obtenus.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Suivi des indicateurs de performance.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Réalisation d’évaluations et audits de suivi.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Recommandations pour une amélioration durable.</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default OurWorkflow;