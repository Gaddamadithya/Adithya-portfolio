import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Download, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    'Software Engineer',
    'AI/ML & Automation Engineer',
    'Full Stack Developer',
    'React & Node Specialist',
    'REST APIs & MySQL Expert',
    'AWS Cloud Enthusiast',
    'Problem Solving & AI R&D'
  ];

  const fullText = texts[currentIndex % texts.length];

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText('');
      setCurrentIndex((prev) => prev + 1);
    }, 1800);

    return () => clearTimeout(timeout);
  }, [displayText, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(45,212,191,0.18),_transparent_26%),linear-gradient(135deg,_#07111f_0%,_#10203b_45%,_#0d172a_100%)] pt-20 text-white"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-5%] top-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-8%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 shadow-lg backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Building AI-powered products and modern web experiences
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Designing and building
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                practical software
              </span>
              for real-world impact
            </h1>

            <div className="mt-6 flex h-12 items-center justify-center text-xl text-sky-200 sm:text-2xl lg:justify-start lg:text-3xl">
              <span className="font-medium">
                {displayText}
                <span className="ml-1 text-cyan-300">|</span>
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              I am Gaddam Adithya, a final-year computer science student focused on full-stack development,
              AI workflows, and product-minded engineering. I enjoy turning ideas into clean, usable, and
              scalable applications.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="group min-w-[190px] rounded-full bg-white px-8 py-6 text-slate-950 hover:bg-slate-100"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                asChild
                variant="outline"
                className="min-w-[190px] rounded-full border-white/25 bg-white/5 px-8 py-6 text-white backdrop-blur hover:bg-white/10 hover:text-white"
              >
                <a
                  href="https://drive.google.com/file/d/1tekFoCi-CtVU4KIRyozXRv-nHXEGa1My/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                <MapPin className="h-4 w-4 text-cyan-300" />
                India
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Open to internships
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Remote friendly
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">8+</p>
                <p className="mt-1 text-sm text-slate-300">Projects built across web and AI</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">Full Stack</p>
                <p className="mt-1 text-sm text-slate-300">Frontend, backend, APIs, and deployment</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">AI Focus</p>
                <p className="mt-1 text-sm text-slate-300">LLMs, RAG, automation, and testing workflows</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-x-10 top-10 h-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-blue-400/10 to-emerald-300/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/40">
                  <img
                    src={profileImage}
                    alt="Gaddam Adithya"
                    className="aspect-[4/4.2] w-full object-cover"
                  />
                </div>

                <div className="relative mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Current Focus</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    AI-powered web apps, automation workflows, and scalable developer tooling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200 backdrop-blur transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
            aria-label="Scroll to about section"
          >
            Explore More
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
