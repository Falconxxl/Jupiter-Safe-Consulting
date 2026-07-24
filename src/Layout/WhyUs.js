import './WhyUs.css';

function WhyUs() {
    return (
        <div className="Container-WhyUs">

            <div className="Container-WhyUs-left">
                <h1>
                    Pourquoi faire confiance à <br />
                    <span>NatProteg</span> ?
                </h1>
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        Expertise QHSE
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Des consultants expérimentés en Qualité, Hygiène, Sécurité et Environnement.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Une approche conforme aux normes internationales et aux exigences réglementaires.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Des solutions adaptées aux besoins spécifiques de chaque organisation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        Accompagnement personnalisé
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Un diagnostic approfondi de votre organisation.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Un plan d'action conçu selon vos objectifs et vos priorités.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Un suivi à chaque étape de votre démarche d'amélioration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 3 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        Performance & Conformité
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Renforcement de la conformité réglementaire.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Réduction des risques professionnels et opérationnels.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Amélioration durable des performances de votre organisation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 4 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title">
                        Partenaire de confiance
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Une relation basée sur l'écoute, la transparence et la confiance.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Des recommandations pratiques, claires et applicables.
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                Un accompagnement durable pour assurer votre amélioration continue.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default WhyUs;
