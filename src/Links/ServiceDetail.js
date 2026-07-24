import React, { useEffect, useRef, useState } from "react";
import "./ServiceDetail.css";
import Navbar2 from "../Layout/Navbar2";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import isoPresentationImage from "../Images/pic_nathaly_nice1.jpg";
import Footer from "../Layout/Footer";
import RequestAQuote from "../Components/RequestAQuote";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";

/* =====================================================================
   ICONS
   Lightweight inline SVGs — no external icon library required.
===================================================================== */

const IconCheck = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path
            d="M7.5 12.5L10.2 15.2L16.5 8.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const IconArrow = () => (
    <svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 7H19M19 7L13 1M19 7L13 13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const IconPlus = ({ open }) => (
    <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`faq-icon-svg ${open ? "is-open" : ""}`}
    >
        <line x1="10" y1="3" x2="10" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="faq-icon-vertical" />
        <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const IconCertificate = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="4" width="19" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 8H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 11.5H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17.5" cy="13" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16.3 20.5L16.7 15.6H18.3L18.7 20.5L17.5 19.6L16.3 20.5Z" fill="currentColor" />
    </svg>
);

const IconWarning = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 3.5L22 20.5H2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
        <path d="M12 10V14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="17.3" r="1" fill="currentColor" />
    </svg>
);

const IconShield = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2.5L20 5.5V11.5C20 16.5 16.8 20.2 12 21.5C7.2 20.2 4 16.5 4 11.5V5.5L12 2.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
        <path d="M8.5 12L11 14.5L15.7 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconOrganization = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="5.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="5.5" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18.5" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.8V11.5M12 11.5L5.8 15.9M12 11.5L18.2 15.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const IconProcess = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4 9.5C4 6.5 6.5 4 9.5 4H15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
        <path d="M12.5 1.5L15.5 4L12.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M20 14.5C20 17.5 17.5 20 14.5 20H9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
        <path d="M11.5 22.5L8.5 20L11.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconChart = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 20.5H20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="5.5" y="13" width="3" height="7.5" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
        <rect x="10.5" y="8.5" width="3" height="12" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15.5" y="4" width="3" height="16.5" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

const ICONS = {
    warning: IconWarning,
    shield: IconShield,
    organization: IconOrganization,
    process: IconProcess,
    chart: IconChart,
    certificate: IconCertificate,
};

const ServiceIcon = ({ name }) => {
    const Icon = ICONS[name] || IconCertificate;
    return <Icon />;
};

/* =====================================================================
   DEFAULT CONTENT — "Systèmes de management ISO"
   -----------------------------------------------------------------
   This object is the only thing that changes from one expertise page
   to the next. To create a new service page, duplicate this object
   (or pass a new one via the `data` prop), keep the same shape, and
   the layout below will render it automatically.
===================================================================== */

