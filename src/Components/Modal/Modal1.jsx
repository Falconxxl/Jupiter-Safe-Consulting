import React, { useRef, useState, useEffect } from 'react';
import './Modal.css';
import { NavLink } from "react-router-dom";

// 🎬 Import des deux vidéos
import videoSrcDesktop from "../../MyVideos/z_banner41a.mp4";
import videoSrcMobile from "../../MyVideos/z_banner41e.mp4";

const Modal1 = ({ open, onClose }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(videoSrcDesktop);

    // 🧠 Détecte la taille d'écran et change la source vidéo
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 748px)");

        const handleChange = (e) => {
            if (e.matches) {
                setCurrentSrc(videoSrcMobile); // version mobile
            } else {
                setCurrentSrc(videoSrcDesktop); // version desktop
            }
        };

        // Appliquer immédiatement la bonne source
        handleChange(mediaQuery);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Recharger la vidéo à chaque changement de source
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play().catch(() => setIsPlaying(false));
            setIsPlaying(true);
        }
    }, [currentSrc]);

    if (!open) return null;

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='overlay' onClick={onClose}>
            <div className='modalContainer' onClick={e => e.stopPropagation()}>

                {/* Bouton fermer */}
                <p className='closeBtn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                {/* Contenu principal */}
                <div className="Container-Modal-Content">
                    <h1>Audiovisual</h1>

                    {/* === Zone Vidéo === */}
                    <div className="video-modal">
                        <div className="video-wrapper">
                            {!videoLoaded && (
                                <div className="video-loading">
                                    <div className="spinner"></div>
                                </div>
                            )}

                            <video
                                ref={videoRef}
                                loop
                                autoPlay
                                muted
                                playsInline
                                className="video-small-modal"
                                onCanPlayThrough={() => setVideoLoaded(true)}
                            >
                                <source src={currentSrc} type="video/mp4" />
                                Votre navigateur ne prend pas en charge la lecture de vidéos.
                            </video>

                            {/* Bouton Play / Pause */}
                            <button className="playPauseBtn" onClick={handlePlayPause}>
                                {isPlaying ? (
                                    <i className="fa-solid fa-circle-pause"></i>
                                ) : (
                                    <i className="fa-solid fa-circle-play"></i>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* === Checklist === */}
                    <div className="checklist-section">
                        <ul className="checklist">
                            <li className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <span>We create impactful audiovisual content with creativity and style.</span>
                            </li>
                            <li className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <span>We bring ideas to life through inspiring visuals.</span>
                            </li>
                            <li className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <span>From music videos to luxury wedding films.</span>
                            </li>
                            <li className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <span>We capture every story with emotion and precision.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* === Bouton d’action === */}
                <div className="buttonWrapper">
                    <NavLink to="/AudioVisual" className="button-Modal-Content">
                        View Audiovisual Service
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Modal1;
