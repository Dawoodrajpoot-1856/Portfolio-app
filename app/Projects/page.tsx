"use client";

import Image from "next/image";
import React from "react";

const projectsList = [
  {
    id: 1,
    title: "Phonico eSIM app",
    description:
      "Telecom web application featuring custom authentication workflows, email OTP verification, dynamic shopping cart drawer, and interactive forms. Apis Work fast in this site",
    image: "/phonico.png",
    tags: ["Next.js", "Redux Toolkit", "MongoDB", "Zod", "shadcn", "Next Auth"],
    liveUrl: "https://phonico-website-codiea.vercel.app",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/phonico-website",
  },
  {
    id: 2,
    title: "Airbnb Clone app",
    description:
      "Feature-rich accommodation booking platform featuring sticky search headers, category filter carousels, detailed listing cards, and help center accordions. In this i can use supabse to save data making my api  ",
    image: "/Airbnb.png",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Next Auth",
      "shadcn",
    ],
    liveUrl: "https://airbnb-clone-one-umber.vercel.app",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/airbnb-clone",
  },
  {
    id: 3,
    title: "Yallo-app eSIM",
    description:
      "A modern eSIM travel platform providing instant cellular connectivity, interactive destination packages, and smooth user checkout experience.",
    image: "/yaloo.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://yaloo-app.vercel.app",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/yaloo-app",
  },
  {
    id: 4,
    title: "Name decoration tools app",
    description:
      "An interactive web utility designed for custom typography, stylized font generation, and creative text formatting for social profiles.",
    image: "/Name.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "http://decoration-tools.vercel.app/",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/decoration-tools",
  },
  {
    id: 5,
    title: "Lovecharacters64 app",
    description:
      "A creative tool for to find love type. You can know what is your love type in this site of 32 characters. Love characters also avalable",
    image: "/Love.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://lovecharacters64.vercel.app",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/lovecharacters64",
  },
  {
    id: 8,
    title: "Restaurant app",
    description:
      "A sleek restaurant website featuring online menu showcase, food category filters, and interactive reservation workflows.",
    image: "/Rest.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://resturant-codiea.vercel.app/",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/resturant-app",
  },
  {
    id: 6,
    title: "Mini game app",
    description:
      "An engaging browser-based interactive mini game built with React, focusing on state management, quick timing events, and score tracking.",
    image: "/Bomb.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "http://bomb-game-codiea.vercel.app/",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/bomb-game",
  },
  {
    id: 7,
    title: "Github and Weather app",
    description:
      "A multi-functional web dashboard combining real-time weather forecasts with API integrations for exploring GitHub profiles and repositories.",
    image: "/Github.png",
    tags: ["Next.js", "React", "Tailwind CSS", "REST API"],
    liveUrl: "https://weather-github.vercel.app/",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/weather-github",
  },
  {
    id: 8,
    title: "eSIM app",
    description:
      "A multi-functional web dashboard combining real-time weather forecasts with API integrations for exploring GitHub profiles and repositories.",
    image: "/esim.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST API",
      "Supabse",
      "Redux",
      "Tanstack",
      "Zod",
    ],
    liveUrl: "https://esim-app-codiea.vercel.app/",
    githubUrl: "https://github.com/Dawoodrajpoot-1856/esim-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            All Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Here are some of the web applications and digital experiences I have
            designed and developed. All source code and details are available
            below.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-cyan-500/50 flex flex-col justify-between transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full p-6 h-48 bg-slate-950 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  {/* Live Demo Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-950 bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-lg transition-colors active:scale-95"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-950 transition-colors active:scale-95"
                    aria-label="GitHub Repository"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
