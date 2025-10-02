import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const experiences = [
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
      certificateLink: "#",
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
      certificateLink: "#",
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
      certificateLink: "#",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience through internships and training programs, building real-world skills in Python development, machine learning, and AI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                          className="text-muted-foreground flex items-start animate-fade-in"
                          style={{ animationDelay: `${(index * 0.1) + (i * 0.05)}s` }}
                        >
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover-scale"
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