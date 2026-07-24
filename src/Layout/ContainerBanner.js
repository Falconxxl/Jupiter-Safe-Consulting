import './ContainerBanner.css';
import {NavLink} from "react-router-dom";
import video_boucle_banner from "../../src/MyVideos/z_banner11.mp4"
import video_boucle_banner_mobile from "../../src/MyVideos/z_banner_mobile2.mp4"
import {Link} from "react-scroll";

function ContainerBanner() {
    return (
        <div className="Container-banner">

            <video
                autoPlay
                loop
                muted
                playsInline
                src={video_boucle_banner}  // <-- utiliser 'src' au lieu de 'public'
                type='video/mp4'
                className="banner-video-boucle"
            />

            <video
                autoPlay
                loop
                muted
                playsInline
                src={video_boucle_banner_mobile}
                type='video/mp4'
                className="banner-video-boucle-mobile"
            />

             {/*Overlay (texte + boutons)*/}

            <div className="banner-overlay">
                <h1>Falcon XXL, <br/> Creativity Without Limits</h1>
                <p>We bring your vision to life through digital innovation and audiovisual storytelling.
                    Specializing <br/> in Audiovisual Production, Web Design, Brand Identity, and Music.
                </p>
                <NavLink className="btn-banner-home">Contact us now</NavLink>
            </div>

            <Link className="btn-scroll-banner">
                <i className="fa-solid fa-angles-down"></i>
            </Link>


        </div>
    );
}

export default ContainerBanner;
