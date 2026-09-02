"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden bg-slate-950 text-white px-6 py-16"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-medium backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Available for new projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Building high performance <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Websites
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            Hi, I&apos;m{" "}
            <span className="text-white font-semibold">Dawood</span>. A Web
            Developer focused on crafting clean code, responsive interfaces, and
            scalable modern web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/Projects"
              className="px-6 py-3 rounded-xl font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center gap-2 group active:scale-95"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all duration-200 active:scale-95"
            >
              Get In Touch
            </Link>
          </div>

          {/* Tech Stack Bar */}
          <div className="pt-6 border-t border-slate-800/80 w-full flex items-center gap-6 text-slate-400 text-xs font-mono">
            <span className="text-slate-500 font-sans">TECH STACK:</span>
            <div className="flex flex-wrap items-center gap-3 text-slate-300">
              <span className="hover:text-cyan-400 transition-colors">
                Next.js
              </span>
              <span>•</span>
              <span className="hover:text-cyan-400 transition-colors">
                React
              </span>
              <span>•</span>
              <span className="hover:text-cyan-400 transition-colors">
                TypeScript
              </span>
              <span>•</span>
              <span className="hover:text-cyan-400 transition-colors">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Code Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden group">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>developer.ts</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Code Output */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-4">
              <div>
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-cyan-400">&#123;</span>
              </div>

              <div className="pl-4 space-y-1 text-slate-300">
                <div>
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Dawood Rajpoot&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-slate-400">specialty:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Modern Web Applications&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Open for opportunities&quot;
                  </span>
                </div>
              </div>

              <div>
                <span className="text-cyan-400">&#125;</span>;
              </div>

              <div className="pt-2 text-slate-500">
                <span className="text-cyan-400">&gt;</span>{" "}
                developer.buildProjects()
              </div>

              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/30 p-2.5 rounded border border-emerald-900/50 text-xs">
                <Code2 className="w-4 h-4 shrink-0" />
                <span>Ready to transform your ideas into reality.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
