"use client";

import React, { useState } from 'react';
import { Award, AwardCategory } from './types';
import { AwardTile } from './AwardTile';
import { AwardPreviewCard } from './AwardPreviewCard';

const AWARDS_DATA: Award[] = [
    {
        id: "award-1",
        title: "Kelvin Pah Award",
        issuer: "UTAR",
        year: "2025",
        category: "Academic Excellence",
        impact: "Awarded to one outstanding student from FICT based on academic performance, extracurricular activities, and exemplary conduct."
    },
    {
        id: "award-2",
        title: "Best Graduate Award",
        issuer: "MDT Innovations",
        year: "2025",
        category: "Academic Excellence",
        impact: "Awarded to the graduate with the highest CGPA for August Convocation 2025 at UTAR."
    },
    {
        id: "award-3",
        title: "Best Graduate Award",
        issuer: "UTAR",
        year: "2025",
        category: "Academic Excellence",
        impact: "Awarded to the graduate with the highest CGPA in each Faculty."
    },
    {
        id: "award-4",
        title: "UTAR Book Prize",
        issuer: "UTAR Education Foundation",
        year: "2025",
        category: "Academic Excellence",
        impact: "Awards are given to students graduating with an Honours degree with Distinction."
    },
    {
        id: "award-9",
        title: "Published Author (IEEE AiDAS)",
        issuer: "IEEE AiDAS",
        year: "2024",
        category: "Academic Excellence",
        impact: "J. E. Ho, B. Y. Ooi and M. Westner, 'Application Integration Framework for Large Language Models', Presented at the 2024 5th International Conference on Artificial Intelligence and Data Sciences (AiDAS) at Bangkok, Thailand, 2024, pp. 1-6"
    },
    {
        id: "award-11",
        title: "100% Scholarship for Top Achiever",
        issuer: "UTAR (Bachelor's)",
        year: "2022",
        category: "Academic Excellence",
        impact: "Received 100% tuition fee waiver every semester for maintaining CGPA of 3.9000 & above."
    },
    {
        id: "award-12",
        title: "100% Scholarship for Top Achiever",
        issuer: "UTAR (Foundation's)",
        year: "2021",
        category: "Academic Excellence",
        impact: "Received a full tuition fee waiver for every semester for scoring SPM 8As & above."
    },
    {
        id: "award-13",
        title: "President's List Award",
        issuer: "UTAR",
        year: "2021–2025",
        category: "Academic Excellence",
        impact: "Received President's List Award for 11 consecutive semesters by achieving a GPA of 3.8500+."
    },
    {
        id: "award-5",
        title: "FICT FYP Competition — Champion",
        issuer: "UTAR",
        year: "2025",
        category: "Technical Competitions",
        impact: "Awarded Champion among ~200 Final Year Projects for 'Large Language Model Application Integration'."
    },
    {
        id: "award-6",
        title: "Hackattack — First Runner-up",
        issuer: "UTAR x USM",
        year: "2024",
        category: "Technical Competitions",
        impact: "Group GPT-1011 won First Runner-up for Hackattack organized by UTAR x USM."
    },
    {
        id: "award-7",
        title: "Tech4Good Challenge Top 8",
        issuer: "Vitrox Technologies",
        year: "2024",
        category: "Technical Competitions",
        impact: "Group PartTimer received the Best Poster Design Award with the project 'Resonate'.",
        link: "https://news.utar.edu.my/awards/2024/Aug/01/01/01.html"
    },
    {
        id: "award-10",
        title: "Tech 4 Good Challenge — 2nd Runner-Up",
        issuer: "Vitrox Technologies",
        year: "2023",
        category: "Technical Competitions",
        impact: "Secured Second Runner-up in Vitrox Tech 4 Good Challenge 2023 as part of team 'HeliCoda'.",
        link: "https://www.vitrox.edu.my/helicoda"
    },
    {
        id: "award-8",
        title: "Platinum Grade — Soft Skills",
        issuer: "UTAR",
        year: "2024",
        category: "Leadership & Contribution",
        impact: "Awarded 'PLATINUM' grade for collecting over 150 points across 10 components including leadership and integrity."
    },
];

const CATEGORIES: AwardCategory[] = [
    "Academic Excellence",
    "Technical Competitions",
    "Leadership & Contribution"
];

export function AwardsSection() {
    const [activeAward, setActiveAward] = useState<Award | null>(null);

    return (
        <div
            className="w-full relative"
            onMouseLeave={() => {
                // Only clear hover implicitly on desktop
                if (window.matchMedia("(hover: hover)").matches) {
                    setActiveAward(null);
                }
            }}
        >
            {CATEGORIES.map(category => {
                const categoryData = AWARDS_DATA.filter(a => a.category === category);
                if (categoryData.length === 0) return null;

                return (
                    <div key={category} className="mb-16 last:mb-0">
                        <h3 className="uppercase text-[11px] md:text-xs tracking-widest text-neutral-500 mb-6 font-medium">
                            {category}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                            {categoryData.map(award => (
                                <AwardTile
                                    key={award.id}
                                    award={award}
                                    isActive={activeAward?.id === award.id}
                                    onHover={(a) => {
                                        if (window.matchMedia("(hover: hover)").matches) {
                                            setActiveAward(a);
                                        }
                                    }}
                                    onClick={(a) => setActiveAward(a)}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}

            <AwardPreviewCard
                award={activeAward}
                onClose={() => setActiveAward(null)}
            />
        </div>
    );
}
