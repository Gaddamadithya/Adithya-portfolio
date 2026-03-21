import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#060b16] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_28px_80px_rgba(2,6,23,0.3)] backdrop-blur md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Portfolio</p>
            <h3 className="mt-4 text-3xl font-black text-white">Gaddam Adithya</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Full-stack developer focused on building useful products, AI-powered systems, and realistic digital experiences.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Gaddamadithya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaddam-adithya/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:adithyagaddam369@gmail.com"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Navigation</h4>
            <div className="mt-5 space-y-3">
              {['home', 'about', 'projects', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Contact</h4>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-300" />
                +91 8519958584
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-300" />
                adithyagaddam369@gmail.com
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                Open to internships, collaborations, and product-focused engineering opportunities.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 px-2 text-center text-sm text-slate-500 md:flex-row">
          <p>Made by Gaddam Adithya</p>
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
