import React from 'react';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const projects = [
  {
    title: 'AI Powered Smart Code Translator',
    category: 'AI Developer Tool',
    description:
      'An AI-driven developer tool that translates code across languages, explains logic in plain English, suggests optimizations, and analyzes complexity.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'RAG', 'OAuth'],
    features: [
      'Code translation across multiple languages',
      'Complexity analysis and optimization guidance',
      'Interactive editor with operation history',
    ],
    github: 'https://github.com/Gaddamadithya/Smart-Code_translator.git',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'AI-Powered Web App Builder',
    category: 'AI Product Builder',
    description:
      'A prompt-based web app builder that speeds up prototyping with AI-assisted generation, customization, and scalable project structure.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Prompt-based app generation flow',
      'Dynamic AI-assisted content generation',
      'Responsive UI and scalable architecture',
    ],
    github: 'https://github.com/Gaddamadithya/ai-web-builder.git',
    accent: 'from-sky-500 via-blue-500 to-cyan-500',
  },
  {
    title: 'AI Powered Automated Web Testing',
    category: 'Automation Platform',
    description:
      'A testing system that converts natural language instructions into Playwright end-to-end tests using LLM reasoning and semantic search.',
    technologies: ['Playwright', 'TypeScript', 'Node.js', 'LLM', 'Vector Store'],
    features: [
      'Prompt-to-test flow generation',
      'Semantic understanding of app structure',
      'Generated code and structured result reports',
    ],
    github: 'https://github.com/Gaddamadithya/Automated-Web-Testing.git',
    accent: 'from-cyan-500 via-sky-500 to-indigo-500',
  },
  {
    title: 'EduReach AI College Counselor',
    category: 'EdTech AI Platform',
    description:
      'An AI-powered student guidance platform offering counseling chat, voice support, secure login, and college information delivery.',
    technologies: ['React', 'Node.js', 'MongoDB', 'LangChain', 'Gemini API', 'Vapi'],
    features: [
      'RAG-based counseling chat experience',
      'Voice assistance for student guidance',
      'Protected content and lead engagement flow',
    ],
    github: 'https://github.com/Gaddamadithya/EduReach-College.git',
    accent: 'from-indigo-500 via-blue-500 to-cyan-500',
  },
  {
    title: 'Skill Swap Platform',
    category: 'MERN Marketplace',
    description:
      'A MERN platform for exchanging skills through barter-based deals, with listings, messaging, profiles, and ratings.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    features: [
      'Skill offers and request listings',
      'Messaging, notifications, and reviews',
      'JWT-secured user accounts and profile flows',
    ],
    github: 'https://github.com/Gaddamadithya/skill-swap.git',
    accent: 'from-fuchsia-500 via-violet-500 to-indigo-500',
  },
  {
    title: 'Jobby App',
    category: 'React SPA',
    description:
      'A React job search application with protected routes, profile data, filtering, and detailed job views built in a modular SPA structure.',
    technologies: ['React.js', 'JavaScript', 'REST APIs', 'CSS'],
    features: [
      'Protected auth-based routing',
      'Search and multi-filter jobs listing',
      'Detailed job and similar jobs views',
    ],
    github: 'https://github.com/Gaddamadithya/JobbyApp.git',
    accent: 'from-lime-500 via-emerald-500 to-green-500',
  },
  {
    title: 'nxtWatch',
    category: 'Frontend UI Project',
    description:
      'A responsive streaming-style React UI with protected routes, dynamic API-driven sections, and robust loading and error states.',
    technologies: ['React.js', 'JavaScript', 'Styled Components', 'APIs'],
    features: [
      'Home, Trending, Gaming, and Saved views',
      'Dark and light theme support',
      'Scalable component-based frontend structure',
    ],
    github: 'https://github.com/Gaddamadithya/NxtWatch.git',
    accent: 'from-violet-500 via-purple-500 to-pink-500',
  },
  {
    title: 'Myntra Clone',
    category: 'Backend System',
    description:
      'Built a beginner-friendly Myntra-inspired shopping website using HTML, CSS, and JavaScript. The project includes a working product listing page, clickable navbar navigation, add-to-cart functionality using localStorage, and a cart page with live price updates when items are added or removed. Designed without React or backend to strengthen core frontend skills and DOM manipulation basics.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Working product listing page',
      'Clickable navbar navigation',
      'Add-to-cart functionality using localStorage',
      'Cart page with live price updates',
    ],
    github: 'https://github.com/Gaddamadithya/Myntra_Clone.git',
    accent: 'from-orange-500 via-amber-500 to-red-500',
  },
];

const Projects = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
      ref={elementRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_22%),radial-gradient(circle_at_80%_20%,_rgba(45,212,191,0.12),_transparent_24%),linear-gradient(180deg,_rgba(15,23,42,0.96)_0%,_rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className={`container relative mx-auto px-4 scroll-reveal-scale ${isVisible ? 'scroll-reveal-scale-visible' : ''}`}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            A portfolio shaped around product building, AI, and execution
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            These projects reflect the kind of work I want to do more of: thoughtful interfaces,
            solid engineering, automation, and AI features that solve real problems.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-white shadow-[0_28px_90px_rgba(2,6,23,0.35)] backdrop-blur-xl"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
              <CardContent className="flex h-full flex-col p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-300">
                      {project.category}
                    </div>
                    <p className="text-sm text-slate-400">Project {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400">
                      Private / link unavailable
                    </div>
                  )}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <p className="text-sm leading-7 text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-8 pt-2">
                    <Button
                      asChild
                      className="rounded-full bg-white px-5 text-slate-950 hover:bg-slate-100"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/Gaddamadithya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
          >
            Explore More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
