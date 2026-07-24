import './ServiceHome.css';
import React, {useState} from "react";

import pic_saafety0 from "../Images/safety_pic0.jpg";
import pic_saafety1 from "../Images/safety_pic1.jpg";
import pic_saafety2 from "../Images/safety_pic2.jpg";
import pic_saafety3 from "../Images/safety_pic4.jpg";
// import Stucwerk from "../Images/image_dienst_stucwerk.jpg";
// import Keukenrenovatie from "../Images/image_dienst_keukenrenovatie.jpg";
// import Parketvloer from "../Images/image_dienst_parketvloer.jpg";
// import Verbouwingen from "../Images/image_dienst_verbouwingen.jpg";
// import Elektrawerk from "../Images/image_dienst_elektrawerk.jpg";

import icon_deuren from "../Images/icon_deur1.jpg";
// import icon_schilderwerk from "../Images/icon_schilderwerk.jpg";
// import icon_tegelwerk from "../Images/icon_tegelwerk.jpg";
// import icon_Badkamerrenovatie from "../Images/icon_badkamer.jpg";
// import icon_Stucwerk from "../Images/icon_stucwerk.jpg";
// import icon_Keukenrenovatie from "../Images/icon_keukenrenovatie.jpg";
// import icon_Parketvloer from "../Images/icon_parketvloer.jpg";
// import icon_Verbouwingen from "../Images/icon_verbouwingen.jpg";
// import icon_Elektrawerk from "../Images/icon_elektrawerk.jpg";

import {NavLink} from "react-router-dom";




function ServiceHome () {


    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="Container-ServiceHome">

            <h1 className="title-ServiceHome">
                Découvrez nos expertises <br/>
            </h1>
            <h1 className="title-ServiceHome-mobile">
                Découvrez nos expertises
            </h1>

            {/*----------------Expertises 1 Systèmes de management ISO--------------------*/}

            <div className="Container-ServiceHome-single-wrap">

                <div className="Container-ServiceHome-single">

                    <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                        <img src={pic_saafety0} alt="wedding_home"
                             className="image-mike_brenda-home"
                        />
                    </NavLink>

                    <h1>Systèmes de management ISO</h1>

                    <p>
                        Mise en place, amélioration et accompagnement vers les certifications ISO.
                        Nous aidons les organisations à structurer leurs processus, améliorer leur
                        performance et assurer leur conformité aux normes internationales.
                    </p>

                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Découvrez notre service
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

                {/*----------------Expertisess 2  Audits QHSE--------------------------*/}

                <div className="Container-ServiceHome-single">

                    <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                        <img src={pic_saafety1} alt="wedding_home"
                             className="image-mike_brenda-home"
                        />
                    </NavLink>

                    <h1>Audits QHSE</h1>

                    <p>
                        Évaluation des pratiques, identification des écarts et accompagnement
                        dans la mise en place d’actions correctives. Nous aidons les organisations
                        à améliorer leurs performances et renforcer leur conformité aux exigences
                        réglementaires.
                    </p>

                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Découvrez notre service
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

                {/*----------------Expertisess 3 Systèmes de management ISO -----------*/}

                <div className="Container-ServiceHome-single">

                    <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                        <img src={pic_saafety2} alt="wedding_home"
                             className="image-mike_brenda-home"
                        />
                    </NavLink>

                    <h1>Gestion des risques professionnels</h1>

                    <p>
                        Analyse, prévention et réduction des risques pour garantir un environnement
                        de travail plus sûr. Nous accompagnons les entreprises dans l’identification
                        des dangers et la mise en œuvre de solutions adaptées.
                    </p>

                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Découvrez notre service
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

                {/*----------------Expertisess 2 Formations QHSE--------------------------*/}

                <div className="Container-ServiceHome-single">

                    <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                        <img src={pic_saafety3} alt="wedding_home"
                             className="image-mike_brenda-home"
                        />
                    </NavLink>

                    <h1>Formations QHSE</h1>

                    <p>
                        Développement des compétences des équipes à travers des formations adaptées
                        aux enjeux de sécurité, qualité et environnement. Nous renforçons les connaissances
                        pour favoriser une culture durable de prévention.
                    </p>

                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Découvrez notre service
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>


            </div>


        </div>

    );
}

export default ServiceHome ;