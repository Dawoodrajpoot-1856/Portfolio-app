"use client";

import React from "react";

const platformsList = [
  {
    id: 1,
    name: "LinkedIn",
    username: "@coming_soon",
    status: "Coming Soon",
    category: "Professional Network",
    description:
      "Professional profile setup and corporate networking page currently under configuration.",
    icon: (
      <svg className="w-6 h-6 fill-current text-cyan-400" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Upwork",
    username: "@coming_soon",
    status: "Coming Soon",
    category: "Freelance Marketplace",
    description:
      "Specialized profile for Full-Stack Web Development, Next.js applications, and custom software engineering.",
    icon: (
      <svg
        className="w-6 h-6 fill-current text-emerald-400"
        viewBox="0 0 24 24"
      >
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.012 1.545-3.09 3.031-3.09 1.617 0 2.822 1.306 2.822 2.915 0 1.6-1.205 2.52-2.815 2.52zm0-7.834c-3.12 0-5.228 2.083-5.877 4.908-1.077-1.782-1.87-3.87-2.38-5.388H7.31v6.52c0 2.213-1.213 3.447-3.085 3.447-1.87 0-3.084-1.234-3.084-3.447v-6.52H0v6.52c0 3.73 2.28 5.8 5.225 5.8 2.946 0 5.226-2.07 5.226-5.8V9.828c.552 1.25 1.282 2.76 2.193 4.12l-1.617 7.552h3.018l1.102-5.15c1.076.81 2.308 1.28 3.614 1.28 3.483 0 5.823-2.618 5.823-6.14 0-3.52-2.34-6.136-5.823-6.136z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Fiverr",
    username: "@coming_soon",
    status: "Coming Soon",
    category: "Gig Marketplace",
    description:
      "Upcoming web development gigs offering custom React components, API integration, and performance optimization.",
    icon: (
      <span className="text-xl font-extrabold text-emerald-400 font-mono">
        fi.
      </span>
    ),
  },
  {
    id: 4,
    name: "Freelancer",
    username: "@coming_soon",
    status: "Coming Soon",
    category: "Bidding Platform",
    description:
      "Profile setup in progress for project bidding on frontend layouts and full-stack web platforms.",
    icon: (
      <svg className="w-6 h-6 fill-current text-sky-400" viewBox="0 0 24 24">
        <path d="M13.84 3L11.1 7.26 7.2 3H3l6.33 6.91L3 21h4.2l4.82-5.3 4.82 5.3H21l-6.33-11.09L21 3h-7.16z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Guru",
    username: "@coming_soon",
    status: "Coming Soon",
    category: "Work Platform",
    description:
      "Freelance developer profile for enterprise software solutions and contract-based web services.",
    icon: (
      <span className="text-xl font-extrabold text-indigo-400 font-mono">
        G
      </span>
    ),
  },
  {
    id: 6,
    name: "Toptal",
    username: "@coming_soon",
    status: "Coming Soon",
    category: "Vetted Network",
    description:
      "Preparing developer application and screening portfolio for top-tier global remote contracts.",
    icon: (
      <span className="text-xl font-extrabold text-cyan-400 font-mono">T</span>
    ),
  },
];

const Freelancing = () => {
  return (
    <section
      id="freelance"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Online Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Freelance Platforms
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            My official profiles on major freelancing and professional
            networking platforms. These profiles are currently under setup.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformsList.map((platform) => (
            <div
              key={platform.id}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between gap-6 relative overflow-hidden group"
            >
              {/* Top Row: Icon & Status Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {platform.icon}
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {platform.status}
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-slate-100">
                    {platform.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {platform.category}
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400">
                  {platform.username}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">
                  {platform.description}
                </p>
              </div>

              {/* Disabled Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  disabled
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-500 text-xs font-mono cursor-not-allowed opacity-75 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Profile Under Setup</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelancing;
