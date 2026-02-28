"use client";

import { Home, User, Briefcase, FolderOpen, Award, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Briefcase, href: "#experience", label: "Experience" },
  { icon: FolderOpen, href: "#portfolio", label: "Portfolio" },
  { icon: Award, href: "#achievements", label: "Achievements" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

export function FloatingDock() {
  const [active, setActive] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentActiveIndex = 0;

      navItems.forEach((item, index) => {
        const id = item.href.substring(1);
        const section = document.getElementById(id);
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            currentActiveIndex = index;
          }
        }
      });

      setActive(currentActiveIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call once initially to set the correct active item
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index: number, href: string) => {
    setActive(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
      <div className="dock-nav flex items-center gap-2 px-4 py-3 rounded-full">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === index;
          const isHovered = hoveredIndex === index;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => handleClick(index, item.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-3 rounded-full transition-all duration-300 ${isActive
                ? "bg-primary text-white"
                : "text-white/60 hover:text-white hover:bg-white/10"
                } ${isHovered || isActive ? "scale-110" : "scale-100"}`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              {isHovered && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-primary/80 rounded whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
