"use client";

import React from "react";

const testimonialsList = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Product Manager",
    company: "eSIM Global Solutions",
    content:
      "Dawood delivered an exceptional web application for our eSIM platform. The UI is lightning fast, clean, and responsive across all devices. His Next.js & Tailwind skills are top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Tech Lead",
    company: "Phonico Telecom",
    content:
      "Working with Dawood was a breeze. He implemented our custom authentication and cart system smoothly using Redux and MongoDB. High quality work delivered on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hamza Malik",
    role: "Startup Founder",
    company: "TravelTech",
    content:
      "Very dedicated full-stack developer. He understood our project requirements instantly and integrated Supabase backend logic without any friction.",
    rating: 5,
  },
  {
    id: 4,
    name: "Usman Tariq",
    role: "E-Commerce Director",
    company: "ShopSphere",
    content:
      "Extremely skilled in modern frontend animations and REST APIs. He built dynamic product filtering and page transitions that significantly boosted our conversion rates.",
    rating: 5,
  },
  {
    id: 5,
    name: "Elena Rostova",
    role: "SaaS Co-Founder",
    company: "CloudSync Inc.",
    content:
      "Dawood's grasp on backend databases like MySQL and Python APIs is impressive. He structured our data architecture cleanly and made frontend integration seamless.",
    rating: 5,
  },
  {
    id: 6,
    name: "Bilal Ahmed",
    role: "Agency Principal",
    company: "PixelCraft Studio",
    content:
      "Transformed our outdated Bootstrap layout into a sleek React and Next.js platform. Highly recommended for any complex web application project!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What People Say
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Feedback and reviews from clients and collaborators I have worked
            with on various web development projects.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between gap-6"
            >
              {/* Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-slate-700 font-serif text-4xl leading-none">
                  &ldquo;
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &quot;{item.content}&quot;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center font-bold text-cyan-400 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-slate-100">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
