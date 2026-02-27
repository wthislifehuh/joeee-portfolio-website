"use client";

import React from 'react';
import { LeadershipEvent } from './types';

interface Props {
    event: LeadershipEvent;
    isLeft: boolean;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
}

export function DesktopTimelineItem({
    event,
    isLeft,
    isActive,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur
}: Props) {
    return (
        <div
            className="relative flex w-full items-center group cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Left Column */}
            <div className="w-1/2 pr-12 flex justify-end relative h-full">
                {isLeft ? (
                    <button
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className="text-right focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-3 -mr-3 w-full flex flex-col items-end"
                    >
                        {/* Summary */}
                        <div className={`transition-all duration-300 w-full ${isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <h3 className="text-xl font-medium text-neutral-200">{event.role}</h3>
                            <p className="text-purple-400/80 mt-1">{event.organization}</p>
                        </div>

                        {/* Expanded Overlay */}
                        <div
                            className={`absolute top-1/2 -translate-y-1/2 right-12 w-[340px] max-w-full z-50 transition-all duration-400 origin-right ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                                }`}
                        >
                            <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-2xl pointer-events-auto">
                                <div className="text-[10px] uppercase tracking-widest text-purple-400 mb-2.5 text-left">{event.period}</div>
                                <h4 className="text-[17px] font-medium text-white mb-2 text-left leading-tight">{event.role}</h4>
                                <p className="text-sm text-neutral-400 mb-5 text-left">{event.organization}</p>
                                <ul className="space-y-3 text-left">
                                    {event.highlights.map((h, i) => (
                                        <li key={i} className="text-[13px] text-neutral-300 flex items-start gap-3">
                                            <span className="text-purple-500 mt-1 shrink-0">•</span>
                                            <span className="leading-snug">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </button>
                ) : null}
            </div>

            {/* Center Marker */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center z-10 pointer-events-none">
                <div className={`w-[9px] h-[9px] rounded-full transition-all duration-400 ${isActive ? 'bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.8)] scale-[1.3]' : 'bg-[#222] border border-neutral-700'}`} />
            </div>

            {/* Right Column */}
            <div className="w-1/2 pl-12 flex justify-start relative h-full">
                {!isLeft ? (
                    <button
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className="text-left focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-3 -ml-3 w-full flex flex-col items-start"
                    >
                        {/* Summary */}
                        <div className={`transition-all duration-300 w-full ${isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <h3 className="text-xl font-medium text-neutral-200">{event.role}</h3>
                            <p className="text-purple-400/80 mt-1">{event.organization}</p>
                        </div>

                        {/* Expanded Overlay */}
                        <div
                            className={`absolute top-1/2 -translate-y-1/2 left-12 w-[340px] max-w-full z-50 transition-all duration-400 origin-left ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                                }`}
                        >
                            <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-2xl pointer-events-auto">
                                <div className="text-[10px] uppercase tracking-widest text-purple-400 mb-2.5 text-left">{event.period}</div>
                                <h4 className="text-[17px] font-medium text-white mb-2 text-left leading-tight">{event.role}</h4>
                                <p className="text-sm text-neutral-400 mb-5 text-left">{event.organization}</p>
                                <ul className="space-y-3 text-left">
                                    {event.highlights.map((h, i) => (
                                        <li key={i} className="text-[13px] text-neutral-300 flex items-start gap-3">
                                            <span className="text-purple-500 mt-1 shrink-0">•</span>
                                            <span className="leading-snug">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </button>
                ) : null}
            </div>
        </div>
    );
}
