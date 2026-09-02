"use client";

import React from "react";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5/CSS3",
      "JavaScript (ES6+)",
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "Mongoose",
      "Supabase",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Postman",
      "Zod Validation",
      "VS Code",
      "Figma to Code",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // My Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Technologies, frameworks, and tools I use to build scalable
            full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col gap-6"
            >
              <h3 className="text-lg font-bold text-slate-100 pb-3 border-b border-slate-800">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
