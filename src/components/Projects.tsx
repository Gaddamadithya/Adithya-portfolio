
import React from 'react';
import { ExternalLink, Github, Clock, Users, Database, Code, Bot, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Project Management Web App",
      description: "A full-stack MERN application for managing projects with secure authentication, CRUD operations, and timeline tracking. Features user-specific project views and clean responsive UI.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"],
      features: ["Create, Update & Delete Projects", "Secure JWT Authentication", "User-Specific Views", "Project Timeline Tracking"],
      github: "https://github.com/vishnu915/Project-Management-Web-Application.git",
      icon: <Zap className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "AI Agent for Automated Browser Workflows",
      description: "Built an intelligent AI agent using Python, browser-use, and LangChain to automate complex web tasks (navigation, search, interaction) from natural language prompts.",
      technologies: ["Python", "AI/ML", "Gradio", "LLMs (OpenAI, Google)", "LangChain", "browser-use"],
      features: ["Natural Language Task Automation", "Multiple LLM Integration", "Gradio WebUI", "Agent Configuration & Monitoring"],
      github: "https://github.com/vishnu915/AI-Agent.git",
      icon: <Bot className="w-6 h-6" />,
      color: "from-emerald-500 to-blue-500"
    },
    {
      title: "Online Exam System",
      description: "A complete web-based examination platform with timer functionality, secure login system, and comprehensive result analysis. Built with Python Flask and MySQL.",
      technologies: ["Python", "Flask", "MySQL", "HTML/CSS", "JavaScript"],
      features: ["Timer System", "Secure Authentication", "Result Analytics", "Admin Dashboard"],
      github: "https://github.com/vishnu915/ONLINE-EXAMINATION-SYSTEM",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Chat Application",
      description: "A socket-based chat system enabling real-time message delivery between users. Features include user authentication, message history, and responsive design.",
      technologies: ["Python", "Socket.IO", "Flask", "JavaScript", "CSS"],
      features: ["Real-time Messaging", "User Authentication", "Message History", "Responsive UI"],
      github: "https://github.com/vishnu915/Real-time-chat-Application",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Vehicle Speed Detection System",
      description: "Engineered a full-stack web application leveraging OpenCV for real-time vehicle speed calculation (95% accuracy) from uploaded videos, with secure user authentication using MySQL.",
      technologies: ["ML", "Python", "Flask", "OpenCV", "MySQL", "HTML/CSS", "JavaScript"],
      features: ["95% Speed Accuracy", "Object Tracking", "Responsive UI", "Video Upload & Processing"],
      github: "https://github.com/vishnu915/Vehicle-Speed-Detection-Using-Open-CV/tree/master",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Banking Application",
      description: "A secure banking system featuring balance checking, money transfers, transaction history, and user account management with robust security measures.",
      technologies: ["Python", "Flask", "MySQL", "Security", "Authentication"],
      features: ["Balance Management", "Secure Transfers", "Transaction History", "User Security"],
      github: "https://github.com/vishnu915/python-full-stack-resume-projects/tree/main/high%20level%20banking%20application",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "To-Do List Application",
      description: "A full-stack CRUD task manager designed for beginners, featuring task creation, editing, deletion, and status tracking with a clean user interface.",
      technologies: ["Python", "Flask", "MySQL", "HTML/CSS", "JavaScript"],
      features: ["CRUD Operations", "Task Management", "Status Tracking", "Clean UI"],
      github: "https://github.com/vishnu915/python-full-stack-beginners-projects/tree/main/todo_app_mytodo_db",
      icon: <Clock className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Simple Blog",
      description: "A blog website with user authentication, post creation and management, comment system, and admin panel for content moderation.",
      technologies: ["Python", "Flask", "MySQL", "Bootstrap", "JavaScript"],
      features: ["User Authentication", "Post Management", "Comment System", "Admin Panel"],
      github: "https://github.com/vishnu915/Simple-blog-using-Python-Flask-and-Mysql",
      icon: <Code className="w-6 h-6" />,
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my key projects that showcase my skills in full-stack development, 
            machine learning, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <a href="https://github.com/vishnu915" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
