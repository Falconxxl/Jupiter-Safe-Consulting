import './NavbarMenuMobile.css';
// import '../App.css';
import {NavLink} from "react-router-dom";
// // import {Link} from 'react-scroll';
import logo from '../Assets/NatProteg_logo3.png';
// import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
// import LanguageDropdown from "../Components/LanguageDropdown"
import Hamburger from "../Components/Hamburger";



function NavbarMenu() {

    // const [menuOpen, setMenuOpen] = useState(false);
    // const [servicesOpen, setServicesOpen] = useState(false);

    // const [click, setClick] = useState(false)
    //
    // const handleClick = () => setClick(!click)
    //
    // const closeMenu = () => setClick(false)

    // ------------------------languages selector--------------------------------------

    const { i18n, t } = useTranslation();

    // --------------------------------------------------------------

    return (
        <div className="Navbar-mobile">
            <div className="Container-NavbarMenuMobile">

                {/*------------------selector languages-------------------------------------*/}


                <NavLink to='/'  className="logo-menu">
                    <img src={logo} alt="flaconXXL-logo" className="logo-falcon-NavMenu2"/>
                </NavLink>

                <div className="Container-Hamburger">

                    {/*<TestTwo/>*/}
                    <Hamburger/>

                </div>

            {/*    /!*--------------------------------------------------------------------------*!/*/}


            </div>


        </div>
    );
}

export default NavbarMenu;