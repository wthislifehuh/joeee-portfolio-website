"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-32">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24"
          fill="url(#waveGradient)"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".75" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Name */}
        <h3 className="text-3xl font-bold text-white mb-8">HO JOE EE</h3>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/joe-ee-ho/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-primary transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/wthislifehuh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-primary transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/joe___ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-primary transition-all"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-sm">
          Copyright &copy; {new Date().getFullYear()} HO JOE EE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
