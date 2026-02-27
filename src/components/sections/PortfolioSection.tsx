"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Large Language Model Application Integration for Extracting Unstructured Data",
        description: "Novel framework integrating LLMs into data processing pipelines for structured extraction, achieving 96.93% accuracy.",
        image: "/extscan.png",
        github: "https://github.com/wthislifehuh",
        demo: "https://youtu.be/dqciRTrXsdI",
        tags: ["PyQT", "Python", "LLMs"],
    },
    {
        title: "Parcel/Package Delivery Detection System",
        description: "Parcel detection is a specific application of object detection, where the goal is to identify and locate parcels (packages) within images and match it with sets of condition for proof of delivery (POD)",
        image: "/parcel_detection.png",
        github: "https://github.com/wthislifehuh",
        demo: "https://youtu.be/GuoBpATcDPo",
        tags: ["PyQT", "Python", "LLMs"],
    },
    {
        title: "Portable Intruder Detector System",
        description: "Achieved 98.7% sub-2.3s detection using ML and image processing to detect human and animal intruders.",
        image: "/portable_detector.jpg",
        github: "https://github.com/wthislifehuh/Gnome-Portable-Intruder-Detector",
        demo: "#",
        tags: ["OpenCV", "DeepFace", "MongoDB", "SQLite"],
    },
    {
        title: "AR Human Connection Application - Resonate",
        description: "AR-based app enhancing communication via real-time emotional context transcription and AI translation.",
        image: "/resonate.png",
        github: "https://github.com/wthislifehuh/Resonate",
        demo: "https://playful-router-dca.notion.site/Resonate-71af9fed8e6b49cebecfa28ba94853c7",
        tags: ["ViroReact", "React Native", "TypeScript", "LLMs"],
    },
    {
        title: "AR Travel Application - Memorable",
        description: "Travel app exploring landmarks through NFC-triggered content, ARCore interactions, and AI-powered chats.",
        image: "/memorable.png",
        github: "https://github.com/wthislifehuh/Memorable",
        demo: "#",
        tags: ["Flutter", "TypeScript", "Dart", "ARCore"],
    },

];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="relative py-24 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-white/60 text-sm uppercase tracking-widest mb-2">My Recent Projects</p>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text">Portfolio</h2>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-white/60 text-sm mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-primary/20 hover:text-primary transition-all text-sm"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-all text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
