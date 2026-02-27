"use client";

import { LeadershipTimelineSection } from './leadership/LeadershipTimelineSection';

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2 drop-shadow-md">What I Have Done in Uni</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow-lg">Leadership Experience</h2>
        </div>

        <LeadershipTimelineSection />
      </div>
    </section>
  );
}
