"use client";

import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Codiea.io",
    period: "2026 - Present",
    type: "Internship",
    points: [
      "Building scalable web applications using Next.js, React, and Tailwind CSS.",
      "Developing state management workflows using Redux Toolkit and REST APIs.",
      "Optimizing database schemas with MongoDB and Mongoose for backend services.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2025 - Present",
    type: "Freelance",
    points: [
      "Delivered custom web tools and platforms like utility applications and clones.",
      "Integrated authentication systems (NextAuth, Supabase) and custom UI kits.",
      "Ensured mobile responsiveness and high performance scores across Vercel deployments.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Career Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            My practical journey in software engineering and web development.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-cyan-400 font-mono">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 pt-2">
                  {exp.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-cyan-400">▸</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
