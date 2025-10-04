
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

  const skills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
    { name: "React JS", level: 75, color: "bg-cyan-500" },
    { name: "Python", level: 85, color: "bg-green-500" },
    { name: "Flask", level: 70, color: "bg-gray-600" },
    { name: "SQL", level: 80, color: "bg-blue-600" },
    { name: "AI", level: 75, color: "bg-emerald-500" },
    { name: "Data Science", level: 70, color: "bg-purple-500" },
    { name: "Deep Learning", level: 65, color: "bg-indigo-500" },
    { name: "Machine Learning", level: 75, color: "bg-pink-500" }
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
                href="https://drive.google.com/file/d/1lykyKoj3xzASGfEtPA2DmGnQJmB_qQJT/view?usp=sharing" 
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
                  <p><span className="font-medium">Phone:</span> +91 82177 7915</p>
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
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out animate-slide-in-right hover-scale`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
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
