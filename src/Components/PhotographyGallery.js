import React, { useState } from "react";
import "./PhotographyGallery.css";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // <-- important

// ✅ Import correct de ton image locale
import photography_nahile from "../../src/Images/image_dienst_badkamer.jpg";
import photography_brenda1 from "../../src/Images/image_dienst_badkamer.jpg";
import photography_falconxxl_background from "../../src/Images/image_dienst_badkamer.jpg";
import mikeElenore2 from "../../src/Images/image_dienst_badkamer.jpg";

import photography_fashion1 from "../../src/Images/image_dienst_schilderen.jpg";
import photography_fashion2 from "../../src/Images/image_dienst_schilderen.jpg";
import photography_fashion3 from "../../src/Images/image_dienst_schilderen.jpg";
import photography_fashion4 from "../../src/Images/image_dienst_schilderen.jpg";

import photography_wedding1 from "../../src/Images/image_dienst_tegelwerk.jpg";
import photography_wedding2 from "../../src/Images/image_dienst_tegelwerk.jpg";
import photography_wedding3 from "../../src/Images/image_dienst_tegelwerk.jpg";
import photography_wedding4 from "../../src/Images/image_dienst_tegelwerk.jpg";

import senecaElenore from "../../src/Images/image_dienst_deuren_kozijn.jpg";
import mikeElenore1 from "../../src/Images/image_dienst_deuren_kozijn.jpg";
import mikeSergio from "../../src/Images/image_dienst_deuren_kozijn.jpg";
import mikeSergio2 from "../../src/Images/image_dienst_deuren_kozijn.jpg";

import photography_emotive1 from "../../src/Images/image_dienst_keukenrenovatie.jpg";
import photography_emotive2 from "../../src/Images/image_dienst_keukenrenovatie.jpg";
import photography_emotive3 from "../../src/Images/image_dienst_keukenrenovatie.jpg";
import photography_emotive5 from "../../src/Images/image_dienst_keukenrenovatie.jpg";


function PhotographyGallery() {
    // const [openQuote, setOpenQuote] = useState(false);
    const sections = [
        {
            id: "lifestyle",
            title: "Badkamer renovatie in Middelburg",
            subtitle: "Voor deze woning hebben wij de badkamer volledig vernieuwd. Van tegelwerk tot sanitair en afwerking hebben wij gezorgd voor een moderne en praktische ruimte.",
            images: [
                photography_nahile,
                photography_brenda1,
                photography_falconxxl_background,
                mikeElenore2,
            ],
        },
        {
            id: "fashion",
            title: "Schilderwerk renovatie in Vlissingen ",
            subtitle: "Voor deze woning hebben wij het schilderwerk volledig verzorgd. Door professioneel schilderwerk en een nette afwerking hebben wij de ruimtes een frisse en nieuwe uitstraling gegeven.",
            images: [
                photography_fashion1,
                photography_fashion2,
                photography_fashion3,
                photography_fashion4,
            ],
        },
        {
            id: "wedding",
            title: "Modern tegelwerk gerealiseerd in Zierikzee",
            subtitle: "Voor deze woning hebben wij het tegelwerk uitgevoerd met oog voor detail. Van wanden tot vloeren zorgen wij voor een strak resultaat dat zowel praktisch als stijlvol is.",
            images: [
                photography_wedding1,
                photography_wedding2,
                photography_wedding3,
                photography_wedding4,
            ],
        },
        {
            id: "music",
            title: "Nieuwe deuren en kozijnen geplaatst in Goes.",
            subtitle: "Voor deze woning hebben wij de deuren en kozijnen vernieuwd. Met zorg voor plaatsing, afwerking en uitstraling zorgen wij voor een duurzame en moderne oplossing die perfect aansluit bij de woning.",
            images: [
                senecaElenore,
                mikeSergio2,
                mikeSergio,
                mikeElenore1,
            ],
        },
        {
            id: "emotivePortraits",
            title: "Moderne keukenrenovatie uitgevoerd in Breda",
            subtitle: "Voor deze woning hebben wij de keuken gerenoveerd en aangepast aan de wensen van de bewoners. Wij zorgen voor een functionele, moderne en stijlvolle keukenruimte.",
            images: [
                photography_emotive1,
                photography_emotive5,
                photography_emotive2,
                photography_emotive3,
                // photography_emotive4,
            ],
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const openModal = (sectionIndex, imageIndex) => {
        setActiveSectionIndex(sectionIndex);
        setActiveImageIndex(imageIndex);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    const showPrev = () => {
        const images = sections[activeSectionIndex].images;
        setActiveImageIndex((i) => (i - 1 + images.length) % images.length);
    };

    const showNext = () => {
        const images = sections[activeSectionIndex].images;
        setActiveImageIndex((i) => (i + 1) % images.length);
    };

    return (
        <div className="photography-container">
            <main>
                {sections.map((section, sIdx) => (
                    <section key={section.id} className="photography-section">
                        <div className="section-header">
                            <div>
                                <h2>{section.title}</h2>
                                <p>{section.subtitle}</p>
                            </div>
                            {/*<span>{section.images.length} </span>*/}
                        </div>

                        <div className="gallery-grid">
                            {section.images.map((src, i) => (
                                <div
                                    key={src + i}
                                    className="gallery-item"
                                    onClick={() => openModal(sIdx, i)}
                                >
                                    <img src={src} alt={`${section.title} ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeModal}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                        <button className="nav-btn left" onClick={showPrev}>
                            <i className="fa-solid fa-circle-chevron-left"></i>
                        </button>
                        <img
                            src={sections[activeSectionIndex].images[activeImageIndex]}
                            alt="Expanded"
                        />
                        <button className="nav-btn right" onClick={showNext}>
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </button>

                        <div className="thumbnails">
                            {sections[activeSectionIndex].images.map((thumb, idx) => (
                                <img
                                    key={thumb + idx}
                                    src={thumb}
                                    alt={`Thumb ${idx + 1}`}
                                    className={idx === activeImageIndex ? "active" : ""}
                                    onClick={() => setActiveImageIndex(idx)}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default PhotographyGallery;
