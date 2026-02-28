"use client";

import { useEffect, useState } from "react";
import { Download, MessageCircle, ChevronDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TextPressure from "../ui/TextPressure";
import Lanyard from "../ui/Lanyard";
import Aurora from "../ui/Aurora";

const roles = ["Software Engineer", "AI Enthusiast", "Story Teller ", "Digital Nomad", "Cat Lover😻", "UTAR Best Graduate 2025", "NZ working holiday alum"];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-10 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      {/* <div className="relative z-10 text-center max-w-4xl mx-auto"></div> */}
      {/* Content Layout */}
      <div className="relative z-[20] w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-8 pointer-events-none mt-10 md:mt-0">

        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full pointer-events-auto md:pl-4">
          {/* Greeting */}
          <p className="text-white/80 text-lg md:text-xl mb-4 tracking-wider font-light italic">
            Hello World! I&apos;m
          </p>

          {/* Name */}
          <div style={{ position: 'relative', height: '150px', width: '100%', maxWidth: '100%' }} className="mb-2">
            <TextPressure
              text="JOE EE HO"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={100}
            />
          </div>

          {/* Typing effect subtitle */}
          <div className="h-8 mb-8">
            <span className="text-primary text-lg md:text-xl font-medium tracking-wide">
              {displayText}
              <span className="animate-pulse ml-0.5">|</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/JoeEe_Ho_Resume_2026.pdf"
              download
              className="btn-glow flex items-center justify-center gap-2 px-6 py-3 bg-[#e879f9] text-[#4a044e] rounded-md hover:bg-[#d946ef] transition-all font-semibold text-sm md:text-base border border-transparent shadow-[0_0_15px_rgba(232,121,249,0.3)]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-glow flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-all font-medium text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Let&apos;s Connect!
            </a>
          </div>

          {/* Tablet/Mobile Social Links */}
          <div className="flex xl:hidden items-center justify-center md:justify-start gap-4 mt-8 mb-12">
            <div className="w-[30px] h-[2px] bg-white/20 rounded-full"></div>
            <a
              href="https://www.linkedin.com/in/joe-ee-ho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#e879f9] transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/wthislifehuh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#e879f9] transition-colors hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Column Spacer (Desktop) */}
        <div className="hidden md:block flex-1 pointer-events-none opacity-0" />
      </div>

      {/* Desktop Lanyard Overlay (Centered with max-w-6xl to match text container) */}
      <div className="hidden md:flex absolute inset-0 top[-40px] z-[10] w-full max-w-6xl mx-auto flex-row pointer-events-none px-4 md:px-8">
        <div className="flex-1 pointer-events-none" /> {/* Left Column Spacer */}
        {/* Right Column for Lanyard */}
        <div className="flex-1 relative flex items-center justify-center pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-[80px]" />
          <div className="absolute inset-x-0 top-0 bottom-[-40px] z-10 pointer-events-auto">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>
          {/* Sparkling Galaxy Particles */}
          <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-white rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]" style={{ animationDuration: "3s" }} />
          <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-ping pointer-events-none z-[11] opacity-60" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
          <div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 bg-[#e879f9] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_8px_2px_rgba(232,121,249,0.8)]" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
          <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_12px_3px_rgba(139,92,246,0.6)]" style={{ animationDuration: "3.5s", animationDelay: "0.2s" }} />
          <div className="absolute bottom-[20%] left-[25%] w-2.5 h-2.5 bg-white rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_15px_4px_rgba(255,255,255,0.9)]" style={{ animationDuration: "2.8s", animationDelay: "1.5s" }} />
          <div className="absolute bottom-[35%] right-[18%] w-1.5 h-1.5 bg-[#e879f9] rounded-full animate-ping pointer-events-none z-[11] opacity-80" style={{ animationDuration: "3s", animationDelay: "0.8s" }} />
          <div className="absolute bottom-[45%] left-[15%] w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_10px_2px_rgba(6,182,212,0.8)]" style={{ animationDuration: "4.2s", animationDelay: "0.4s" }} />
          <div className="absolute top-[50%] right-[10%] w-1 h-1 bg-white rounded-full animate-ping pointer-events-none z-[11] opacity-50" style={{ animationDuration: "2s", animationDelay: "1.2s" }} />
          <div className="absolute bottom-[10%] right-[35%] w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]" style={{ animationDuration: "3.8s", animationDelay: "0.7s" }} />
          <div className="absolute top-[10%] left-[40%] w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_8px_2px_rgba(6,182,212,0.6)]" style={{ animationDuration: "2.2s", animationDelay: "0.9s" }} />
        </div>
      </div>

      {/* Mobile Lanyard Overlay */}
      <div className="md:hidden absolute inset-0 z-[10] top-[0px] pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-[80px]" />
        <div className="absolute inset-0 z-10 pointer-events-auto">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>
        {/* Sparkling Galaxy Particles */}
        <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-white rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]" style={{ animationDuration: "3s" }} />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-ping pointer-events-none z-[11] opacity-60" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
        <div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 bg-[#e879f9] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_8px_2px_rgba(232,121,249,0.8)]" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
        <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_12px_3px_rgba(139,92,246,0.6)]" style={{ animationDuration: "3.5s", animationDelay: "0.2s" }} />
        <div className="absolute bottom-[20%] left-[25%] w-2.5 h-2.5 bg-white rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_15px_4px_rgba(255,255,255,0.9)]" style={{ animationDuration: "2.8s", animationDelay: "1.5s" }} />
        <div className="absolute bottom-[35%] right-[18%] w-1.5 h-1.5 bg-[#e879f9] rounded-full animate-ping pointer-events-none z-[11] opacity-80" style={{ animationDuration: "3s", animationDelay: "0.8s" }} />
        <div className="absolute bottom-[45%] left-[15%] w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_10px_2px_rgba(6,182,212,0.8)]" style={{ animationDuration: "4.2s", animationDelay: "0.4s" }} />
        <div className="absolute top-[50%] right-[10%] w-1 h-1 bg-white rounded-full animate-ping pointer-events-none z-[11] opacity-50" style={{ animationDuration: "2s", animationDelay: "1.2s" }} />
        <div className="absolute bottom-[10%] right-[35%] w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]" style={{ animationDuration: "3.8s", animationDelay: "0.7s" }} />
        <div className="absolute top-[10%] left-[40%] w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-pulse pointer-events-none z-[11] shadow-[0_0_8px_2px_rgba(6,182,212,0.6)]" style={{ animationDuration: "2.2s", animationDelay: "0.9s" }} />
      </div>

      {/* Aurora Background overlaying Lanyard */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden opacity-60 mix-blend-screen">
        <Aurora
          colorStops={["#e879f9", "#8b5cf6", "#06b6d4"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Social Links on Left absolute positioned */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-[30]">
        <div className="w-[2px] h-24 bg-white/20 mt-4 rounded-full"></div>
        <a
          href="https://www.linkedin.com/in/joe-ee-ho/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#e879f9] transition-colors hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/wthislifehuh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#e879f9] transition-colors hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <div className="w-[2px] h-24 bg-white/20 mt-4 rounded-full"></div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-24 right-8 flex flex-col items-center gap-2 text-white/60 hover:text-primary transition-colors scroll-indicator z-[30]"
      >
        <span className="text-xs tracking-widest [writing-mode:vertical-rl]">Scroll Down</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
