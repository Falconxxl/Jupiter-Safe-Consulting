import './PrivacyPolicy.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";
import React from "react";
import WhatsappFunction from "../Components/WhatsappFunction";
import Navbar2Mobile from "../Layout/Navbar2Mobile";

function PrivacyPolicy() {
    return (
        <div >
            <Navbar2Mobile/>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            <div className="Container-PrivacyPolicy">

                <h1>
                    Cette page n’est actuellement pas encore disponible.
                    Nous y travaillons et elle sera bientôt mise en ligne.
                </h1>

            </div>

            <WhatsappFunction/>
            <Footer/>
        </div>
    );
}

export default PrivacyPolicy;