export const isoServiceData = {
    eyebrow: "Expertise QHSE",
    title: "Systèmes de management ISO",
    intro:
        "NatProTech accompagne les entreprises dans la mise en place de systèmes de management conformes aux standards internationaux, pour structurer durablement leur qualité, leur sécurité et leur performance.",
    ctaPrimary: "Découvrir nos expertises",
    ctaSecondary: "Demander un audit",

    presentation: {
        title: "Qu'est-ce qu'un système de management ISO ?",

        text:
            "Un système de management ISO est un cadre structuré permettant aux organisations d'améliorer durablement leur qualité, leur sécurité et leur performance. NatProTech accompagne les entreprises dans la mise en place de ces référentiels internationaux, de la préparation jusqu'à la certification.",

        image: isoPresentationImage,

        standards: [
            {
                code: "ISO 9001",
                label: "Management de la qualité",
                icon: "certificate"
            },
            {
                code: "ISO 14001",
                label: "Management environnemental",
                icon: "certificate"
            },
            {
                code: "ISO 45001",
                label: "Santé et sécurité au travail",
                icon: "certificate"
            },
            {
                code: "ISO 22000",
                label: "Sécurité alimentaire",
                icon: "certificate"
            },
        ],
    },

    challenges: {
        title: "Les défis auxquels vos équipes font face",
        subtitle:
            "Sans cadre structuré, ces difficultés freinent la performance et la crédibilité de votre organisation.",
        items: [
            {
                title: "Non-conformité",
                text: "Des écarts réglementaires exposent l'organisation à des sanctions et à une perte de confiance.",
                icon: "warning",
            },
            {
                title: "Accidents professionnels",
                text: "L'absence de procédures claires augmente les risques pour la sécurité de vos équipes.",
                icon: "shield",
            },
            {
                title: "Organisation inefficace",
                text: "Des responsabilités mal définies ralentissent la prise de décision et l'exécution.",
                icon: "organization",
            },
            {
                title: "Processus mal définis",
                text: "Un manque de standardisation entraîne des erreurs récurrentes et coûteuses.",
                icon: "process",
            },
            {
                title: "Perte de performance",
                text: "Sans indicateurs fiables, il devient difficile d'identifier les leviers d'amélioration.",
                icon: "chart",
            },
        ],
    },

    process: {
        title: "Notre accompagnement",
        steps: [
            { label: "Diagnostic initial", text: "État des lieux complet de vos pratiques actuelles." },
            { label: "Analyse des besoins", text: "Identification des écarts et des priorités d'action." },
            { label: "Mise en place du système", text: "Déploiement des processus et des outils adaptés." },
            { label: "Formation des équipes", text: "Montée en compétence de vos collaborateurs sur le terrain." },
            { label: "Suivi et amélioration continue", text: "Audits de contrôle et progrès mesuré dans le temps." },
        ],
    },

    advantages: {
        title: "Pourquoi choisir NatProTech ?",
        items: [
            { title: "20 ans d'expérience", text: "Une expertise éprouvée auprès d'organisations de toutes tailles." },
            { title: "Expertise terrain", text: "Des consultants présents auprès de vos équipes, pas seulement sur le papier." },
            { title: "Standards internationaux", text: "Une parfaite maîtrise des référentiels ISO reconnus mondialement." },
            { title: "Approche personnalisée", text: "Chaque accompagnement est conçu selon vos enjeux spécifiques." },
            { title: "Solutions adaptées aux entreprises africaines", text: "Une connaissance fine du contexte réglementaire local." },
        ],
    },

    benefits: {
        title: "Les bénéfices pour votre organisation",
        items: [
            { title: "Réduction des risques", text: "Anticipez et maîtrisez les risques opérationnels majeurs." },
            { title: "Conformité réglementaire", text: "Répondez sereinement aux exigences normatives en vigueur." },
            { title: "Amélioration de la performance", text: "Optimisez vos processus et vos ressources durablement." },
            { title: "Image de marque renforcée", text: "Renforcez la confiance de vos clients et partenaires." },
            { title: "Organisation efficace", text: "Clarifiez les rôles et fluidifiez la prise de décision." },
            { title: "Culture sécurité", text: "Installez des réflexes durables de prévention à tous les niveaux." },
        ],
    },

    faq: {
        title: "Questions fréquentes",
        items: [
            {
                question: "Qu'est-ce qu'une certification ISO exactement ?",
                answer:
                    "C'est une reconnaissance officielle, délivrée par un organisme accrédité, attestant qu'une organisation respecte les exigences d'une norme internationale (qualité, environnement, sécurité...).",
            },
            {
                question: "Quelle est la durée d'accompagnement avec NatProTech ?",
                answer:
                    "En moyenne entre 6 et 12 mois selon la maturité de vos processus existants et le nombre de normes visées, avec un suivi post-certification proposé en option.",
            },
            {
                question: "En quoi consiste l'audit interne ?",
                answer:
                    "Il s'agit d'une évaluation régulière de vos processus par nos consultants, permettant d'identifier les écarts avant l'audit de certification et de garantir le maintien de la conformité.",
            },
            {
                question: "Accompagnez-vous aussi bien les PME que les grandes entreprises ?",
                answer:
                    "Oui. Notre méthodologie s'adapte à la taille et à la maturité de chaque organisation, d'une PME en structuration à un grand groupe multi-sites.",
            },
            {
                question: "Comment se déroule concrètement l'accompagnement NatProTech ?",
                answer:
                    "Nous suivons une méthode en cinq étapes : diagnostic, analyse des besoins, mise en place du système, formation des équipes, puis suivi et amélioration continue.",
            },
        ],
    },

    cta: {
        title: "Prêt à structurer votre démarche qualité ?",
        text:
            "Nos experts QHSE vous accompagnent depuis le diagnostic jusqu'à la certification, avec une méthode éprouvée et un suivi sur mesure.",
        primary: "Demander un audit",
        secondary: "Nous contacter",
    },
};

