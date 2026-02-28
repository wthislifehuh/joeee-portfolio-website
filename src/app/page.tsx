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
import LogoLoop from "@/components/ui/LogoLoop";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiAmazonwebservices,
    SiDocker,
    SiPostgresql,
    SiMongodb
} from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiTensorflow />, title: "TensorFlow", href: "https://tensorflow.org" },
    { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
    { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" }
];

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

            {/* Tech Stack Logo Loop */}
            <div className="w-full flex justify-center py-8 relative z-10">
                <div style={{ height: '60px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="left"
                        logoHeight={40}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover={true}
                        fadeOut={true}
                        fadeOutColor="hsl(var(--background))"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>

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
