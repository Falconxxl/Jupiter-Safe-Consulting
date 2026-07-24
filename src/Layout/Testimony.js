import React, { useState, useRef } from 'react';
import './Testimony.css';

// ─── Data ─────────────────────────────────────────────────────────────

const testimonials = [
    {
        id: 1,
        name: 'Congo Logistics SARL',
        city: 'Kinshasa',
        project: 'Système de management ISO',
        review:
            "NatProteg nous a accompagnés dans la mise en place de notre système de management ISO. Grâce à leur expertise et leur méthodologie, nous avons structuré nos processus, renforcé notre conformité et amélioré notre efficacité opérationnelle. Une équipe professionnelle et à l'écoute.",
    },
    {
        id: 2,
        name: 'Matadi Port Services',
        city: 'Matadi',
        project: 'Audit QHSE',
        review:
            "L'audit réalisé par NatProteg nous a permis d'identifier plusieurs axes d'amélioration en matière de qualité, d'hygiène et de sécurité. Les recommandations étaient claires, concrètes et parfaitement adaptées à notre activité. Nous recommandons vivement leurs services.",
    },
    {
        id: 3,
        name: 'Kisangani Agro Industrie',
        city: 'Kisangani',
        project: 'Gestion des risques professionnels',
        review:
            "Nous recherchions un partenaire capable d'améliorer la sécurité de nos équipes. NatProteg a réalisé une analyse complète des risques et proposé des solutions efficaces. Nous avons constaté une nette amélioration de nos pratiques et de notre organisation.",
    },
    {
        id: 4,
        name: 'Katanga Mining Solutions',
        city: 'Lubumbashi',
        project: 'Formation QHSE',
        review:
            "Les formations dispensées par NatProteg ont permis à nos collaborateurs de mieux comprendre les exigences QHSE et d'adopter les bonnes pratiques au quotidien. Les formateurs étaient compétents, pédagogues et très disponibles.",
    },
    {
        id: 5,
        name: 'Congo Bâtiment & Construction',
        city: 'Kinshasa',
        project: 'Accompagnement QHSE',
        review:
            "NatProteg nous accompagne dans la mise en conformité réglementaire de notre entreprise. Leur suivi est rigoureux et les solutions proposées sont toujours adaptées à notre secteur. Un véritable partenaire de confiance.",
    },
    {
        id: 6,
        name: 'Horizon Industrie',
        city: 'Lubumbashi',
        project: 'Diagnostic QHSE',
        review:
            "Le diagnostic réalisé par NatProteg nous a permis d'avoir une vision claire de nos points forts et des améliorations à mettre en œuvre. Leur approche est structurée, transparente et orientée vers des résultats concrets.",
    },
    {
        id: 7,
        name: 'Trans Kongo Express',
        city: 'Matadi',
        project: 'Amélioration continue',
        review:
            "Depuis notre collaboration avec NatProteg, nous bénéficions d'un accompagnement régulier qui nous aide à maintenir nos performances et à améliorer continuellement nos pratiques QHSE. Leur expertise apporte une réelle valeur ajoutée à notre entreprise.",
    },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(testimonials.length / CARDS_PER_PAGE);

// ─── Stars ────────────────────────────────────────────────────────────
function Stars() {
    return (
        <div className="ts-stars">
            {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="ts-star">★</span>
            ))}
        </div>
    );
}

// ─── Single card ──────────────────────────────────────────────────────
function TestimonyCard({ t }) {
    return (
        <div className="ts-card">
            <div className="ts-quote" aria-hidden="true">"</div>
            <p className="ts-review">{t.review}</p>
            <Stars />
            <div className="ts-divider" />
            <div className="ts-author-block">
                <div className="ts-avatar">{t.name.charAt(0)}</div>
                <div>
                    <p className="ts-author">{t.name}</p>
                    <p className="ts-meta">
                        <span className="ts-city">{t.city}</span>
                        <span className="ts-sep">·</span>
                        <span className="ts-project">{t.project}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────
function Testimony() {
    const [page, setPage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState('next');

    // Touch swipe (mobile)
    const touchStartX = useRef(null);
    const SWIPE_THRESHOLD = 50;

    const changePage = (newPage, dir) => {
        if (animating || newPage === page) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setPage(newPage);
            setAnimating(false);
        }, 380);
    };

    const goNext = () => {
        if (page < TOTAL_PAGES - 1) changePage(page + 1, 'next');
    };

    const goPrev = () => {
        if (page > 0) changePage(page - 1, 'prev');
    };

    // Mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            diff > 0 ? goNext() : goPrev();
        }
    };

    // Visible cards for current page
    const start = page * CARDS_PER_PAGE;
    const visibleCards = testimonials.slice(start, start + CARDS_PER_PAGE);

    const trackClass = [
        'ts-track',
        animating ? `ts-track--exit-${direction}` : 'ts-track--enter',
    ].join(' ');

    return (
        <section className="ts-section">

            {/* ── Header ── */}
            <div className="ts-header">
                <span className="ts-eyebrow">
                    {/*Ils nous font confiance*/}
                    Témoignages de nos clients
                </span>

                {/*<h2 className="ts-title">*/}
                {/*    Leur satisfaction est{' '}*/}
                {/*    <span className="ts-title-accent">notre meilleure référence</span>*/}
                {/*</h2>*/}

                <p className="ts-subtitle">
                    Découvrez les retours d'entreprises qui ont choisi NatProteg pour renforcer leur performance QHSE et leur conformité réglementaire.
                </p>
            </div>

            {/* ── Cards grid ── */}
            <div
                className="ts-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className={trackClass} key={page}>
                    {visibleCards.map((t) => (
                        <TestimonyCard key={t.id} t={t} />
                    ))}
                </div>
            </div>

            {/* ── Bottom bar: timeline + buttons ── */}
            <div className="ts-bottom">

                {/* Timeline progress */}
                <div className="ts-timeline">
                    <div
                        className="ts-timeline-fill"
                        style={{ width: `${((page + 1) / TOTAL_PAGES) * 100}%` }}
                    />
                </div>

                {/* Nav buttons — desktop only */}
                <div className="ts-nav-buttons">
                    <button
                        className={`ts-btn ${page === 0 ? 'ts-btn--disabled' : ''}`}
                        onClick={goPrev}
                        disabled={page === 0}
                        aria-label="Vorige"
                    >
                        ←
                    </button>
                    <button
                        className={`ts-btn ts-btn--primary ${page === TOTAL_PAGES - 1 ? 'ts-btn--disabled' : ''}`}
                        onClick={goNext}
                        disabled={page === TOTAL_PAGES - 1}
                        aria-label="Volgende"
                    >
                        →
                    </button>
                </div>

            </div>

        </section>
    );
}

export default Testimony;