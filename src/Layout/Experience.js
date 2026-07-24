import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

const stats = [
    {
        id: "years",
        value: 20,
        suffix: "+",
        label: "Années d’expérience cumulées",
    },
    {
        id: "experts",
        value: 2,
        suffix: "",
        label: "Experts QHSE certifiés",
    },
    {
        id: "solutions",
        value: 100,
        suffix: "%",
        label: "Solutions adaptées à vos besoins",
    },
    {
        id: "projects",
        value: 500,
        suffix: "+",
        label: "Projets et missions accompagnés",
    },
];

// Durée de l'animation de comptage (ms)
const COUNT_DURATION = 2000;

// Easing "ease-out" pour un comptage qui ralentit en fin de course
const easeOutQuad = (t) => t * (2 - t);

function Experience() {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const rafRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(currentSection);

        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return undefined;

        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / COUNT_DURATION, 1);
            const eased = easeOutQuad(progress);

            setCounts(stats.map((stat) => Math.round(stat.value * eased)));

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section
            ref={sectionRef}
            className={`experience-section${hasAnimated ? " experience-section--visible" : ""}`}
        >
            <div className="experience-container">
                {stats.map((stat, index) => (
                    <div
                        key={stat.id}
                        className="experience-card"
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <div className="experience-number">
                            {counts[index]}
                            {stat.suffix}
                        </div>
                        <p className="experience-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;