"use client";

const achievements = [
  {
    organization: "UTAR Kampar Computer Society",
    role: "Logistics Manager - Enlight 4.0",
    period: "Feb 2024 - Jun 2024",
    icon: "🚌",
    color: "from-blue-400 to-indigo-500",
    highlights: [
      "Coordinated an industrial visit to Hilti, Alibaba Cloud, PayNet, AIA Digital+, PPG, and Edward Lifescience for 40 students.",
      "Managed logistics, scheduling, transportation, and accommodation.",
    ],
  },
  {
    organization: "UTAR Kampar Computer Society",
    role: "Chairperson - UTAR-Deloitte Resume Workshop",
    period: "Apr 2024",
    icon: "📝",
    color: "from-green-400 to-emerald-600",
    highlights: [
      "Organized a resume workshop in collaboration with Deloitte.",
      "Successfully attracted and engaged over 100 student participants.",
    ],
  },
  {
    organization: "Universiti Tunku Abdul Rahman (UTAR)",
    role: "Vice Secretary - UTAR-FICT CTF Competition",
    period: "Jul 2023",
    icon: "🚩",
    color: "from-red-400 to-rose-600",
    highlights: [
      "Assisted in coordinating the UTAR-FICT Capture The Flag (CTF) competition.",
    ],
  },
  {
    organization: "UTAR Kampar Computer Society",
    role: "Program Manager - AR Workshop",
    period: "Jun 2023 - Jul 2023",
    icon: "�️",
    color: "from-purple-400 to-fuchsia-600",
    highlights: [
      "Coordinated program workflows, speaker engagements, and technical setups.",
      "Registered and managed over 50 participants for an immersive AR experience.",
    ],
  },
  {
    organization: "UTAR Kampar Computer Society",
    role: "Chairperson - UTAR-Deloitte Coding Workshop",
    period: "Apr 2023",
    icon: "💻",
    color: "from-teal-400 to-cyan-600",
    highlights: [
      "Collaborated with Deloitte Consulting to conduct a coding workshop.",
      "Engaged more than 100 students in UTAR.",
    ],
  },
  {
    organization: "UTAR Kampar Computer Society",
    role: "Secretary - Flutter Workshop",
    period: "Mar 2023 - Apr 2023",
    icon: "📱",
    color: "from-sky-400 to-blue-500",
    highlights: [
      "Facilitated administrative and organizational tasks for the Flutter Workshop.",
    ],
  },
  {
    organization: "UTAR Kampar Computer Society",
    role: "Publicity Manager - Enlight Your World 3.0",
    period: "Feb 2023 - Jun 2023",
    icon: "📢",
    color: "from-orange-400 to-amber-500",
    highlights: [
      "Coordinated an industrial visitation event to PayNet, Fusionex, Alibaba Cloud, and AIA Digital+ for 80 students.",
      "Led content creation by designing 20+ posts, producing 3+ promotional videos, and creating merchandise.",
    ],
  },
];

export function LeadershipSection() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2 drop-shadow-md">What I Have Done in Uni</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Leadership</h2>
        </div>

        {/* Leadership Cards */}
        <div className="space-y-6">
          {achievements.map((role) => (
            <div
              key={role.role}
              className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
            >
              {/* Organization Header */}
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center text-3xl`}>
                  {role.icon}
                </div>
                <h4 className="text-lg font-medium text-primary">{role.organization}</h4>
                <p className="text-white font-semibold">{role.role}</p>
                <p className="text-white/60 text-sm">{role.period}</p>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {role.highlights.map((highlight, index) => (
                  <li key={`${role.organization}-${index}`} className="flex items-start gap-2 text-white/80 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
