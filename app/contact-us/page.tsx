"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Message send logic
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-slate-950 py-20 px-6 text-white border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Have a project in mind or want to discuss opportunities? Reach out
            via direct channels or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards (WhatsApp & Email) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/923377544813"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.395 0 .01 5.387.007 12.043a11.988 11.988 0 001.61 6.007L0 24l6.126-1.606a11.84 11.84 0 005.918 1.57h.005c6.654 0 12.04-5.387 12.043-12.043 0-3.218-1.254-6.242-3.535-8.519" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">
                    Direct WhatsApp
                  </p>
                  <p className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    0337-7544813
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                Chat Now
              </span>
            </a>

            {/* Direct Email Button */}
            <a
              href="mailto:dawoodraj1856@gmail.com"
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">
                    Direct Mail
                  </p>
                  <p className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    dawoodraj1856@gmail.com
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-lg">
                Send Email
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Dawood Rajpoot"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-md shadow-cyan-500/10 active:scale-98"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
