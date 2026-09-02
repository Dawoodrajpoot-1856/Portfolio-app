"use client";

import Image from "next/image";
import React from "react";

const experienceList = [
  {
    role: "Full-Stack Web Development Intern",
    company: "Codiea.io",
    period: "Currently Working",
    badge: "Course & Internship",
    description:
      "Successfully completed an intensive Web Development course at Codiea.io and currently working as a Software Engineering Intern, building real-world production web applications.",
  },
];

const educationList = [
  {
    degree: "BS Software Engineering",
    institution: "The Islamia University of Bahawalpur",
    period: "Currently Pursuing",
    grade: "In Progress",
    description:
      "Studying core software engineering principles, system architecture, data structures, and full-stack software development.",
  },
  {
    degree: "Intermediate (HSSC)",
    institution: "Nims College",
    period: "Completed",
    grade: "Grade A",
    description:
      "Studied Science & Computer subjects with strong academic performance, laying a solid foundation for software engineering.",
  },
  {
    degree: "Matriculation (SSC)",
    institution: "The Educators",
    period: "Completed",
    grade: "Grade A",
    description:
      "Completed secondary education with top grades in Computer Science and Mathematics.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A passionate Software Engineering student and Full-Stack Web
            Developer dedicated to crafting clean, efficient, and scalable web
            solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-4 group hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
              {/* Baad me apni pic lagane ke liye is niche wale <Image /> ko uncomment kar dein: */}
              {/* 
              <Image
                src="/profile.png"
                alt="Profile Picture"
                fill
                className="object-cover rounded-2xl"
              /> 
              */}

              {/* Temporary Visual Placeholder */}
              <div className="flex flex-col items-center justify-center gap-4 text-center p-6">
                <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                  <svg
                    className="w-10 h-10 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-slate-200">
                    Profile Picture
                  </p>
                  <p className="text-xs text-slate-500 font-mono">
                    Place your image in `/public/profile.png`
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bio & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Full-Stack Developer &amp;{" "}
              <span className="text-cyan-400">
                Software Engineering Student
              </span>
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              I specialize in building end-to-end web applications using modern
              web technologies. After completing my Web Development
              certification at{" "}
              <span className="text-cyan-400 font-semibold">Codiea.io</span>, I
              am currently working as a Web Development Intern while pursuing my
              BS in Software Engineering at IUB.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-2xl font-extrabold text-cyan-400">BSSE</p>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  IUB Bahawalpur
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-2xl font-extrabold text-emerald-400">
                  Intern
                </p>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  at Codiea.io
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-2xl font-extrabold text-indigo-400">
                  A Grade
                </p>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Matric &amp; Inter
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Internship Section */}
        <div className="flex flex-col gap-6 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col gap-1">
            <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
              // Practical Experience
            </span>
            <h3 className="text-2xl font-bold text-slate-100">
              Internship &amp; Professional Training
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {experienceList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center"
              >
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mt-1">
                    {item.role} •{" "}
                    <span className="text-cyan-400">{item.company}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col gap-8 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col gap-1">
            <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
              // Academic Journey
            </span>
            <h3 className="text-2xl font-bold text-slate-100">
              Education &amp; Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md">
                      {item.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mt-2">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
