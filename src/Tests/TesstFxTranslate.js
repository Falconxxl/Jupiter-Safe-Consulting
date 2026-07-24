import './TesstFxTranslate.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";

import { useTranslation } from "react-i18next";

// import LanguageSwitcher from "../Components/LanguageSwitcher";
// import Navbar2 from "../Layout/Navbar2";
// import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
// import OurWorkflow from "../Layout/OurWorkflow";


function TesstFxTranslate() {

    const { t } = useTranslation();

    return (
        <div>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            {/*<Navbar2/>*/}
            <div className="container-test"></div>

            <h1 className="text-try">
                {t("about")}
            </h1>
            <h1 className="text-try">
                {t("yes")}
            </h1>

            <p>
                We bring your vision to life through digital innovation and audiovisual storytelling,
                specializing in audiovisual production, web design, brand identity, and music.
            </p>

            {/*<LanguageSwitcher/>*/}

            {/*<NavbarMenu/>*/}

            <div className="text-try">
                {t("welcome").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}

                {t("about").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}

                {t("contact").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}

                {t("yes").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>

            {/*<OurWorkflow/>*/}
            {/*<TopButton/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default TesstFxTranslate;