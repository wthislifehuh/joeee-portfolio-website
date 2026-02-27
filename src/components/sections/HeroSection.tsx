"use client";

import { useEffect, useState } from "react";
import { Download, MessageCircle, ChevronDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TextPressure from "../ui/TextPressure";

const roles = ["Software Engineer", "AI Enthusiast 🤖", "Story Teller", "Matcha Lover 💚", "Cat Lover😻"];

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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-10"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      {/* <div className="relative z-10 text-center max-w-4xl mx-auto"></div> */}
      {/* Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-8">

        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
          {/* Greeting */}
          <p className="text-white/80 text-lg md:text-xl mb-4 tracking-wider font-light italic">
            Hello World! I&apos;m
          </p>

          {/* Name */}
          <div style={{ position: 'relative', height: '150px', width: '100%', maxWidth: '100%' }} className="mb-2">
            <TextPressure
              text="HO JOE EE"
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
              href="#"
              className="btn-glow flex items-center justify-center gap-2 px-6 py-3 bg-[#e879f9] text-[#4a044e] rounded-md hover:bg-[#d946ef] transition-all font-semibold text-sm md:text-base border border-transparent shadow-[0_0_15px_rgba(232,121,249,0.3)]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-glow flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-all font-medium text-sm md:text-base"
            >
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

        {/* Right Column - Hero Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto float">
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl scale-150" />

            {/* Planet rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-16 md:h-24 border-y-4 border-pink-300/60 rounded-full transform -rotate-12 shadow-[0_0_30px_rgba(236,72,153,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-20 md:h-32 border-y border-purple-300/40 rounded-full transform -rotate-12 shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-24 md:h-40 border-y border-cyan-300/20 rounded-full transform -rotate-12" />

            {/* Heart-shaped planet core */}
            <div className="absolute inset-8 md:inset-12">
              <div className="w-full h-full relative">
                {/* Heart shape using CSS */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="50%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M50 88 C20 60, 5 35, 25 20 C35 12, 50 18, 50 30 C50 18, 65 12, 75 20 C95 35, 80 60, 50 88Z"
                    fill="url(#heartGradient)"
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ animationDuration: "4s" }}
                  />
                  {/* Planet stripes (decorative) */}
                  <path d="M 15 45 Q 50 60 85 45" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                  <path d="M 20 60 Q 50 75 80 60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                  <path d="M 30 75 Q 50 85 70 75" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                  {/* Inner shine */}
                  <ellipse cx="32" cy="30" rx="6" ry="12" fill="rgba(255,255,255,0.4)" transform="rotate(-30 32 30)" />
                </svg>

                {/* Avatar placeholder on the planet */}
                <div className="absolute top-1/2 left-1/2 flex items-center justify-center -translate-x-[40%] -translate-y-[60%] text-6xl md:text-[100px] z-10 transform hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  �‍💻
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-4 left-10 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute top-16 right-4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
            <div className="absolute bottom-16 left-0 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
            <div className="absolute bottom-8 right-16 w-3 h-3 bg-pink-300 rounded-full animate-ping" style={{ animationDuration: "3.5s", animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>

      {/* Social Links on Left absolute positioned */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-20">
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
        className="absolute bottom-24 right-8 flex flex-col items-center gap-2 text-white/60 hover:text-primary transition-colors scroll-indicator"
      >
        <span className="text-xs tracking-widest [writing-mode:vertical-rl]">Scroll Down</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
