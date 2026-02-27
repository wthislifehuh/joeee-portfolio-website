"use client";

const achievements = [
  {
    organization: "IEEE AiDAS 2024",
    role: "Published Author",
    period: "2024",
    icon: "📄",
    color: "from-blue-500 to-indigo-600",
    highlights: [
      "J. E. Ho, B. Y. Ooi and M. Westner, 'Application Integration Framework for Large Language Models'",
      "Presented at the 2024 5th International Conference on Artificial Intelligence and Data Sciences (AiDAS)",
      "Bangkok, Thailand, 2024, pp. 1-6"
    ],
  },
  {
    organization: "Alibaba Cloud",
    role: "Certified Associate",
    period: "Issued Sep 2024",
    icon: "🏅",
    color: "from-orange-500 to-red-500",
    highlights: [
      "Credential ID: IACA01240900151798L",
      "Demonstrated core knowledge in cloud computing and Alibaba Cloud services",
    ],
  },
  {
    organization: "AWS Academy",
    role: "Graduate - Cloud Foundations",
    period: "Issued Aug 2024",
    icon: "🎓",
    color: "from-yellow-500 to-orange-600",
    highlights: [
      "Completed AWS Academy Cloud Foundations comprehensive curriculum",
      "Validated foundational knowledge of AWS Cloud concepts and basic security",
    ],
  },
];

export function LeadershipSection() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Publications & Certifications</h2>
        </div>

        {/* Leadership Cards */}
        <div className="space-y-6">
          {achievements.map((role) => (
            <div
              key={role.organization}
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
