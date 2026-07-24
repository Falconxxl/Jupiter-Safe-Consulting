import './PricingVideo.css';
// import {NavLink} from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";


function PricingVideo() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-PricingVideo">
            <h1>Our Video Production Packages</h1>
            <div className="Container-PricingVideo-wrapper">

                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>Basic Package (Essential)</h2>

                    <ul className="pricing-list">
                        <li><i className="fa-solid fa-check"></i><span>2 to 3 hours of shooting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>1 location (indoor or outdoor)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Location and props rental not included (available upon request)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Natural lighting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>1 pro camera, up to 2 takes</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Simple concept without storyboard</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Basic color grading</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Simple editing</span></li>
                        <li><i className="fa-solid fa-check"></i><span>AI & special effects: not included, small effects available upon request.</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Delivery in 3 to 5 days</span></li>
                        <li><i className="fa-solid fa-check"></i><span>1 revision</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Teaser not included</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Ideal for simple music videos, content creators, or small presentations</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-x"
                            onClick={() => setOpenQuote(true)}>
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
                        <li><i className="fa-solid fa-check"></i><span>Full-day shoot (6 to 8 hours)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Up to 2 different locations</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Location and props rental available upon request</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Professional lighting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>1 pro camera + stabilizer</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Creative concept with mini storyboard</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Cinematic color grading</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Professional editing</span></li>
                        <li><i className="fa-solid fa-check"></i><span>AI & special effects: advanced correction, titles, and atmospheres</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Delivery in 7 to 10 days</span></li>
                        <li><i className="fa-solid fa-check"></i><span>2 revision</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Teaser included</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Ideal for music videos, events, brands, or professional videos</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-standard"
                            onClick={() => setOpenQuote(true)}>
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
                        <li><i className="fa-solid fa-check"></i><span>2 to 3 days of shooting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Multiple locations or studio</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Location and props rental included depending on concept</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Full cinema lighting setup</span></li>
                        <li><i className="fa-solid fa-check"></i><span>2 cinema 4K cameras + drone</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Full storyboard and artistic direction</span></li>
                        <li><i className="fa-solid fa-check"></i><span>High-end color grading</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Editing with visual effects and artistic transitions</span></li>
                        <li><i className="fa-solid fa-check"></i><span>AI & special effects: advanced integration</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Delivery in 14 to 21 days</span></li>
                        <li><i className="fa-solid fa-check"></i><span>3 revision</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Teaser + vertical version (Insta/TikTok)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Ideal for high-end music videos, brands, companies, or luxury events</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-Gold"
                            onClick={() => setOpenQuote(true)}>
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

export default PricingVideo;