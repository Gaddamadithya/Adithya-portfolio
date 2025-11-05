
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'SDE Intern @ Infotact Solutions',
    'Python Full Stack Developer',
    'Flask & React Specialist',
    'REST APIs & MySQL Expert',
    'Azure Cloud & AI/ML',
    'Problem Solving & AI R&D'
  ];
  const fullText = texts[currentIndex % texts.length];

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img 
                src={profileImage} 
                alt="Vishnu Vardhan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Vishnu</span>
            </h1>
            <div className="text-2xl lg:text-3xl mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-blue-300">
                {displayText}
                <span>|</span>
              </span>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              BCA Final Year Student passionate about creating innovative web solutions 
              with Python, React, and modern technologies. Building the future, one line of code at a time.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-colors duration-300"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
