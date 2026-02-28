"use client";

import { GraduationCap, Code2 } from "lucide-react";
import ProfileCard from "../ui/ProfileCard";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Column: Profile Card */}
        <div className="w-full lg:w-5/12 flex-shrink-0 z-10">
          <div className="w-full max-w-sm mx-auto mt-4 lg:mt-8">
            <ProfileCard
              name="Joe Ee"
              title="Software & AI Engineer"
              handle="joeee"
              status="Online"
              contactText="Catch Me"
              avatarUrl="/joeee_without_bg.png"
              showUserInfo
              enableTilt={true}
              enableMobileTilt
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              behindGlowColor="rgba(192, 132, 252, 0.3)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, rgba(88,28,135,0.4) 0%, rgba(216,180,254,0.15) 100%)"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-7/12 space-y-8">
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Get To Know</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          </div>

          {/* About Text */}
          <div className="text-center lg:text-left space-y-4 text-white/80">
            <p>
              Hello! I&apos;m Joeee, an engineer who is currently focusing on designing and building robust <span className="text-primary">AI-powered workflow, architecture </span> and <span className="text-primary">backend integrations</span> that connect data from ingestion to insight!
            </p>
            <p>
              I love translating dreams into reality.
            </p>
            <p>
              But I also believe growth doesn&apos;t happen only behind a screen (or in a straight line).
            </p>
            <p>
              After graduating with <span className="text-primary">3 Best Graduate Awards</span>, I bought a one-way ticket to <span className="text-primary">New Zealand</span> and spent 6 months working (tech + factory). It reshaped how I see risk, resilience, and progress.
            </p>
            <p>
              Now I build with both precision and perspective!
            </p>
            <p>
              I&apos;m also a big fan of cats, matcha, and travelling. Catch me if you can! 😼
            </p>
          </div>

          {/* Education & Skills Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
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
                <h3 className="text-xl font-semibold text-white">Languages</h3>
              </div>
              <div className="space-y-2 text-white/80">
                <p className="skill-badge">English (Bilingual)</p>
                <p className="skill-badge">Chinese (Native)</p>
                <p className="skill-badge">Malay (Conversational)</p>
                <p className="skill-badge">Cantonese (Beginner)</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="text-center lg:text-left pt-2">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-all btn-glow border border-transparent shadow-[0_0_15px_rgba(232,121,249,0.3)]"
            >
              Catch Me!
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
