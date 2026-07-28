import React from "react";
import "./History.css";

// import NathalieImage from "../Images/background_natalie_mobile.jpg";

import NathalieImage from "../Images/pic_nathaly_history.jpg";


function History() {

    return (

        <section className="history-section">

            <h2 className="history-main-title">
                Notre histoire
            </h2>


            <div className="history-container">


                {/* IMAGE SECTION */}

                <div className="history-image-container">

                    <img
                        src={NathalieImage}
                        alt="Nathalie Mathalie Fili - CEO NatProTech"
                        className="history-image"
                    />


                    <div className="founder-info">

                        <h3>
                            Nathalie Mathalie Fili
                        </h3>

                        <p>
                            CEO & Directrice de Jupiter Safe Consulting
                        </p>

                    </div>


                </div>



                {/* TEXT SECTION */}


                <div className="history-content">


                    <h3>
                        Rencontrer la fondatrice de Jupiter Safe Consulting
                    </h3>


                    <p>
                        <strong>
                        Jupiter Safe Consulting est née d’une vision : mettre plus de vingt années
                        d’expérience en Qualité, Hygiène, Sécurité et Environnement (QHSE)
                        au service des entreprises en République Démocratique du Congo.
                        </strong>
                    </p>

                    <p>
                        Fondée par Nathalie Mathalie Fili, professionnelle passionnée par
                        la sécurité et l’amélioration des conditions de travail, Jupiter Safe Consulting
                        s’appuie sur une riche expérience acquise au sein de la Bralima et
                        du groupe Heineken, où elle a développé une expertise solide dans
                        le domaine QHSE.
                    </p>

                    <p>
                        Son parcours, enrichi par plusieurs formations en République
                        Démocratique du Congo, en Afrique et aux Pays-Bas, lui a permis
                        de maîtriser les standards internationaux et d’accompagner les
                        organisations dans leurs défis liés à la sécurité et à la performance.
                    </p>

                    <p>
                        Aujourd’hui, avec son partenaire Freddy, Nathalie développe Jupiter Safe Consulting
                        afin d’aider les entreprises à améliorer leur conformité, prévenir
                        les risques professionnels et construire des environnements de travail
                        plus sûrs, plus performants et durables.
                    </p>


                </div>


            </div>


        </section>

    );

}


export default History;