
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, User, GraduationCap, Code, Briefcase } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "C Programming", level: 75 },
    { name: "Web Development", level: 70 },
    { name: "AI Tools & Prompting", level: 90 },
    { name: "Automation", level: 80 }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-gray-800">Venkatesh V T</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-blue-600 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
              <User size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Venkatesh V T
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Aspiring software developer skilled in Java, Python, C, and beginner-friendly web development, 
              with hands-on experience in AI tools, prompting, and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://github.com/venkstack', '_blank')}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github className="mr-2" size={20} />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Passionate Developer</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I am a dedicated B.Tech final year student with a strong foundation in programming languages 
                    and emerging technologies. My passion lies in creating efficient solutions and exploring the 
                    intersection of traditional programming with modern AI tools.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600" size={20} />
                    <span className="text-gray-700">Problem-solving mindset</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600" size={20} />
                    <span className="text-gray-700">Continuous learner</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600" size={20} />
                    <span className="text-gray-700">AI enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600" size={20} />
                    <span className="text-gray-700">Automation advocate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                    <span className="text-blue-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor of Technology</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">Final Year Student</p>
                  <p className="text-lg text-gray-700 mb-4">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed">
                    Currently pursuing B.Tech with a focus on software development and emerging technologies. 
                    Actively engaged in practical projects and staying updated with industry trends.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Feel free to reach out for collaboration opportunities or just to say hello!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <a 
                  href="mailto:vtvenkatesh28@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  vtvenkatesh28@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Github size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
                <a 
                  href="https://github.com/venkstack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  github.com/venkstack
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2024 Venkatesh V T. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
