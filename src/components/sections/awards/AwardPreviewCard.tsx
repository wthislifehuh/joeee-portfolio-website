"use client";

import React, { useEffect, useRef } from 'react';
import { Award } from './types';

interface AwardPreviewCardProps {
    award: Award | null;
    onClose: () => void;
}

export function AwardPreviewCard({ award, onClose }: AwardPreviewCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        // Slight delay to prevent immediate close on tile click
        const timer = setTimeout(() => {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }, 100);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [onClose]);

    if (!award) return null;

    return (
        <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 pointer-events-none flex-col items-center">
            <div
                ref={cardRef}
                className="pointer-events-auto w-full max-w-lg bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out relative"
            >
                <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-medium">
                        {award.category}
                    </span>
                    <button
                        onClick={onClose}
                        className="md:hidden text-neutral-500 hover:text-white p-2 -mr-3 -mt-3 rounded-lg"
                        aria-label="Close preview"
                    >
                        &#x2715;
                    </button>
                </div>

                <h3 className="text-lg md:text-xl font-medium text-neutral-100 mb-1 leading-snug">
                    {award.title}
                </h3>

                <p className="text-sm text-neutral-400 mb-5">
                    {award.issuer} &middot; {award.year}
                </p>

                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {award.impact}
                </p>

                {award.link && (
                    <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors inline-block"
                    >
                        Proof Reference &#8594;
                    </a>
                )}
            </div>
        </div>
    );
}
