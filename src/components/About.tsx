
import React from 'react';
import { GraduationCap, MapPin, Calendar, Code2, Download, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { 
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiFlask, SiDjango,
  SiMysql, SiMongodb, SiTensorflow, SiPytorch, SiOpencv, SiNumpy,
  SiPandas, SiScikitlearn, SiGit, SiGithub, SiPostman, SiJupyter,
  SiIntellijidea, SiJira, SiDocker,
  SiHtml5, SiCss3, SiOpenai, SiGooglegemini
} from 'react-icons/si';
import { Coffee, Code, Cloud, Database, Brain, FileText } from 'lucide-react';


const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA) — Final Year Student",
      institution: "Aditya Degree College, B. Kotha Kota",
      status: "Expected Graduation: 2026",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Intermediate (Commerce Stream)",
      institution: "Sunku Usha Gowthami Memorial Junior College, B. Kotha Kota",
      status: "Completed: 2023",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "PTM ZPHS High School",
      status: "Completed: 2021",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", icon: SiPython, color: "#3776AB" },
        { name: "Java", level: "Intermediate", icon: Coffee, color: "#007396" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", level: "Intermediate", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", level: "Intermediate", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", level: "Intermediate", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React.js", level: "Intermediate", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", level: "Intermediate", icon: SiNodedotjs, color: "#339933" }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Flask", level: "Intermediate", icon: SiFlask, color: "#000000" },
        { name: "Django", level: "Beginner", icon: SiDjango, color: "#092E20" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: SiMysql, color: "#4479A1" },
        { name: "SQL", level: "Intermediate", icon: Database, color: "#336791" },
        { name: "MongoDB", level: "Beginner", icon: SiMongodb, color: "#47A248" },
        { name: "Pinecone", level: "Intermediate", icon: Database, color: "#00D4FF" },
        { name: "FAISS", level: "Intermediate", icon: Database, color: "#0668E1" }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: "Intermediate", icon: Brain, color: "#FF6B6B" },
        { name: "Deep Learning", level: "Intermediate", icon: Brain, color: "#4ECDC4" },
        { name: "NLP", level: "Intermediate", icon: FileText, color: "#95E1D3" },
        { name: "Data Science", level: "Intermediate", icon: Brain, color: "#F38181" },
        { name: "NumPy", level: "Intermediate", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", level: "Intermediate", icon: SiPandas, color: "#150458" },
        { name: "Scikit-learn", level: "Intermediate", icon: SiScikitlearn, color: "#F7931E" },
        { name: "TensorFlow", level: "Intermediate", icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", level: "Intermediate", icon: SiPytorch, color: "#EE4C2C" },
        { name: "OpenCV", level: "Intermediate", icon: SiOpencv, color: "#5C3EE8" },
        { name: "OpenAI GPT", level: "Intermediate", icon: SiOpenai, color: "#412991" },
        { name: "Google Gemini", level: "Intermediate", icon: SiGooglegemini, color: "#4285F4" },
        { name: "RAG", level: "Intermediate", icon: Brain, color: "#9B59B6" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: "Intermediate", icon: SiGit, color: "#F05032" },
        { name: "GitHub", level: "Intermediate", icon: SiGithub, color: "#181717" },
        { name: "Postman", level: "Intermediate", icon: SiPostman, color: "#FF6C37" },
        { name: "Jupyter", level: "Intermediate", icon: SiJupyter, color: "#F37626" },
        { name: "VS Code", level: "Intermediate", icon: Code, color: "#007ACC" },
        { name: "IntelliJ IDEA", level: "Intermediate", icon: SiIntellijidea, color: "#000000" },
        { name: "MySQL Workbench", level: "Intermediate", icon: SiMysql, color: "#4479A1" },
        { name: "Jira", level: "Intermediate", icon: SiJira, color: "#0052CC" },
        { name: "Docker", level: "Intermediate", icon: SiDocker, color: "#2496ED" }
      ]
    },
    {
      category: "Cloud Services",
      skills: [
        { name: "Azure", level: "Beginner", icon: Cloud, color: "#0078D4" }
      ]
    }
  ];

  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-gray-50" ref={elementRef}>
      <div className={`container mx-auto px-4 scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <User className="w-10 h-10 text-blue-600 icon-pulse-hover" />
            About Me
          </h2>
          <hr className="w-24 mx-auto mb-6 hr-gradient-animated" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate BCA student specializing in Python full-stack development. 
            I love creating innovative solutions and learning new technologies to solve real-world problems.
          </p>
          <div className="mt-6">
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <a 
                href="https://drive.google.com/file/d/1l9FEZedbEP7riQfEJtUjZ2P4jsYT0mlZ/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Bio */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" />
              Education & Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="animated-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600 mt-1">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            edu.status.includes('Expected') 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Phone:</span> +91 9182177915</p>
                  <p><span className="font-medium">Location:</span> India</p>
                  <p><span className="font-medium">Status:</span> Available for opportunities</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code2 className="mr-3 text-blue-600" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, catIndex) => (
                <Card 
                  key={catIndex} 
                  className="overflow-hidden border-0 shadow-lg"
                >
                  <CardContent className="p-5">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skillIndex}
                            className="group relative flex items-center gap-2 px-4 py-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 text-foreground text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer backdrop-blur-sm animated-border"
                          >
                            <SkillIcon className="w-5 h-5" style={{ color: skill.color }} />
                            <span className="relative z-10">{skill.name}</span>
                            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Always Learning</h4>
                <p className="text-gray-600">
                  Frontend finesse + backend logic = Python Full Stack Magic 🧠💫
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
