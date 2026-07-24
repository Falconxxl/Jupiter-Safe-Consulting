import './Navbar2.css';
import React from "react";


function Navbar2() {

    return (

        <div className="Container-Navbar2">


            {/* Informations de contact à gauche */}

            <div className="Navbar2-left">


                {/*<div className="Navbar2-contact-item">*/}

                {/*    <i className="fa-solid fa-phone"></i>*/}

                {/*    <span>*/}
                {/*        +243 971 011 222*/}
                {/*    </span>*/}

                {/*</div>*/}


                <div className="Navbar2-separator"></div>


                <div className="Navbar2-contact-item">

                    <i className="fa-solid fa-envelope"></i>

                    <span>
                        contact@natproteg.nl
                    </span>

                </div>


                <div className="Navbar2-separator"></div>


                <div className="Navbar2-contact-item">

                    <i className="fa-solid fa-location-dot"></i>

                    <span>
                        Avenue Uvira 60, C/Gombe, Kinshasa (DRC)
                    </span>

                </div>


            </div>


            {/* Réseaux sociaux à droite */}

            <div className="Navbar2-right">


                <a href="https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fnexteclat%2Fabout%2F%3FviewAsMember%3Dtrue" className="Navbar2-social">
                    <i className="fa-brands fa-linkedin"></i>
                </a>


                <a href="https://www.instagram.com/nexteclat.digital?igsh=dGlzeW1hMmEwbm5t&utm_source=qr" className="Navbar2-social">
                    <i className="fa-brands fa-instagram"></i>
                </a>


                <a href="https://www.tiktok.com/@nexteclat.digital?_r=1&_t=ZG-95SJ0Xoz2tk" className="Navbar2-social">
                    <i className="fa-brands fa-tiktok"></i>
                </a>


                <a href="https://www.facebook.com/profile.php?id=61582251961065#" className="Navbar2-social">
                    <i className="fa-brands fa-facebook"></i>
                </a>


            </div>


        </div>

    );
}


export default Navbar2;