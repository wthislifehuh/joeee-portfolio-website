"use client";

import React from 'react';
import { LeadershipEvent } from './types';

interface Props {
    event: LeadershipEvent;
    isActive: boolean;
    onClick: () => void;
}

export function MobileTimelineItem({ event, isActive, onClick }: Props) {
    return (
        <div className="relative pl-10 group">
            {/* Marker - positioned absolute relative to this item, left matches parent padding logic */}
            <div
                className={`absolute left-[10.5px] top-[14px] w-[11px] h-[11px] rounded-full transition-all duration-400 z-10 ${isActive ? 'bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.8)] scale-110' : 'bg-[#222] border border-neutral-700'
                    }`}
            />

            <button
                onClick={onClick}
                aria-expanded={isActive}
                aria-controls={`details-${event.id}`}
                className="w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-2 -ml-2 transition-colors hover:bg-white/5"
            >
                <h3 className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-200'}`}>
                    {event.role}
                </h3>
                <p className="text-purple-400/80 text-[13px] mt-0.5">{event.organization}</p>
            </button>

            {/* Accordion content */}
            <div
                id={`details-${event.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[800px] opacity-100 mt-3 mb-2' : 'max-h-0 opacity-0 mt-0 mb-0'
                    }`}
            >
                <div className="bg-[#111] border border-neutral-800/80 rounded-xl p-5 shadow-inner">
                    <div className="text-[10px] uppercase tracking-widest text-purple-400 mb-2.5">{event.period}</div>
                    <ul className="space-y-3">
                        {event.highlights.map((h, i) => (
                            <li key={i} className="text-[13px] text-neutral-300 flex items-start gap-2.5 leading-relaxed">
                                <span className="text-purple-500 mt-1 shrink-0">•</span>
                                <span>{h}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
