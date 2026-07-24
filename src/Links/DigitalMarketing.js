import './DigitalMarketing.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import desktop_banner_photograhy from "../Images/background_digital_marketing5.png";
// import mobile_banner from "../Images/background_Brenda_blue_mobile6.png";
// import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
// import React from "react";
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import OurWorkflow from "../Layout/OurWorkflow";
import PricingDigitalMarketing from "../Layout/PricingDigitalMarketing";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import WhatsappFunction from "../Components/WhatsappFunction";

function DigitalMarketing() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-DigitalMarketing">
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            <div className="Container-webdesign">

                <img src={desktop_banner_photograhy} alt="Banner desktop" className="Webdesign-banner desktop-image"/>

                <img src={desktop_banner_photograhy} alt="Banner mobile" className="Webdesign-banner mobile-image"/>

                <div className="hero-content-webdesign">

                    <h1 style={{color:"#f3bb2f"}} >Digital Marketing, Strategy, Growth</h1>

                    <p className="webdesign-paragraphe-desktop" style={{color:"white"}}>

                        we help brands grow and shine online.
                        Our <strong style={{color:"#f3bb2f"}}>digital strategies </strong> attract, <br/>
                        convert, and retain your audience. From
                        <strong style={{color:"#f3bb2f"}}> social media </strong> to
                        <strong style={{color:"#f3bb2f"}}> SEO,<br/></strong> we boost your visibility and impact. Creative, data-driven, and <br/>
                        result-focused — we make <strong style={{color:"#f3bb2f"}}>digital </strong> work for you
                    </p>

                    <p className="webdesign-paragraphe-mobile" style={{color:"white", fontSize:"17px"}}>
                        we help brands grow and shine online.
                        Our <strong>digital strategies </strong> attract, convert, and
                        retain your audience. From
                        <strong> social media </strong> to
                        <strong> SEO,</strong> we boost your visibility and impact. Creative, data-driven, and <br/>
                        result-focused we make <strong>digital </strong> work for you
                    </p>

                    <button className="cta-btn-webdesign"
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

                <Link to="AudioVisual-Description" className="scroll-down-webdesign"
                      style={{border:"2px solid #f3bb2f"}}
                      offset={-90} duration={500} spy={true} smooth={true} >
                    <i className="fa-solid fa-angles-down"></i>
                </Link>
            </div>

            {/*---------------Description-digital Marketing----------------*/}

            <div className="AudioVisual-Description">

                <div className="AudioVisual-Description-left">
                    <p>
                        At <strong>Falcon XXL</strong>, we use digital marketing to elevate brands, businesses,
                        and creators online.
                    </p>

                </div>

                <div className="AudioVisual-Description-Right">
                    <p>
                        We craft powerful strategies to promote your products, services, or image — and maximize your impact across digital
                        platforms. We create powerful strategies to boost your online visibility, attract prospects, turn them into customers,
                        and build long-term loyalty.
                    </p>

                </div>

            </div>

            {/*---------------Type-Services Digital-Marketing--------------------*/}

            <div className="Container-WhyUs">

                <div className="Container-WhyUs-left">
                    <h1>Our digital marketing services</h1>
                    {/*<h1>Why <br />Choose <br /> Falcon XXL?</h1>*/}
                </div>

                <div className="Container-WhyUs-right">

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            1. Digital Strategy & Consulting
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Artist logo & personal brand identity
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Full digital audit (website, social media, SEO, etc.)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Tailor-made marketing strategy development
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Brand positioning and target audience definition
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Multichannel action plan (SEO, ads, content, email marketing…)
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Competitive analysis
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong> Build a clear and effective roadmap to grow your digital presence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            2. Social Media Management
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Account setup and management
                                    (Instagram, Facebook, TikTok, LinkedIn, X, etc.)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Full digital audit (website, social media, SEO, etc.)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Content planning and publishing
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Community management and engagement
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Multichannel action plan (SEO, ads, content, email marketing…)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Performance tracking and reporting
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Meta Ads campaigns (Facebook & Instagram Ads)
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong> Build an active, loyal, and growing community around your brand.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            3. Digital Content Creation
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Professional visuals (AAdobe Photoshop, Premiere Pro, Da Vinci Resolve, etc.)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Engaging content writing (posts, articles, newsletters)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Promotional videos, stories, and reels
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Brand positioning and target audience definition
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Photo and video shoots for brands
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Scriptwriting and storytelling for marketing content
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Create visuals and stories that connect emotionally and drive action.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            4. Search Engine Optimization (SEO)
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Full SEO audit
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Keyword research and integration
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Content and meta tag optimization
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Technical improvements (speed, structure, internal links)
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    SEO-optimized blog writing
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Rank higher on Google and attract qualified organic traffic.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            5. Online Advertising (Paid Ads)
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Google Ads campaigns (Search, Display, YouTube)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Meta Ads (Facebook & Instagram)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    TikTok Ads / LinkedIn Ads
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Remarketing and advanced targeting
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Ad budget optimization and ROI tracking
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Generate leads and sales quickly through targeted, high-performance ads.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            6. Email Marketing & Automation
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Creation of promotional and loyalty campaigns
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Automation workflows (welcome sequences, abandoned cart, client follow-up)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Professional email template design
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Open rate and conversion tracking
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Strengthen customer relationships and increase retention through smart communication.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            7. Branding & Digital Identity
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Logo and visual identity design
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Cohesive brand image across all channels
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Brand voice and storytelling development
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Visual consistency across website, social media, and ads
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Build a recognizable and trustworthy brand image that inspires confidence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*------------------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            8. Analytics & Optimization
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Performance tracking (Google Analytics, Meta Insights, etc.)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Custom dashboards and reporting
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Continuous optimization for maximum conversions
                                </p>
                            </div>

                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    A/B testing to improve campaign results
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Turn data into actionable insights to boost performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*------------------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content-x">
                        <div className="Container-WhyUs-right-title">
                            9. Content Marketing
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Content strategy (editorial calendar, topics, formats, goals)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    SEO-optimized blog writing
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Creation of guides, eBooks, newsletters, and product sheets
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Brand storytelling (highlighting your brand or your client’s story)
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Scriptwriting for videos, podcasts, or ads
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    Content repurposing — turning one piece of content into multiple formats
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    <strong style={{color:"#5ba7fd"}}>GOAL: </strong>
                                    Build trust, boost awareness, and generate leads through impactful content.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/*------------------------------------------------------------*/}

            <PricingDigitalMarketing/>
            <OurWorkflow/>
            <WhatsappFunction/>
            <Footer/>
        </div>
    );
}

export default DigitalMarketing;