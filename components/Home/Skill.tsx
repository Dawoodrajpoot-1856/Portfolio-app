"use client";

import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
      { name: "Bootstrap", tag: "UI Framework" },
      { name: "JavaScript", tag: "Language" },
      { name: "React", tag: "Library" },
      { name: "Next.js", tag: "Framework" },
      { name: "Animations", tag: "Framer / CSS" },
      { name: "Typescript", tag: "Next js" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Python", tag: "Backend" },
      { name: "REST APIs", tag: "Integration" },
      { name: "Supabase", tag: "BaaS & Auth" },
      { name: "MongoDB", tag: "NoSQL DB" },
      { name: "MySQL", tag: "SQL DB" },
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
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A comprehensive list of tools, languages, and frameworks I use to
            build scalable web applications.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-md flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-xs font-mono font-normal text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-800/50">
                  {category.skills.length} Stack Items
                </span>
              </h3>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                      {skill.tag}
                    </span>
                  </div>
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
