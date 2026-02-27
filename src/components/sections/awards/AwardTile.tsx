"use client";

import React from 'react';
import { Award } from './types';

interface AwardTileProps {
    award: Award;
    isActive: boolean;
    onHover: (award: Award) => void;
    onClick: (award: Award) => void;
}

export function AwardTile({ award, isActive, onHover, onClick }: AwardTileProps) {
    return (
        <button
            onMouseEnter={() => onHover(award)}
            onFocus={() => onHover(award)}
            onClick={() => onClick(award)}
            className={`
        w-full text-left bg-transparent rounded-xl py-4 px-5
        border transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-neutral-700
        ${isActive ? 'border-neutral-600 bg-neutral-900/60 -translate-y-1' : 'border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/60 hover:-translate-y-1'}
      `}
            aria-label={`View details for ${award.title}`}
        >
            <h3 className="text-neutral-300 font-medium mb-1.5 group-hover:text-white transition-colors">
                {award.title}
            </h3>
            <p className="text-neutral-500 text-sm">
                {award.issuer} &middot; {award.year}
            </p>
        </button>
    );
}
