import './PricingBranding.css';
// import {NavLink} from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";



function PricingMusic() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div>

            {/*-------------Beat packages-----------------------------------*/}

            <div className="Container-PricingVideo"
            >
                <h1>Our Music Production Packages</h1>

                <h2 style={{
                    fontSize:"30px",
                    fontFamily:"Poppins",
                    color:"white",
                    textAlign:"left",
                    width:"100%",
                    paddingLeft:"10%",
                    marginBottom:"50px"
                }}>
                    1. Beat
                </h2>

                <div className="Container-PricingVideo-wrapper"

                >

                    {/*----------Basic Package----------------*/}

                    <div className="PricingVideo-details-x">
                        <h2>Professional License</h2>

                        <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                            <li><i className="fa-solid fa-check"></i><span>WAV + MP3 files (studio-quality)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Trackouts / Stems (separated tracks for professional mixing)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Rights to monetize on Spotify, YouTube, Apple Music, Deezer, etc.</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Limited number of streams allowed (e.g. up to 500k or 1M streams)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Non-exclusive — the producer may resell the same beat to other artists</span></li>
                            <li><span><strong style={{color:"#ff70bc"}}>Purpose:</strong><br/> An advanced non-exclusive license for serious artists who
                                                                       want to monetize their songs on streaming platforms such as Spotify,
                                                                       YouTube, and Apple Music.
                                                           </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-x" style={{marginTop:"30px"}}
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
                        <h2>Monetization & Streaming Ready License</h2>

                        <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>WAV + MP3 files (studio-quality)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Trackouts / Stems (separated tracks for professional mixing)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Rights to monetize on Spotify, YouTube, Apple Music, Deezer, etc.</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Limited number of streams allowed (e.g. up to 500k or 1M streams)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Rights to perform live shows or local radio play</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Non-exclusive — the producer may resell the same beat to other artists</span></li>
                            <li><span><strong style={{color:"#2177fd"}}>Purpose:</strong><br/> An advanced non-exclusive license for serious artists
                                                                    who want to monetize their songs on streaming platforms such as Spotify, YouTube,
                                                                    and Apple Music.
                                                           </span></li>
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
                        <h2>Elite Creator License</h2>

                        <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>All files: WAV + MP3 + stems</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Broad or unlimited usage rights — unlimited streams, national radio, TV, sync (ads, film, games, etc.)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Rights to collect royalties or resell as the owner</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Exclusive license (beat sold only once)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>May include “Pro Features” such as: Full contract signing, Partial transfer of copyright, Direct access to the producer for beat adjustments, </span></li>
                            <li><i className="fa-solid fa-check"></i><span>Official production credit (“Prod by…”)</span></li>
                            <li><span><strong style={{color:"#d79a4c"}}>Purpose:</strong><br/> A high-end license, often semi-exclusive or exclusive,
                            offering extended professional rights and premium options.
                                                           </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-Gold" style={{marginTop:"35px"}}
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

            {/*-------------vocal packages-----------------------------------*/}

            <div className="Container-PricingVideo"
                 style={{paddingTop:"50px"}}
            >

                <h2 style={{
                    fontSize:"30px",
                    fontFamily:"Poppins",
                    color:"white",
                    textAlign:"left",
                    width:"100%",
                    paddingLeft:"10%",
                    marginBottom:"50px"
                }}>
                    2. Vocal Recording Packages
                </h2>

                <div className="Container-PricingVideo-wrapper">

                    {/*----------Basic Package----------------*/}

                    <div className="PricingVideo-details-x">
                        <h2>Basic package (Vocal Recording Only)</h2>

                        <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                            <li><i className="fa-solid fa-check"></i><span>Vocal recording session in studio</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Professional microphone (Neumann u87 or Brauner phantom classic)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>High-resolution WAV file delivery</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Recording engineer assistance during session</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Optional: Choice of microphone type
                                                                            (1st-class or 2nd-class studio mic) — affects price </span></li>
                            <li><span><strong style={{color:"#ff70bc"}}>Purpose:</strong><br/> For artists, influencers, or creators
                                                                        who simply want a clean, high-quality vocal recording they
                                can mix elsewhere.
                                                           </span></li>
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
                        <h2>Standard package (Vocal + Mix & Master)</h2>

                        <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>Vocal recording session</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Professional mix of vocals with your instrumental</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Mastering available on request</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Final track delivered in WAV + MP3 format</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Rights to perform live shows or local radio play</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Non-exclusive — the producer may resell the same beat to other artists</span></li>
                            <li><span><strong style={{color:"#2177fd"}}>Purpose:</strong><br/> An advanced non-exclusive license for serious artists
                                                                    who want to monetize their songs on streaming platforms such as Spotify, YouTube,
                                                                    and Apple Music.
                                                           </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-standard" style={{marginTop:"35px"}}
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
                        <h2>Premium package (Full Artistic Direction)</h2>

                        <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>Vocal recording session</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Professional mix & mastering</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Artistic direction and vocal coaching during session</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Guidance on tone, emotion, and delivery</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Access to studio network (producers, influencers, etc.)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Final WAV + MP3 file (radio & streaming quality)</span></li>
                            <li><span><strong style={{color:"#d79a4c"}}>Purpose:</strong><br/> For artists who want more than just recording —
                                                                        creative guidance, premium sound, and a complete professional experience.
                                                           </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-Gold" style={{marginTop:"35px"}}
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

            {/*-------------Full Production Packages (Beat + Vocals + Mix & Master)-----------------------------------*/}

            <div className="Container-PricingVideo"
                 style={{paddingTop:"50px"}}>

                <h2 style={{
                    fontSize:"30px",
                    fontFamily:"Poppins",
                    color:"white",
                    textAlign:"left",
                    width:"100%",
                    paddingLeft:"10%",
                    marginBottom:"50px"
                }}>
                    3. Full Production Packages (Beat + Vocals + Mix & Master)
                </h2>

                <div className="Container-PricingVideo-wrapper">

                    {/*----------Basic Package----------------*/}

                    <div className="PricingVideo-details-x">
                        <h2>Full Production Packages (Beat + Vocals + Mix & Master)</h2>

                        <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                            <li><i className="fa-solid fa-check"></i><span>Custom or pre-made beat (WAV + MP3)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Studio vocal recording session</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Professional microphone (Neumann u87 or Brauner phantom classic)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Delivery of separate beat + vocal files (ready for mixing)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Non-exclusive beat license (up to 250k streams)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Optional: pricing depending on recording time and beat type </span></li>
                            <li><span><strong style={{color:"#ff70bc"}}>Purpose:</strong><br/> For artists who want a custom beat and
                                                                       clean vocal recording to build their project.
                                                                       can mix elsewhere.
                                                           </span></li>
                        </ul>


                        <button className="btn-cta-PricingVideo-x" style={{marginTop:"60px"}}
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
                        <h2>Professional package (Beat + Mix & Master)</h2>

                        <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>Custom beat (WAV + MP3 + stems)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Vocal recording session</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Professional mix of beat + vocals</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Mastering (Spotify / Apple Music ready)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Non-exclusive or semi-exclusive license (up to 1M streams)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Credit mention (“Prod by Falcon XXL”)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Optional: pricing depending on exclusivity and project complexity </span></li>
                            <li><span><strong style={{color:"#2177fd"}}>Purpose:</strong><br/> For serious artists who want a fully mixed and streaming-ready track.
                                                           </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-standard" style={{marginTop:"150px"}}
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
                        <h2>Elite package (Full Artistic Production)</h2>

                        <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>Exclusive beat (custom-made for your vision)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Vocal recording session with artistic direction</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Professional mix & mastering</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Coaching on vocal performance & delivery</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Creative direction (help finding concept, vibe, hook, etc.)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Access to Falcon XXL’s network (engineers, influencers, media)</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Full rights to monetize and distribute (unlimited streams)</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>Optional contract for copyright and royalties management</span>
                            </li>
                            <li><span><strong style={{color:"#d79a4c"}}>Purpose:</strong><br/> For artists or brands seeking a complete, top-tier
                                                                        production with artistic guidance and industry-level sound.
                                                           </span></li>
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

        </div>
    );
}

export default PricingMusic;