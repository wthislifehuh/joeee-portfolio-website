"use client";
const achievements = [
  {
    organization: "UTAR-Mr Kelvin Pah Wai Onn",
    role: "Kelvin Pah Award",
    period: "Issued Aug 2025",
    icon: "🏆",
    color: "from-amber-400 to-orange-500",
    highlights: [
      "Awarded to one outstanding student from FICT based on academic performance, extracurricular activities, and exemplary conduct.",
      "Recipient receives a cash prize, gold medal, and certificate, with their name displayed on a wall plaque at UTAR.",
    ],
  },
  {
    organization: "MDT Innovations Sdn Bhd",
    role: "MDT Innovations Best Graduate Award",
    period: "Issued Aug 2025",
    icon: "🎓",
    color: "from-blue-400 to-cyan-500",
    highlights: [
      "Awarded to the graduate with the highest CGPA for August Convocation 2025 at Universiti Tunku Abdul Rahman (UTAR)."
    ],
  },
  {
    organization: "Little Rain Trust",
    role: "UTAR Best Graduate Award",
    period: "Issued Aug 2025",
    icon: "🏅",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Awarded to the graduate with the highest CGPA in each Faculty."
    ],
  },
  {
    organization: "UTAR Education Foundation",
    role: "UTAR Book Prize 2025",
    period: "Issued Aug 2025",
    icon: "📚",
    color: "from-emerald-400 to-teal-500",
    highlights: [
      "Awards are given to students graduating with an Honours degree with Distinction."
    ],
  },
  {
    organization: "UTAR Education Foundation",
    role: "UTAR FICT FYP Competition 2025 - Champion",
    period: "Issued May 2025",
    icon: "🥇",
    color: "from-yellow-400 to-amber-600",
    highlights: [
      "Awarded Champion among ~200 Final Year Projects.",
      "Project title: 'Large Language Model Application Integration for Extracting Unstructured Data.'"
    ],
  },
  {
    organization: "UTAR x USM GDSM",
    role: "Hackattack - First Runner-up",
    period: "Issued Aug 2024",
    icon: "🥈",
    color: "from-slate-400 to-slate-600",
    highlights: [
      "Our group - GPT-1011 won First Runner-up for Hackattack organized by UTAR x USM!"
    ],
  },
  {
    organization: "Vitrox Technology",
    role: "Vitrox Tech4Good Challenge 2024 Top 8 Finalist - Best Poster Award",
    period: "Issued Jul 2024",
    icon: "🎨",
    color: "from-indigo-400 to-purple-600",
    highlights: [
      "Group PartTimer received the Best Poster Design Award with the project 'Resonate'.",
      "Read more: https://news.utar.edu.my/awards/2024/Aug/01/01/01.html"
    ],
  },
  {
    organization: "UTAR Education Foundation",
    role: "Platinum Grade - UTAR Soft Skills Development Certificate Programme",
    period: "Issued Jun 2024",
    icon: "💎",
    color: "from-sky-300 to-blue-500",
    highlights: [
      "Awarded 'PLATINUM' grade for collecting more than 150 points across 10 components.",
      "Recognizes achievements in communication, leadership, teamwork, strategic thinking, creativity, and integrity."
    ],
  },
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
    organization: "ViTrox Technologies Sdn. Bhd.",
    role: "Vitrox Tech 4 Good Challenge 2023 - 2nd Runner-Up",
    period: "Issued Jul 2023",
    icon: "🥉",
    color: "from-amber-600 to-orange-700",
    highlights: [
      "Secured Second Runner-up in Vitrox Tech 4 Good Challenge 2023 as part of team 'HeliCoda'.",
      "Read more: https://www.vitrox.edu.my/helicoda"
    ],
  },
  {
    organization: "UTAR Education Foundation",
    role: "100% Scholarship for Top Achiever (Bachelor's Programme)",
    period: "Issued May 2022",
    icon: "🎓",
    color: "from-green-400 to-emerald-600",
    highlights: [
      "Received 100% tuition fee waiver every semester for the Bachelor of Computer Science (Honours) degree.",
      "Criteria: UTAR Foundation Programme CGPA of 3.9000 & above."
    ],
  },
  {
    organization: "UTAR Education Foundation",
    role: "100% Scholarship for Top Achiever (Foundation's Programme)",
    period: "Issued May 2021",
    icon: "🎓",
    color: "from-teal-400 to-green-500",
    highlights: [
      "Received a full tuition fee waiver for every semester of the Foundation in Science Program.",
      "Criteria: SPM 8As & above (A+ and A only)."
    ],
  },
  {
    organization: "Universiti Tunku Abdul Rahman (UTAR)",
    role: "UTAR President List Award",
    period: "Issued May 2021",
    icon: "📜",
    color: "from-rose-400 to-red-500",
    highlights: [
      "Received UTAR President's List Award for 11 consecutive semesters since May 2021.",
      "Awarded to honour students who have excelled academically and achieved a GPA of 3.8500 and above."
    ],
  },
];

export function PublicationSection() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2 drop-shadow-md">What I Have Achieved</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Publications & Awards</h2>
        </div>

        {/* Publication Cards */}
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
