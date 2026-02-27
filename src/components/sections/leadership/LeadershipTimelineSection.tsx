"use client";

import React, { useState } from 'react';
import { LEADERSHIP_EVENTS } from './data';
import { DesktopTimelineItem } from './DesktopTimelineItem';
import { MobileTimelineItem } from './MobileTimelineItem';

export function LeadershipTimelineSection() {
    const [activeDesktopId, setActiveDesktopId] = useState<string | null>(null);
    const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

    const toggleMobile = (id: string) => {
        setActiveMobileId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full relative max-w-5xl mx-auto">
            {/* Desktop Layout (>= md) */}
            <div
                className="hidden md:block relative w-full py-16 px-4"
                onMouseLeave={() => setActiveDesktopId(null)}
            >
                {/* Center Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent -translate-x-1/2 pointer-events-none" />

                <div className="flex flex-col gap-28">
                    {LEADERSHIP_EVENTS.map((event, idx) => (
                        <DesktopTimelineItem
                            key={event.id}
                            event={event}
                            isLeft={idx % 2 === 0}
                            isActive={activeDesktopId === event.id}
                            onMouseEnter={() => setActiveDesktopId(event.id)}
                            onMouseLeave={() => { }} // Handle on parent container to keep active when moving to card
                            onFocus={() => setActiveDesktopId(event.id)}
                            onBlur={() => setActiveDesktopId(null)}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Layout (< md) */}
            <div className="md:hidden relative w-full py-8">
                {/* Left Line */}
                <div className="absolute left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent pointer-events-none" />

                <div className="flex flex-col gap-5">
                    {LEADERSHIP_EVENTS.map((event) => (
                        <MobileTimelineItem
                            key={event.id}
                            event={event}
                            isActive={activeMobileId === event.id}
                            onClick={() => toggleMobile(event.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
