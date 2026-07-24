import './PricingBranding.css';
// import {NavLink} from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";


function PricingDigitalMarketing() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-PricingVideo">
            <h1>Our Digital Marketing Packages</h1>
            <div className="Container-PricingVideo-wrapper">


                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>Basic Package (Foundation Plan)</h2>

                    <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                        <li><i className="fa-solid fa-check"></i><span>Digital audit (website + social media)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Tailor-made mini digital strategy</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Social media setup (1–2 platforms)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>4 posts per month (visuals + captions)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Basic SEO optimization</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Monthly performance report</span></li>
                        <li><span>For startups or small businesses beginning their online journey.</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-x" style ={{marginTop:"50px"}}
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
                    <h2>Standard Package (Growth Plan)</h2>

                    <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>Full digital strategy & consulting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Social media management (up to 3 platforms)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>8–12 posts per month + community management</span></li>
                        <li><i className="fa-solid fa-check"></i><span>SEO optimization (keywords, meta, blog setup)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>One paid ad campaign (Meta or Google Ads)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Monthly analytics and optimization</span></li>
                        <li><span>For brands that want consistent growth and engagement.</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-standard" style ={{marginTop:"30px"}}
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
                    <h2>Gold Package (Premium Expansion Plan)</h2>

                    <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>Complete digital strategy & consulting</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Social media management (all major platforms)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>Content creation (videos, reels, blog posts, newsletters)</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>SEO + Paid Ads (Google, Meta, TikTok, LinkedIn)</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Email marketing & automation setup</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Branding & storytelling optimization</span></li>
                        <li><i className="fa-solid fa-check"></i><span>Custom dashboard + monthly performance review</span></li>
                        <li><span>For established brands ready to scale and dominate their market.</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-Gold" style ={{marginTop:"-10px"}}
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

export default PricingDigitalMarketing;