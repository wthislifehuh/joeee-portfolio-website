"use client";

import { useEffect, useRef } from "react";

export function StarBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const starCount = 100;

        // Clear existing stars
        container.innerHTML = "";

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.className = "star";

            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Random size (1-3px)
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random animation delay
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.animationDuration = `${Math.random() * 2 + 2}s`;

            container.appendChild(star);
        }
    }, []);

    return <div ref={containerRef} className="stars" />;
}
