"use client";

import { AwardsSection } from './awards/AwardsSection';

export function PublicationSection() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2 drop-shadow-md">Past Recognitions</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow-lg">Awards & Publications</h2>
        </div>

        <AwardsSection />
      </div>
    </section>
  );
}
