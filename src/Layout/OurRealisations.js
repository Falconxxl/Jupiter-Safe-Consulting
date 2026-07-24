import './OurRealisations.css';
import {NavLink} from "react-router-dom";

import video_boucle_banner from "../../src/MyVideos/z2b.mp4"
import video_mobile_ourRealisation from "../../src/MyVideos/z2a.mp4"

import Iphone_image from "../Images/realisation_iphone_image";
import Ipad_image from "../Images/realisation_ipad_image";
import Laptop_image from "../Images/realisation_macbook_image";

import papeterie_branding_image from "../Images/image_papeterie_branding4";
import pub_branding_image from "../Images/image_support_pub2";
import branding_digital_image from "../Images/image_branding_digital3";

import Cd_cover_image from "../Images/Cd-cover.png";
import video_boucle_Dream_Girl from "../../src/MyVideos/dream_girl_NosRealisastions.mp4";

import React from "react";

function OurRealisations() {
    return (
        <div className="Container-OurRealisations">

            <h1>Our realisations</h1>

            {/*---------------Audiovisual----------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>1. Audiovisual</h2>
                <p>
                    These clips were created over ten years ago and showcase our early creativity.
                    Today, with advanced equipment and greater expertise, our production quality
                    has reached a much higher level.
                </p>

                <div className="Container-OurRealisations-audiovisual-videos">
                    <div className="OurRealisations-audiovisual-text">
                        <h1>Caught Up</h1>

                        <h2>Seneca Feat. Ilunga</h2>

                        <p>
                            Here is an excerpt from the music video <strong>Caught Up </strong>,
                            produced for artist <strong>Seneca</strong> in 2016. We share some of our past projects to give you a glimpse of our
                            creativity and expertise.
                        </p>

                    </div>

                    {/*<div className="OurRealisations-audiovisual-video">*/}
                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="OurRealisations-audiovisual-video"
                        >
                            <source src={video_boucle_banner} type="video/mp4" />
                        </video>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="OurRealisations-audiovisual-mobile"
                        >
                            <source src={video_mobile_ourRealisation} type="video/mp4" />
                        </video>

                    </div>

                </div>
            </div>

            <NavLink to='/AudioVisual' className="btn-OurRealisations-more">
                Explore more projects
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

            {/*---------------Webdesign------------------------------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>2. Webdesign</h2>
                <p>
                    The official <strong>Falcon XXL </strong> website is our very first web design project.
                    It marks the start of our journey in creating modern and functional
                    websites. We are currently developing new sites for our future clients,
                    combining creativity, usability, and performance.
                </p>

                <div className="Container-OurRealisations-webdesign-image">

                    <div className="OurRealisations-webdesign-image">
                        <img src={Iphone_image} alt="iphone_image" className="image_realisation_iphone"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={Ipad_image} alt="iphone_image" className="image_realisation_ipad"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={Laptop_image} alt="iphone_image" className="image_realisation_laptop"/>
                    </div>

                </div>
            </div>

            <NavLink to='/AudioVisual' className="btn-OurRealisations-more">
                Explore more projects
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

            {/*---------------Branding------------------------------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>3. Branding</h2>
                <p>
                    At Falcon XXL, we craft creative and consistent brand identities that make your
                    business stand out. From corporate stationery and advertising materials to digital
                    branding, promotional products, signage and exhibition stands, we design every
                    detail to strengthen your image and connect powerfully with your audience.
                </p>

                <div className="Container-OurRealisations-webdesign-image">

                    <div className="OurRealisations-webdesign-image">
                        <img src={papeterie_branding_image} alt="iphone_image" className="image_realisation_branding"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={pub_branding_image} alt="iphone_image" className="image_realisation_branding"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={branding_digital_image} alt="iphone_image" className="image_realisation_branding"/>
                    </div>

                </div>
            </div>

            <NavLink to='/AudioVisual' className="btn-OurRealisations-more">
                See Our Work
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

            {/*---------------Music production------------------------------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>4. Music production</h2>
                <p>
                    At Falcon XXL, we produce music that inspires and connects. From songwriting
                    to mastering, we deliver professional tracks ready to elevate your brand,
                    project, or artistry.
                </p>

                <div className="Container-OurRealisations-music">

                    <div className="OurRealisations-music-CoverText">
                        <img src={Cd_cover_image} alt="Cd_cover_image" className="image_Cd_cover"/>
                        <h1>Dream Girl</h1>

                        <h2>Ilunga</h2>

                        <p>
                            Here is an excerpt from the song <strong>Dream Girl</strong>, produced and performed
                            by <strong>ILUNGA.</strong> This track reflects our passion for music production, blending
                            emotion, creativity, and professional sound design to deliver a timeless
                            listening experience. <br/><br/>
                            Below, you can find the link to the official
                            Dream Girl video on YouTube.
                        </p>
                    </div>

                    <div className="OurRealisations-music-video">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="OurRealisations-music-video-yes"
                        >
                            <source src={video_boucle_Dream_Girl} type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>

            <NavLink to='/AudioVisual' className="btn-OurRealisations-more">
                See Our Work
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>


        </div>
    );
}

export default OurRealisations;
