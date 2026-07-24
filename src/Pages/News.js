import './News.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import React, {useState} from "react";
import WhatsappFunction from "../Components/WhatsappFunction";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
// import video_drone from "../MyVideos/DRONE_SHOT_VIDEO.mp4";
// import video_drone_mobile from "../MyVideos/DRONE_SHOT_VIDEO (Mobile).mp4";


function News() {


    return (
        <div >

            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2Mobile/>
            <Navbar2/>

            <div className="Container-PrivacyPolicy">

                <h1>
                    Cette page n’est actuellement pas encore disponible.
                    Nous y travaillons et elle sera bientôt mise en ligne.
                </h1>

            </div>

            <div className="Container-Contact">
                {/*<div className="Container-Contact-text">*/}
                {/*    <h1>Page Update in Progress</h1>*/}
                {/*    <h2>This Page Will Be Available Soon</h2>*/}
                {/*    <p>*/}
                {/*        We’re currently updating this section to provide you with the most <br/>*/}
                {/*        accurate and useful information. Please check back soon, <br/>*/}
                {/*        the new content will be available shortly. in our communication. <br/>*/}
                {/*        Let us know what your preference is.*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>

            {/*---------------Section Drone----------------*/}
            <div className="section-drone-video">

                {/*<div className="texte-drone">*/}
                {/*    <h1>Aerial Shots</h1>*/}
                {/*    <h2>Cinematic 4K Drone Footage that makes the difference</h2>*/}
                {/*    <p>*/}
                {/*        Thanks to our 4K drones, we capture spectacular aerial footage*/}
                {/*        for your music videos, commercials, and visual projects.*/}
                {/*    </p>*/}
                {/*    <button className="Drone-quote-button">*/}
                {/*        Request a Quote <i className="fa-solid fa-arrow-right"></i>*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/*<div className="wrapper-drone-video">*/}
                {/*    <video*/}
                {/*        className="drone-video-desktop"*/}
                {/*        src={video_drone}*/}
                {/*        autoPlay*/}
                {/*        muted*/}
                {/*        loop*/}
                {/*        playsInline*/}
                {/*    />*/}
                {/*    <video*/}
                {/*        className="drone-video-mobile"*/}
                {/*        src={video_drone_mobile}*/}
                {/*        autoPlay*/}
                {/*        muted*/}
                {/*        loop*/}
                {/*        playsInline*/}
                {/*    />*/}
                {/*</div>*/}
            </div>

            {/*<TopButton/>*/}
            <WhatsappFunction/>
            <Footer/>
        </div>
    );
}

export default News;