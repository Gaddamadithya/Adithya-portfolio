import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ExternalLink, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';


const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer (SDE) Intern",
      company: "Infotact Solutions",
      location: "Remote",
      duration: "3 Month Internship",
      description: [
        "Completed a 3-month internship as a Software Development Engineer, contributing to full-stack development projects.",
        "Developed and maintained web applications using modern technologies and frameworks.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Implemented best practices in code quality, testing, and documentation."
      ],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Python Developer Intern",
      company: "Cognifyz Technologies",
      location: "Remote",
      duration: "1 Month Internship",
      description: [
        "Successfully completed 5 assigned internship tasks provided by the company, focused on Python programming.",
        "Implemented solutions for data handling, automation, and problem-solving using Python.",
        "Applied OOP concepts to build reusable and modular scripts.",
        "Performed debugging, testing, and documentation to ensure program accuracy."
      ],
      certificateLink: "https://drive.google.com/file/d/1bbRs9bmLf68-4EirkVB64PlNh5xc6e_N/view?usp=sharing",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Machine Learning Intern",
      company: "SkillCraft Technology",
      location: "Remote",
      duration: "1 Month Internship",
      description: [
        "Completed 5 machine learning tasks assigned by the company covering supervised (Regression, Classification) and unsupervised (Clustering) models.",
        "Built robust preprocessing pipelines with NumPy, Pandas for cleaning and transforming datasets.",
        "Evaluated model performance using accuracy, precision, recall, and F1-score.",
        "Improved predictive accuracy through feature engineering and hyperparameter tuning.",
        "Achieved a Certificate of Completion and a Recommendation Letter for internship performance."
      ],
      certificateLink: "https://drive.google.com/file/d/1IvrOfzbXjWpW2ncbxQjXSS-FYnotCmzu/view?usp=drive_link",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Trainee",
      company: "Magic Bus Foundation",
      location: "IBM-Supported College Training Program",
      duration: "1 Week Training",
      description: [
        "Completed a 1-week intensive training program at college, delivered by Magic Bus Foundation trainers in collaboration with IBM.",
        "Acquired strong foundations in AI fundamentals, communication, and problem-solving skills.",
        "Enhanced teamwork, leadership, and analytical thinking through interactive workshops and hands-on activities.",
        "Earned a Certificate of Completion for successfully completing the program."
      ],
      certificateLink: "https://drive.google.com/file/d/1olsA-44AC9sah75pkXFbP-mjui2FXDAI/view?usp=sharing",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-background" ref={elementRef}>
      <div className={`container mx-auto px-4 scroll-reveal-right ${isVisible ? 'scroll-reveal-right-visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-blue-600 icon-pulse-hover" />
            Experience
          </h2>
          <hr className="w-24 mx-auto mb-6 hr-gradient-animated" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience through internships and training programs, building real-world skills in Python development, machine learning, and AI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="animated-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-primary mt-1">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li 
                          key={i} 
                          className="text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.certificateLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Award className="w-4 h-4 mr-2" />
                          View Certificate
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;