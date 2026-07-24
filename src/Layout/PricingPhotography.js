import './PricingVideo.css';
// import {NavLink} from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";



function PricingPhotography() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-PricingVideo">
            <h1>Our Photography Packages</h1>
            <div className="Container-PricingVideo-wrapper">


                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>Basic Package (Essential)</h2>

                    <ul className="pricing-list">
                        <li><i className="fa-solid fa-check"></i><span>1 to 2 hours of shooting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>1 location (indoor or outdoor)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Location, props, makeup not included (available upon request)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Natural lighting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Up to 30 shots taken</span></li>
                        <li><i className="fa-solid fa-check"></i><span>10 professionally edited photos (color and light correction)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Simple concept, no complex styling</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Delivery in 3 to 5 days</span></li>
                        <li><i className="fa-solid fa-check"></i><span>1 revision included</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Ideal for portraits, small business content, or personal shoots</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-x"
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
                    <h2>Standard Package (Creative)</h2>

                    <ul className="pricing-list-standard">
                        <li><i className="fa-solid fa-check"></i><span>3 to 4 hours of shooting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Up to 2 locations (indoor/outdoor)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Location, props, makeup not included (available upon request)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Mix of natural and artificial lighting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Up to 60 shots taken</span></li>
                        <li><i className="fa-solid fa-check"></i><span>20 professionally edited photos (color grading, retouching, ambiance)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Creative direction included</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Delivery within 5 to 7 days</span></li>
                        <li><i className="fa-solid fa-check"></i><span>2 revisions included</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Ideal for influencers, artists, or promotional projects</span>
                        </li>
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
                    <h2>Gold Package (Premium)</h2>

                    <ul className="pricing-list-Gold">
                        <li><i className="fa-solid fa-check"></i><span>Full day shooting (up to 6 hours)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Up to 3 different locations</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Styling and makeup artist included to ensure a professional look</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Professional lighting setup and studio equipment</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Pre-shoot concept and moodboard preparation</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Private online gallery</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Delivery within 7 to 10 days</span></li>
                        <li><i className="fa-solid fa-check"></i><span>3 revision included</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Ideal for high-end music videos, brands, companies, or luxury events</span>
                        </li>
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

export default PricingPhotography;