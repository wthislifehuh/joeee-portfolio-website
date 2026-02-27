"use client";

import { GraduationCap, Code2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Get To Know</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
        </div>

        {/* About Content */}
        <div className="mb-12">
          {/* About Image */}
          <div className="float w-64 h-64 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl rotate-6 opacity-50" />
            <div className="relative w-full h-full bg-card rounded-2xl border border-primary/30 overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-6xl mb-4 block">👨‍💻</span>
                <p className="text-white/60 text-sm">Your Photo Here</p>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="text-center space-y-4 text-white/80">
            <p>
              Hello! I&apos;m a top-ranked <span className="text-primary">Computer Science Graduate</span> with hands-on experience in{" "}
              <span className="text-primary">AI Systems</span>,{" "}
              <span className="text-primary">LLM Integration</span>, and{" "}
              <span className="text-primary">DevOps Engineering</span>.
            </p>
            <p>
              I have a strong foundation in scalable backend systems, cloud architecture, and applied machine learning.
            </p>
            <p>
              Currently focusing on building robust AI architectures and reliable data processing workflows!
            </p>
          </div>
        </div>

        {/* Education & Skills Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-2 text-white/80">
              <p className="font-medium text-white">Bachelor of Computer Science (Honours)</p>
              <p className="text-sm">Universiti Tunku Abdul Rahman</p>
              <p className="text-sm text-white/60">Graduate: Jun 2025</p>
              <p className="text-sm text-primary">CGPA: 3.98/4.00 (Ranked 1st/1,637)</p>
            </div>
          </div>

          {/* Skills Card */}
          <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">Skills</h3>
            </div>
            <div className="space-y-2 text-white/80">
              <p className="skill-badge">AI / ML & LLMs</p>
              <p className="skill-badge">Cloud Architecture</p>
              <p className="skill-badge">DevOps & CI/CD</p>
              <p className="skill-badge">Full-Stack Development</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-all btn-glow"
          >
            Let&apos;s Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