/* =====================================================================
   SCROLL REVEAL — small IntersectionObserver hook + wrapper component
===================================================================== */

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: "0px 0px -60px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

const Reveal = ({ children, direction = "up", delay = 0, className = "", as: Tag = "div" }) => {
    const [ref, inView] = useInView();
    return (
        <Tag
            ref={ref}
            className={`sd-reveal sd-reveal--${direction} ${inView ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
};

/* =====================================================================
   MAIN COMPONENT
===================================================================== */

function ServiceDetail({ data = isoServiceData }) {
    const [openFaq, setOpenFaq] = useState(0);
    const [timelineRef, timelineInView] = useInView(0.2);
    const [openQuote, setOpenQuote] = useState(false);

    const toggleFaq = (index) => {
        setOpenFaq((current) => (current === index ? -1 : index));
    };

    return (
        <div className="service-detail">
            <Navbar2 />
            <Navbar2Mobile />
            <NavbarMenu />
            <NavbarMenuMobile />

            {/* ---------------------------------------------------------- */}
            {/* 1. HERO — full-bleed blue, left aligned                    */}
            {/* ---------------------------------------------------------- */}
            <section className="service-hero">
                <div className="service-container service-hero__content">
                    <Reveal direction="up">
                        <span className="service-eyebrow service-eyebrow--light">{data.eyebrow}</span>
                        <h1 className="service-hero__title">{data.title}</h1>
                        <p className="service-hero__text">{data.intro}</p>
                        <div className="service-hero__actions">

                            <button
                                className="service-btn service-btn--white"
                                onClick={() => setOpenQuote(true)}
                            >
                                {data.ctaSecondary}
                                <IconArrow />
                            </button>

                        </div>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </Reveal>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 2. PRÉSENTATION + NORMES ISO                                */}
            {/* ---------------------------------------------------------- */}
            <section className="service-section service-presentation">
                <div className="service-container service-presentation__grid">
                    <Reveal direction="left" className="service-presentation__media">
                        <img src={data.presentation.image} alt={data.presentation.title} />
                    </Reveal>

                    <Reveal direction="up" className="service-presentation__body">
                        <h2 className="service-title">{data.presentation.title}</h2>
                        <p className="service-text">{data.presentation.text}</p>
                    </Reveal>
                </div>

                <div className="service-container">
                    <div className="service-iso-grid">
                        {data.presentation.standards.map((standard, index) => (
                            <Reveal
                                key={standard.code}
                                direction="up"
                                delay={index * 90}
                                className="service-iso-card"
                            >
                <span className="service-iso-card__icon">
                  <ServiceIcon name={standard.icon} />
                </span>
                                <h3 className="service-iso-card__code">{standard.code}</h3>
                                <p className="service-iso-card__label">{standard.label}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 3. LES DÉFIS DES ENTREPRISES — left aligned                */}
            {/* ---------------------------------------------------------- */}
            <section className="service-section service-section--tint service-challenges">
                <div className="service-container">
                    <Reveal direction="up" className="service-section-head service-section-head--left">
                        <h2 className="service-title">{data.challenges.title}</h2>
                        <p className="service-subtitle">{data.challenges.subtitle}</p>
                    </Reveal>

                    <div className="service-challenges__grid">
                        {data.challenges.items.map((item, index) => (
                            <Reveal
                                key={item.title}
                                direction="up"
                                delay={(index % 3) * 100}
                                className="service-card service-challenge-card"
                            >
                <span className="service-challenge-card__icon">
                  <ServiceIcon name={item.icon} />
                </span>
                                <h3 className="service-card__title">{item.title}</h3>
                                <p className="service-card__text">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 4. NOTRE ACCOMPAGNEMENT — timeline                          */}
            {/* ---------------------------------------------------------- */}
            <section className="service-section service-process">
                <div className="service-container">
                    <Reveal direction="up" className="service-section-head">
                        <h2 className="service-title">{data.process.title}</h2>
                    </Reveal>

                    <div
                        className={`service-timeline ${timelineInView ? "is-visible" : ""}`}
                        ref={timelineRef}
                    >
                        <div className="service-timeline__track">
                            <div className="service-timeline__track-fill" />
                        </div>

                        <div className="service-timeline__steps">
                            {data.process.steps.map((step, index) => (
                                <div
                                    className="service-timeline__step"
                                    key={step.label}
                                    style={{ transitionDelay: `${index * 140}ms` }}
                                >
                  <span className="service-timeline__number">
                    <IconArrow />
                  </span>
                                    <h3 className="service-timeline__label">{step.label}</h3>
                                    <p className="service-timeline__text">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 5. POURQUOI CHOISIR NATPROTECH                              */}
            {/* ---------------------------------------------------------- */}
            <section className="service-section service-section--dark service-advantages">
                <div className="service-container">
                    <Reveal direction="up" className="service-section-head">
                        <h2 className="service-title service-title--light">{data.advantages.title}</h2>
                    </Reveal>

                    <div className="service-advantages__grid">
                        {data.advantages.items.map((item, index) => (
                            <Reveal
                                key={item.title}
                                direction="up"
                                delay={(index % 3) * 100}
                                className="service-advantage"
                            >
                <span className="service-advantage__icon">
                  <IconCheck />
                </span>
                                <h3 className="service-advantage__title">{item.title}</h3>
                                <p className="service-advantage__text">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 6. LES BÉNÉFICES                                            */}
            {/* ---------------------------------------------------------- */}
            <section className="service-section service-benefits">
                <div className="service-container">
                    <Reveal direction="up" className="service-section-head">
                        <h2 className="service-title">{data.benefits.title}</h2>
                    </Reveal>

                    <div className="service-benefits__grid">
                        {data.benefits.items.map((item, index) => (
                            <Reveal
                                key={item.title}
                                direction="up"
                                delay={(index % 3) * 90}
                                className="service-card service-benefit-card"
                            >
                                <h3 className="service-card__title">{item.title}</h3>
                                <p className="service-card__text">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 7. FAQ                                                      */}
            {/* ---------------------------------------------------------- */}
            <section className="service-section service-section--tint service-faq">
                <div className="service-container service-faq__container">
                    <Reveal direction="up" className="service-section-head">
                        <h2 className="service-title">{data.faq.title}</h2>
                    </Reveal>

                    <div className="service-faq__list">
                        {data.faq.items.map((item, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <Reveal
                                    as="div"
                                    key={item.question}
                                    direction="up"
                                    delay={index * 70}
                                    className={`service-faq__item ${isOpen ? "is-open" : ""}`}
                                >
                                    <button
                                        type="button"
                                        className="service-faq__question"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{item.question}</span>
                                        <span className="service-faq__icon">
                      <IconPlus open={isOpen} />
                    </span>
                                    </button>

                                    <div
                                        className="service-faq__answer-wrapper"
                                        style={{ maxHeight: isOpen ? "400px" : "0px" }}
                                    >
                                        <p className="service-faq__answer">{item.answer}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 8. CALL TO ACTION                                           */}
            {/* ---------------------------------------------------------- */}
            {/*<section className="service-cta" id="contact">*/}
            {/*    <div className="service-container">*/}
            {/*        <Reveal direction="up" className="service-cta__inner">*/}
            {/*            <h2 className="service-cta__title">{data.cta.title}</h2>*/}
            {/*            <p className="service-cta__text">{data.cta.text}</p>*/}
            {/*            <div className="service-cta__actions">*/}
            {/*                /!*<a href="#contact" className="service-btn service-btn--white service-btn--small">*!/*/}
            {/*                /!*    {data.cta.primary}*!/*/}
            {/*                /!*    <IconArrow />*!/*/}
            {/*                /!*</a>*!/*/}
            {/*                <a href="#contact" className="service-btn service-btn--ghost service-btn--small">*/}
            {/*                    {data.cta.secondary}*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </Reveal>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <Footer/>
        </div>
    );
}

export default ServiceDetail;