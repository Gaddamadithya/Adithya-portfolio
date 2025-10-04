
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Python Full Stack Developer', 'BCA Student', 'Problem Solver', 'Tech Enthusiast'];
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
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-60">
            Innovation
          </div>
        </div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000">
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-60">
            Creativity
          </div>
        </div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000">
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-60">
            Excellence
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            {/* Animated Border Rings */}
            <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow opacity-75"></div>
            <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 animate-spin-reverse opacity-60"></div>
            <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-pulse opacity-50"></div>
            
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/10">
              <img 
                src={profileImage} 
                alt="Vishnu Vardhan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
          </div>

          {/* Content */}
          <div className="lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="text-blue-400">Vishnu</span>
            </h1>
            <div className="text-2xl lg:text-3xl mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-blue-300">
                {displayText}
                <span className="animate-pulse">|</span>
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 animate-scale-in hover-scale relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
