
import "./Prices.css";

import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";

import WhatsappFunction from "../Components/WhatsappFunction";
import Navbar2Mobile from "../Layout/Navbar2Mobile";

function Prices() {


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
            <Footer />
        </div>
    );
}

export default Prices;
