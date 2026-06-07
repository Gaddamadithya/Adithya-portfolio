import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-slate-200/80 bg-white/[0.88] shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl'
            : 'border-white/15 bg-slate-950/20 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-lg'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-7">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-left text-sm font-semibold tracking-[0.3em] uppercase transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            Gaddam Adithya.............
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isScrolled
                    ? 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="https://github.com/Gaddamadithya"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 transition-colors ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gaddam-adithya/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 transition-colors ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? 'bg-slate-950 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-950 hover:bg-slate-100'
              }`}
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`rounded-full p-2 md:hidden ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200/70 px-5 pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-2xl px-4 py-3 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                  href="https://github.com/Gaddamadithya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-slate-700 hover:bg-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaddam-adithya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-slate-700 hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
