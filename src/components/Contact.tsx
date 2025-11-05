
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9182177915",
      action: "tel:+919182177915",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "repanavishnuvardhan67664@gmail.com",
      action: "mailto:repanavishnuvardhan67664@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/vishnu915",
      action: "https://github.com/vishnu915",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      action: "https://www.linkedin.com/in/repana-vishnu-vardhan-26795b316/",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in animate-rgb-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in animate-3d-tilt">Let's Connect</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => {
                    if (method.action.startsWith('http') || method.action.startsWith('tel:') || method.action.startsWith('mailto:')) {
                      window.open(method.action, '_blank');
                    } else if (method.action.startsWith('#')) {
                      document.querySelector(method.action)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-gray-600 text-sm">{method.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8" />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Quick Chat on WhatsApp</h4>
                    <p className="text-green-100 text-sm">Get instant response for urgent queries</p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    asChild
                    className="bg-white text-green-600 hover:bg-green-50"
                  >
                    <a href="https://wa.me/919821777915" target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">India • Open to remote opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0" id="contact-form">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center animate-3d-tilt">
                  <Send className="w-6 h-6 mr-3 text-blue-600" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    💡 <strong>Tip:</strong> Include details about your project, timeline, and budget for faster response.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
