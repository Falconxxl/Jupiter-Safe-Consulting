import React, { useEffect, useRef, useState } from 'react';
import './ServiceComparison.css';

// NOTE: adjust these import paths to match wherever your images actually
// live in the project (e.g. "../assets/pic-comparaisson-before.png").
import picBefore from '../Images/pic-comparaisson-before.png';
import picAfter from '../Images/pic-comparaisson-after.png';
import RequestAQuote from "../Components/RequestAQuote";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";

/**
 * ServiceComparison
 * "Van oud naar nieuw" — before/after showcase section for the Pasha Bouw
 * homepage. Reuses the site's typography (Poppins), red CTA button style,
 * and card/shadow language.
 */
export default function ServiceComparison() {

    const [openQuote, setOpenQuote] = useState(false);

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // Fade in + slide up once the section enters the viewport
    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (


        <section className="service-comparison" ref={sectionRef}>
            <div
                className={`service-comparison-inner ${
                    visible ? 'service-comparison-visible' : ''
                }`}
            >
                {/* ------------------------------ Header ------------------------------ */}
                <header className="service-comparison-header">
                    <h2 className="service-comparison-title">Deuren & Kozijnen (Van oud naar nieuw)</h2>
                    <p className="service-comparison-paragraph">
                        Ontdek hoe Pasha Bouw oude deuren en kozijnen vernieuwt tot moderne,
                        stijlvolle en duurzame elementen die perfect passen bij uw woning.
                        Bekijk onze projecten vóór en na de renovatie en ervaar het verschil in
                        uitstraling, comfort en kwaliteit.
                    </p>
                </header>

                {/* --------------------------- Comparison --------------------------- */}
                <div className="comparison-container">
                    <article className="comparison-card">
                        <h3 className="comparison-card-title">Voor</h3>
                        <div className="comparison-image-wrapper">
                            <img
                                src={picBefore}
                                alt="Woning voor de renovatie door Pasha Bouw"
                                className="comparison-image"
                            />
                        </div>
                    </article>

                    <article className="comparison-card">
                        <h3 className="comparison-card-title">Na</h3>
                        <div className="comparison-image-wrapper">
                            <img
                                src={picAfter}
                                alt="Woning na de renovatie door Pasha Bouw"
                                className="comparison-image"
                            />
                        </div>
                    </article>
                </div>

                {/* ------------------------------- CTA -------------------------------- */}
                <div className="comparison-cta-wrapper">
                    <button type="button" className="comparison-cta-btn"
                            onClick={() => setOpenQuote(true)}>
                        Vraag een offerte aan
                        <span className="comparison-cta-arrow" aria-hidden="true">
              &#8594;
            </span>
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>
            </div>
        </section>
    );
}