import React from 'react';
import { ArrowUpRight, Download, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces, components, and responsive experiences',
    items: ['React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    description: 'APIs, databases, and server-side workflows',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'MySQL', 'MongoDB']
  },
  {
    title: 'AI & Automation',
    description: 'LLM workflows and productivity-oriented systems',
    items: ['OpenAI', 'Gemini', 'RAG', 'Prompt Engineering', 'Playwright', 'n8n']
  },
  {
    title: 'Developer Tools',
    description: 'Tooling used for development, testing, and delivery',
    items: ['Git', 'GitHub', 'Postman', 'Jupyter', 'VS Code', 'Deployment']
  },
];

const highlights = [
  'Focused on product-minded engineering, not just writing code.',
  'Comfortable building full-stack apps from UI to APIs and database integration.',
  'Interested in AI systems that solve practical workflow problems.',
];

const education = [
  {
    degree: 'BTech in Computer Science and Engineering',
    institution: 'Amrita Vishwa Vidyapeetham, Amaravati',
    status: 'Expected Graduation: 2027',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Academy Junior College, Tirupati',
    status: 'Completed: 2023',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'PTM ZPHS High School',
    status: 'Completed: 2021',
  },
];

const About = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_45%,#f5f8fc_100%)] py-24"
      ref={elementRef}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <div className={`container relative mx-auto px-4 scroll-reveal-left ${isVisible ? 'scroll-reveal-left-visible' : ''}`}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">About</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Building practical digital products with thoughtful engineering
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            I&apos;m a final-year computer science student who enjoys combining clean interfaces, reliable backend systems,
            and AI-powered workflows to build useful software with real-world value.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/[0.85] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-700">Profile</p>
                  <h3 className="mt-3 text-3xl font-bold text-slate-950">A grounded builder with an AI edge</h3>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800"
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

              <p className="mt-6 text-base leading-8 text-slate-600">
                My work is centered around full-stack applications, AI-powered products, and developer-focused automation.
                I like solving messy practical problems, whether that means designing a better user flow, structuring APIs well,
                or using LLM workflows to reduce manual effort.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-950">8+</p>
                  <p className="mt-1 text-sm text-slate-600">Portfolio-ready projects</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-950">Full Stack</p>
                  <p className="mt-1 text-sm text-slate-600">From frontend experience to backend logic</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-950">AI Systems</p>
                  <p className="mt-1 text-sm text-slate-600">LLM, RAG, testing, and automation workflows</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <Card key={group.title} className="border-slate-200/70 bg-white/[0.8] shadow-[0_20px_55px_rgba(15,23,42,0.05)]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-950">{group.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{group.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Current Focus</p>
              <h3 className="mt-4 text-3xl font-bold">The kind of work I want to do more of</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-300">AI-powered product features</p>
                  <p className="mt-1 text-base text-white">Interfaces and workflows that feel useful, not gimmicky</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-300">Robust full-stack delivery</p>
                  <p className="mt-1 text-base text-white">Clean frontend systems, backend APIs, and reliable integrations</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-300">Developer automation</p>
                  <p className="mt-1 text-base text-white">Testing, productivity tooling, and AI-assisted engineering workflows</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/70 bg-white/[0.85] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-sky-600" />
                <h3 className="text-2xl font-bold text-slate-950">Education</h3>
              </div>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">{item.degree}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                    <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-sky-50 to-white p-8 shadow-[0_22px_60px_rgba(14,165,233,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-700">Availability</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">Open to internships and impactful projects</h3>
                </div>
                <Sparkles className="h-6 w-6 text-sky-600" />
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  India
                </div>
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="h-4 w-4 text-sky-600" />
                  Remote opportunities and collaborative product work
                </div>
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="h-4 w-4 text-sky-600" />
                  Looking for roles in full-stack, AI, and developer tooling
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
