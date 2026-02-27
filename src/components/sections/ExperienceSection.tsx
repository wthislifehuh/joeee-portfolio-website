"use client";

import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';

const aiMlSkills = [
  "LLMs (Gemini, Claude, GPT)",
  "TensorFlow",
  "OpenCV",
  "PyTorch",
];

const frameworkSkills = [
  ["React / Next.js", "Vue.js"],
  ["Node.js / Express", "REST APIs"],
  ["Flutter / React Native", "PyQt"],
  ["Firebase", "MongoDB"],
  ["PostgreSQL", "MySQL"],
];

const languages = [
  ["Python", "JavaScript / TS"],
  ["Java", "C++"],
  ["SQL", "Dart / HTML / CSS"],
];

const devOps = [
  ["AWS", "Alibaba / Huawei"],
  ["Terraform", "Git / CI/CD"],
  ["Docker", "Nginx / Apache"],
];

const workExperience = [
  {
    company: "GDEX Berhad Sdn. Bhd.",
    role: "AI Specialist",
    period: "Feb 2025 - Mar 2026",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Architected AI-powered OCR and Parcel Delivery Verification systems",
      "Fine-tuned LLM Models (Gemini, Nova AI) using Python and PyTorch",
      "Automated extraction workflows, boosting efficiency >50%",
      "Designed scalable cloud-based AI architecture on AWS",
    ],
  },
  {
    company: "Hilti Asia IT Services",
    role: "DevOps Engineer Intern",
    period: "Oct 2024 - Jan 2025",
    icon: "☁️",
    color: "from-red-500 to-red-700",
    highlights: [
      "Coordinated end-to-end delivery of CloudSSO revamp with 100% uptime",
      "Benchmarked Apache to Nginx migration reducing latency by 30-50%",
      "Optimized GitLab CI/CD pipelines using Terraform & AWS",
    ],
  },
  {
    company: "Universiti Tunku Abdul Rahman",
    role: "Research Assistant",
    period: "Sep 2024 - Nov 2024",
    icon: "🔬",
    color: "from-purple-600 to-purple-800",
    highlights: [
      "Designed LLM framework for structured data extraction",
      "Improved pipeline accuracy by 38% through prompt optimization",
      "Contributed to research leading to IEEE AiDAS 2024 publication",
    ],
  },
  {
    company: "Axcell Solutions Sdn. Bhd.",
    role: "Junior Software Developer",
    period: "Nov 2023 - Oct 2024",
    icon: "💻",
    color: "from-green-500 to-green-700",
    highlights: [
      "Developed responsive promotional websites using WordPress",
      "Integrated HTML websites with Vue.js, improving reusability by 43%",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">What Skills I Have</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">My Experience</h2>
        </div>

        {/* Technical Skills */}
        <ScrollStack className="w-full mb-16 relative" itemDistance={20} stackPosition="10%" useWindowScroll={true}>
          {/* AI & ML Skills Card */}
          <ScrollStackItem>
            <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-white text-center mb-6">AI & Machine Learning</h3>
              <div className="grid grid-cols-2 gap-4">
                {aiMlSkills.map((skill) => (
                  <p key={skill} className="skill-badge text-white/80">{skill}</p>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* Web & Database */}
          <ScrollStackItem>
            <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-white text-center mb-6">Frameworks & Databases</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {frameworkSkills.flat().map((skill) => (
                  <p key={skill} className="skill-badge text-white/80">{skill}</p>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* Programming Languages */}
          <ScrollStackItem>
            <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-white text-center mb-6">Programming Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {languages.flat().map((skill) => (
                  <p key={skill} className="skill-badge text-white/80">{skill}</p>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* DevOps & System */}
          <ScrollStackItem>
            <div className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-white text-center mb-6">Cloud & DevOps</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {devOps.flat().map((skill) => (
                  <p key={skill} className="skill-badge text-white/80">{skill}</p>
                ))}
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        {/* Work Experience */}
        <div className="text-center mb-8">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">My personal & professional development</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Work</h2>
        </div>

        <ScrollStack className="w-full relative" itemDistance={20} stackPosition="10%" useWindowScroll={true}>
          {workExperience.map((job) => (
            <ScrollStackItem key={job.company}>
              <div
                className="card-glow bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
              >
                {/* Company Header */}
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-3xl`}>
                    {job.icon}
                  </div>
                  <h4 className="text-lg font-medium text-primary">{job.company}</h4>
                  <p className="text-white font-semibold">{job.role}</p>
                  <p className="text-white/60 text-sm">{job.period}</p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {job.highlights.map((highlight, index) => (
                    <li key={`${job.company}-${index}`} className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
