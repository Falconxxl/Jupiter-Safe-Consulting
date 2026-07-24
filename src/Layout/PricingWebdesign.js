import './PricingWebdesign.css';
// import {NavLink} from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";



function PricingWebdesign() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-PricingVideo"
        >
            <h1>Our Webdesign Packages</h1>
            <div className="Container-PricingVideo-wrapper">


                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>Starter / Basic</h2>

                    <ul className="pricing-list">
                        <li><i className="fa-solid fa-check"></i><span>1 to 3 pages (Landing Page, About, Contact)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Custom and responsive design</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Contact form</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Hosting and domain setup</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Basic SEO (Google visibility)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Fast delivery</span></li>
                        <li><span><p style={{color:"#ff609d"}}>Ideal for:</p>Small businesses, freelancers, creatives, or influencers who want a simple, clean, and elegant website.</span></li>
                    </ul>

                    <button
                        className="btn-cta-PricingVideo-x"
                        onClick={() => setOpenQuote(true)}
                    >
                        Request a free quote
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                {/*----------Standard Package----------------*/}

                <div className="PricingVideo-details-standard">
                    <h2>Business / Standard</h2>

                    <ul className="pricing-list-standard">
                            <li><i className="fa-solid fa-check"></i><span>5 to 8 pages (Home, Services, Portfolio, Blog, Contact, etc.)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Custom UX design based on audience and competitor analysis</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>CMS or admin panel (easy content updates)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Basic webshop (up to 20 products)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Advanced SEO integration + Google Analytics</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Booking system integration (if needed)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Basic training on site management</span></li>
                            <li><span><p style={{color:"#0095ff"}}>Idéal pour: </p>SMEs, startups, shops, or agencies looking for a complete and dynamic online presence.</span></li>
                    </ul>


                    <button className="btn-cta-PricingVideo-standard"
                        onClick={() => setOpenQuote(true)}
                    >
                        Request a free quote
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                {/*----------Gold Package----------------*/}

                <div className="PricingVideo-details-Golg">
                    <h2>Premium / Deluxe</h2>

                    <ul className="pricing-list-Gold">
                        <li><i className="fa-solid fa-check"></i><span>Full website or advanced platform (e-commerce, education, SaaS, etc.)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Unlimited webshop with stock management and payment systems (Stripe, PayPal, etc.)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Smooth animations and transitions (React.js)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Complete branding (logo, brand guidelines, visual identity)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Visual content creation (photo, video, music, etc.)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Premium SEO optimization + digital marketing campaigns</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Continuous maintenance and updates</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Priority support and personalized follow-up</span></li>
                        <li><i className="fa-solid fa-check"></i><span>brands, tech startups, schools, or companies seeking a high-end platform.</span></li>
                        <li><span><p style={{color:"#f3bb2f"}}>Idéal pour: </p>brands, tech startups, schools, or companies seeking a high-end platform.</span></li>

                    </ul>

                    <button className="btn-cta-PricingVideo-Gold"
                        onClick={() => setOpenQuote(true)}
                    >
                        Request a free quote
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                {/*<div className="PricingVideo-details-x">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-x">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-basic">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-standard">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-gold">*/}
                {/*</div>*/}

            </div>
        </div>
    );
}

export default PricingWebdesign;