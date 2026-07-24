import './PricingBranding.css';
// import {NavLink} from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";



function PricingBranding() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-PricingVideo">
            <h1>Our Branding Packages</h1>
            <div className="Container-PricingVideo-wrapper">


                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>Basic Package (Starter)</h2>

                    <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                        <li><i className="fa-solid fa-check"></i><span>Primary logo design</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Color palette & typography</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Business card & basic stationery</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Social media profile visuals (profile, banner, post template)</span></li>
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
                    <h2>Standard Package (Professional)</h2>

                    <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>Everything in Starter Identity</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Up to 2 locations (indoor/outdoor)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Logo variations & icon set</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Extended stationery (letterhead, envelope, folder)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Social media templates & highlight covers</span></li>
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
                    <h2>Gold Package (Elite)</h2>

                    <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>Everything in Professional Identity</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Complete brand book (visual system + guidelines)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Packaging & poster design</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Campaign and advertising visuals</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Product or team photoshoot</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Creative direction & consulting</span></li>
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

            </div>
        </div>
    );
}

export default PricingBranding;