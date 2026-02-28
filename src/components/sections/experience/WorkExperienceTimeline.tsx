"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export interface WorkExperienceItem {
    company: string;
    role: string;
    period: string;
    icon: string;
    color: string;
    highlights: string[];
}

interface Props {
    experiences: WorkExperienceItem[];
}

export function WorkExperienceTimeline({ experiences }: Props) {
    const [activeDesktopId, setActiveDesktopId] = useState<string | null>(null);
    const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

    const toggleMobile = (id: string) => {
        setActiveMobileId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full relative max-w-5xl mx-auto mt-12 mb-[10vh]">
            {/* Desktop Layout (>= md) */}
            <div
                className="hidden md:block relative w-full py-16 px-4"
                onMouseLeave={() => setActiveDesktopId(null)}
            >
                {/* Center Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 pointer-events-none" />

                <div className="flex flex-col gap-28">
                    {experiences.map((event, idx) => {
                        const isLeft = idx % 2 === 0;
                        const isActive = activeDesktopId === event.company;

                        return (
                            <div
                                key={event.company}
                                className="relative flex w-full items-center group cursor-pointer"
                                onMouseEnter={() => setActiveDesktopId(event.company)}
                                onFocus={() => setActiveDesktopId(event.company)}
                                onBlur={() => setActiveDesktopId(null)}
                            >
                                {/* Left Column */}
                                <div className="w-1/2 pr-12 flex justify-end relative h-full">
                                    {isLeft ? (
                                        <div className="text-right w-full flex flex-col items-end">
                                            {/* Summary */}
                                            <div className={`transition-all duration-300 w-full ${isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                                                <h3 className="text-xl font-medium text-neutral-200">{event.role}</h3>
                                                <p className="text-primary/80 mt-1">{event.company}</p>
                                            </div>

                                            {/* Expanded Overlay */}
                                            <div
                                                className={`absolute top-1/2 -translate-y-1/2 right-12 w-[360px] max-w-full z-50 transition-all duration-400 origin-right ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                                                    }`}
                                            >
                                                <div className="bg-[#111] border border-primary/30 rounded-2xl p-6 shadow-2xl pointer-events-auto">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shrink-0 overflow-hidden`}>
                                                            {event.icon.startsWith('/') ? (
                                                                <Image src={event.icon} alt={event.company} width={48} height={48} className="object-cover w-full h-full" />
                                                            ) : (
                                                                <span className="text-2xl">{event.icon}</span>
                                                            )}
                                                        </div>
                                                        <div className="text-left flex-1">
                                                            <div className="text-[10px] uppercase tracking-widest text-primary mb-1">{event.period}</div>
                                                            <h4 className="text-[15px] font-medium text-white leading-tight">{event.company}</h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[16px] font-medium text-neutral-200 mb-3 text-left leading-tight">{event.role}</h4>
                                                    <ul className="space-y-3 text-left">
                                                        {event.highlights.map((h, i) => (
                                                            <li key={i} className="text-[13px] text-neutral-300 flex items-start gap-3">
                                                                <span className="text-primary mt-1 shrink-0">•</span>
                                                                <span className="leading-snug">{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>

                                {/* Center Marker */}
                                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center z-10 pointer-events-none">
                                    <div className={`w-[9px] h-[9px] rounded-full transition-all duration-400 ${isActive ? 'bg-primary shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-[1.3]' : 'bg-[#222] border border-neutral-700'}`} />
                                </div>

                                {/* Right Column */}
                                <div className="w-1/2 pl-12 flex justify-start relative h-full">
                                    {!isLeft ? (
                                        <div className="text-left w-full flex flex-col items-start">
                                            {/* Summary */}
                                            <div className={`transition-all duration-300 w-full ${isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                                                <h3 className="text-xl font-medium text-neutral-200">{event.role}</h3>
                                                <p className="text-primary/80 mt-1">{event.company}</p>
                                            </div>

                                            {/* Expanded Overlay */}
                                            <div
                                                className={`absolute top-1/2 -translate-y-1/2 left-12 w-[360px] max-w-full z-50 transition-all duration-400 origin-left ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                                                    }`}
                                            >
                                                <div className="bg-[#111] border border-primary/30 rounded-2xl p-6 shadow-2xl pointer-events-auto">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shrink-0 overflow-hidden`}>
                                                            {event.icon.startsWith('/') ? (
                                                                <Image src={event.icon} alt={event.company} width={48} height={48} className="object-cover w-full h-full" />
                                                            ) : (
                                                                <span className="text-2xl">{event.icon}</span>
                                                            )}
                                                        </div>
                                                        <div className="text-left flex-1">
                                                            <div className="text-[10px] uppercase tracking-widest text-primary mb-1">{event.period}</div>
                                                            <h4 className="text-[15px] font-medium text-white leading-tight">{event.company}</h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[16px] font-medium text-neutral-200 mb-3 text-left leading-tight">{event.role}</h4>
                                                    <ul className="space-y-3 text-left">
                                                        {event.highlights.map((h, i) => (
                                                            <li key={i} className="text-[13px] text-neutral-300 flex items-start gap-3">
                                                                <span className="text-primary mt-1 shrink-0">•</span>
                                                                <span className="leading-snug">{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Layout (< md) */}
            <div className="md:hidden relative w-full py-8">
                {/* Left Line */}
                <div className="absolute left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none" />

                <div className="flex flex-col gap-5">
                    {experiences.map((event) => {
                        const isActive = activeMobileId === event.company;
                        return (
                            <div key={event.company} className="relative pl-10 group">
                                {/* Marker */}
                                <div
                                    className={`absolute left-[10.5px] top-[14px] w-[11px] h-[11px] rounded-full transition-all duration-400 z-10 ${isActive ? 'bg-primary shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-110' : 'bg-[#222] border border-neutral-700'
                                        }`}
                                />

                                <button
                                    onClick={() => toggleMobile(event.company)}
                                    aria-expanded={isActive}
                                    className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-2 -ml-2 transition-colors hover:bg-white/5"
                                >
                                    <h3 className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-200'}`}>
                                        {event.role}
                                    </h3>
                                    <p className="text-primary/80 text-[13px] mt-0.5">{event.company}</p>
                                </button>

                                {/* Accordion content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[800px] opacity-100 mt-3 mb-2' : 'max-h-0 opacity-0 mt-0 mb-0'
                                        }`}
                                >
                                    <div className="bg-[#111] border border-primary/30 rounded-xl p-5 shadow-inner">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shrink-0 overflow-hidden`}>
                                                {event.icon.startsWith('/') ? (
                                                    <Image src={event.icon} alt={event.company} width={48} height={48} className="object-cover w-full h-full" />
                                                ) : (
                                                    <span className="text-2xl">{event.icon}</span>
                                                )}
                                            </div>
                                            <div className="text-left flex-1">
                                                <div className="text-[10px] uppercase tracking-widest text-primary mb-1">{event.period}</div>
                                                <h4 className="text-[14px] font-medium text-white leading-tight">{event.company}</h4>
                                            </div>
                                        </div>
                                        <ul className="space-y-3">
                                            {event.highlights.map((h, i) => (
                                                <li key={i} className="text-[13px] text-neutral-300 flex items-start gap-2.5 leading-relaxed">
                                                    <span className="text-primary mt-1 shrink-0">•</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
