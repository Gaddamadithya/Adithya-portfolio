
import React from 'react';
import { GraduationCap, MapPin, Calendar, Code2, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
        { name: "Python", level: "Advanced", color: "from-blue-500 to-cyan-500" },
        { name: "Java", level: "Intermediate", color: "from-orange-500 to-red-500" }
      ],
      animation: "animate-fade-in hover:scale-105"
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", level: "Advanced", color: "from-orange-400 to-red-400" },
        { name: "CSS", level: "Advanced", color: "from-blue-400 to-indigo-400" },
        { name: "JavaScript", level: "Intermediate", color: "from-yellow-400 to-orange-400" },
        { name: "React.js", level: "Intermediate", color: "from-cyan-400 to-blue-400" },
        { name: "Node.js", level: "Intermediate", color: "from-green-400 to-emerald-400" }
      ],
      animation: "animate-scale-in hover:rotate-1"
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Flask", level: "Intermediate", color: "from-gray-600 to-gray-800" },
        { name: "Django", level: "Beginner", color: "from-green-600 to-teal-600" }
      ],
      animation: "animate-slide-in-right hover:-rotate-1"
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", color: "from-blue-600 to-indigo-600" },
        { name: "SQL", level: "Intermediate", color: "from-purple-500 to-pink-500" },
        { name: "MongoDB", level: "Beginner", color: "from-green-500 to-lime-500" },
        { name: "Pinecone", level: "Intermediate", color: "from-indigo-500 to-purple-500" },
        { name: "FAISS", level: "Intermediate", color: "from-cyan-500 to-blue-500" }
      ],
      animation: "animate-fade-in hover:translate-x-2"
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: "Intermediate", color: "from-pink-500 to-rose-500" },
        { name: "Deep Learning", level: "Intermediate", color: "from-indigo-500 to-blue-500" },
        { name: "NLP", level: "Intermediate", color: "from-purple-500 to-indigo-500" },
        { name: "Data Science", level: "Intermediate", color: "from-emerald-500 to-teal-500" },
        { name: "NumPy", level: "Intermediate", color: "from-blue-400 to-cyan-400" },
        { name: "Pandas", level: "Intermediate", color: "from-indigo-400 to-purple-400" },
        { name: "Scikit-learn", level: "Intermediate", color: "from-orange-400 to-amber-400" },
        { name: "TensorFlow", level: "Intermediate", color: "from-orange-500 to-red-500" },
        { name: "PyTorch", level: "Intermediate", color: "from-red-500 to-pink-500" },
        { name: "OpenCV", level: "Intermediate", color: "from-green-500 to-emerald-500" },
        { name: "OpenAI GPT", level: "Intermediate", color: "from-purple-600 to-pink-600" },
        { name: "Google Gemini", level: "Intermediate", color: "from-blue-600 to-indigo-600" },
        { name: "RAG", level: "Intermediate", color: "from-cyan-600 to-blue-600" }
      ],
      animation: "animate-scale-in hover:shadow-2xl"
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: "Intermediate", color: "from-orange-600 to-red-600" },
        { name: "GitHub", level: "Intermediate", color: "from-gray-700 to-gray-900" },
        { name: "Postman", level: "Intermediate", color: "from-orange-500 to-amber-500" },
        { name: "Jupyter", level: "Intermediate", color: "from-orange-400 to-red-400" },
        { name: "VS Code", level: "Advanced", color: "from-blue-500 to-cyan-500" },
        { name: "IntelliJ IDEA", level: "Intermediate", color: "from-purple-600 to-pink-600" },
        { name: "MySQL Workbench", level: "Intermediate", color: "from-blue-600 to-indigo-600" },
        { name: "Jira", level: "Intermediate", color: "from-blue-500 to-purple-500" },
        { name: "Docker", level: "Intermediate", color: "from-cyan-500 to-blue-500" }
      ],
      animation: "animate-fade-in hover:-translate-y-1"
    },
    {
      category: "Cloud Services",
      skills: [
        { name: "Azure", level: "Beginner", color: "from-blue-600 to-cyan-600" }
      ],
      animation: "animate-slide-in-right hover:scale-110"
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: "Advanced", color: "from-green-500 to-emerald-500" },
        { name: "Communication", level: "Advanced", color: "from-blue-500 to-indigo-500" },
        { name: "Team Collaboration", level: "Advanced", color: "from-purple-500 to-pink-500" },
        { name: "Quick Learning", level: "Advanced", color: "from-orange-500 to-red-500" },
        { name: "Adaptability", level: "Advanced", color: "from-cyan-500 to-blue-500" }
      ],
      animation: "animate-scale-in hover:rotate-2"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
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
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`group relative px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer`}
                        >
                          <span className="relative z-10">{skill.name}</span>
                          <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-white text-gray-800 text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                            {skill.level}
                          </span>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                        </div>
                      ))}
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
