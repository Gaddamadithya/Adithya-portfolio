import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Adithya,%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    );

    window.location.href = `mailto:adithyagaddam369@gmail.com?subject=${subject}&body=${body}`;
    toast.success('Email draft opened successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openContactAction = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank', 'noopener,noreferrer');
      return;
    }

    window.location.href = action;
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 8519958584',
      action: 'tel:+918519958584',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'adithyagaddam369@gmail.com',
      action: 'mailto:adithyagaddam369@gmail.com',
      color: 'from-sky-400 to-blue-500'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      value: 'github.com/Gaddamadithya',
      action: 'https://github.com/Gaddamadithya',
      color: 'from-slate-600 to-slate-900'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      action: 'https://www.linkedin.com/in/gaddam-adithya/',
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_52%,#ffffff_100%)] py-20"
      ref={elementRef}
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className={`container relative mx-auto px-4 scroll-reveal-left ${isVisible ? 'scroll-reveal-left-visible' : ''}`}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 flex items-center justify-center gap-3 text-4xl font-bold text-slate-900">
            <Send className="h-10 w-10 text-sky-600 icon-pulse-hover" />
            Let&apos;s Build Something Great
          </h2>
          <hr className="hr-gradient-animated mx-auto mb-6 w-24" />
          <p className="text-xl text-slate-600">
            I&apos;m open to internships, freelance work, collaborations, and meaningful tech conversations.
            If you have an idea or opportunity, let&apos;s talk.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-sky-100 bg-white/[0.85] p-8 shadow-[0_20px_60px_rgba(59,130,246,0.10)] backdrop-blur">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Contact</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-900">Reach out through your preferred channel</h3>
                <p className="mt-3 text-slate-600">
                  Fastest replies usually come through email or WhatsApp. I&apos;m currently based in India and open to remote opportunities.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="group cursor-pointer border-slate-200/70 bg-white/[0.8] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                    onClick={() => openContactAction(method.action)}
                  >
                    <CardContent className="p-5">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${method.color} text-white shadow-md`}>
                        {method.icon}
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-slate-900">{method.title}</h4>
                          <p className="mt-1 text-sm text-slate-600">{method.value}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-0 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_20px_70px_rgba(22,163,74,0.28)]">
              <CardContent className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">Quick Chat on WhatsApp</h4>
                  <p className="mt-1 text-sm text-emerald-50">
                    Use this for quick introductions, collaboration ideas, or urgent follow-ups.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="rounded-full bg-white text-green-700 hover:bg-emerald-50"
                >
                  <a href="https://wa.me/918519958584" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-cyan-300" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-slate-300">India | Open to remote opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card
              className="overflow-hidden border border-sky-100/80 bg-white/90 shadow-[0_24px_70px_rgba(14,165,233,0.10)] backdrop-blur"
              id="contact-form"
            >
              <CardHeader className="border-b border-slate-100 bg-slate-50/80">
                <CardTitle className="flex items-center text-2xl text-slate-900">
                  <Send className="mr-3 h-6 w-6 text-sky-600" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
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
                        className="h-12 rounded-xl border-slate-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
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
                        className="h-12 rounded-xl border-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your idea, project, or collaboration request..."
                      rows={7}
                      className="w-full resize-none rounded-2xl border-slate-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-500 py-6 text-white hover:from-sky-700 hover:via-blue-700 hover:to-emerald-600"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Open Email Draft
                  </Button>
                </form>

                <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Tip:</strong> Share the type of project, timeline, and expected role so I can reply with better context.
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
