
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Mail, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-sm shadow-lg' : 'bg-card/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Vishnu Vardhan
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
              <Home size={18} />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
              <User size={18} />
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
              <Code size={18} />
              <span>Projects</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="https://github.com/vishnu915" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/repana-vishnu-vardhan-26795b316/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
                <Home size={18} />
                <span>Home</span>
              </button>
              <button onClick={() => scrollToSection('about')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
                <User size={18} />
                <span>About</span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
                <Code size={18} />
                <span>Projects</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300">
                <Mail size={18} />
                <span>Contact</span>
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <ThemeToggle />
                <a href="https://github.com/vishnu915" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/repana-vishnu-vardhan-26795b316/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
