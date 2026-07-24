import React, { useState, useEffect } from "react";
import "./ArchiveVideoReel.css";

function ArchiveVideoReel() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // seuil mobile
        };

        handleResize(); // vérifie au chargement
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Liens YouTube
    const desktopVideo = "https://www.youtube.com/embed/3psKeejOu0c";
    // const desktopVideo = "https://vimeo.com/1126640129";
    const mobileVideo = "https://www.youtube.com/embed/VkXnsf4n8Ps";



    return (
        <section className="video-session">
            <h1>Discover our archives</h1>
            <p>
                Here’s a compilation of our <strong>best music videos </strong>created between
                <strong>2012 </strong>and <strong>2016.</strong> <br/>
                New clips are coming soon with upgraded equipment, but these archives
                showcase our growth and our classic work.
            </p>
            <div className={`Archive-video-wrapper ${isMobile ? "mobile" : ""}`}>
                <iframe
                    src={isMobile ? mobileVideo : desktopVideo}
                    title="Compilation Falcon XXL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default ArchiveVideoReel;
