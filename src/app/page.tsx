"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { PublicationSection } from "@/components/sections/PublicationSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { StarBackground } from "@/components/ui/StarBackground";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="relative min-h-screen overflow-x-clip">
            <StarBackground />
            <FloatingDock />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <PortfolioSection />
            <LeadershipSection />
            <PublicationSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
