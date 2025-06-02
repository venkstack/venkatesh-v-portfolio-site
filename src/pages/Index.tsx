import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, User, GraduationCap, Code, Briefcase, Star, Zap, Brain, Cpu, Globe, Wrench } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { 
      name: "Java", 
      level: 85, 
      icon: <Cpu className="w-6 h-6" />,
      description: "Building robust enterprise applications and scalable backend systems with object-oriented programming excellence.",
      color: "from-orange-400 to-red-500"
    },
    { 
      name: "Python", 
      level: 80, 
      icon: <Brain className="w-6 h-6" />,
      description: "Creating intelligent solutions, data analysis scripts, and automation tools that simplify complex workflows.",
      color: "from-blue-400 to-green-500"
    },
    { 
      name: "C Programming", 
      level: 75, 
      icon: <Code className="w-6 h-6" />,
      description: "Mastering low-level programming fundamentals and memory management for efficient system-level applications.",
      color: "from-gray-400 to-blue-600"
    },
    { 
      name: "Web Development", 
      level: 70, 
      icon: <Globe className="w-6 h-6" />,
      description: "Crafting responsive and interactive web experiences using modern HTML, CSS, and JavaScript frameworks.",
      color: "from-purple-400 to-pink-500"
    },
    { 
      name: "AI Tools & Prompting", 
      level: 90, 
      icon: <Zap className="w-6 h-6" />,
      description: "Leveraging cutting-edge AI technologies and prompt engineering to enhance productivity and solve complex problems.",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      name: "Automation", 
      level: 80, 
      icon: <Wrench className="w-6 h-6" />,
      description: "Designing smart workflows and automated systems that eliminate repetitive tasks and boost efficiency.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <div 
      className="animate-pulse"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-lg z-50 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-gray-800 tracking-wide">V T Venkatesh</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <FloatingElement>
              <div className="w-56 h-56 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse opacity-20"></div>
                <img 
                  src="/lovable-uploads/bfbc7e62-d065-4b73-85ea-9597a375e149.png" 
                  alt="V T Venkatesh"
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 z-10 relative"
                />
              </div>
            </FloatingElement>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
              V T Venkatesh
            </h1>
            
            <div className="space-y-4 mb-10">
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aspiring Software Developer
                </span>
              </p>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Passionate about crafting elegant solutions with <span className="font-semibold text-blue-600">Java</span>, <span className="font-semibold text-green-600">Python</span>, and <span className="font-semibold text-purple-600">C</span>. 
                Exploring the frontier of <span className="font-semibold text-yellow-600">AI tools</span> and <span className="font-semibold text-indigo-600">automation</span> to build tomorrow's technology today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <Mail className="mr-3" size={24} />
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://github.com/venkstack', '_blank')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <Github className="mr-3" size={24} />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="perspective-1000">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50 transform hover:rotateY-2 transition-all duration-500 hover:shadow-3xl">
              <CardContent className="p-12 md:p-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <FloatingElement delay={1}>
                      <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl transform hover:rotate-12 transition-all duration-500">
                        <Briefcase size={40} className="text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Passionate Developer</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      I'm a dedicated B.Tech final year student with an insatiable curiosity for technology. 
                      My journey spans from mastering traditional programming languages to exploring the cutting-edge 
                      world of AI and automation. I believe in writing code that not only works but tells a story.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      { icon: <Code className="text-blue-600" size={24} />, text: "Problem-solving with creative thinking" },
                      { icon: <Brain className="text-purple-600" size={24} />, text: "Continuous learner and knowledge seeker" },
                      { icon: <Zap className="text-yellow-600" size={24} />, text: "AI enthusiast and early adopter" },
                      { icon: <Wrench className="text-green-600" size={24} />, text: "Automation advocate for efficiency" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        {item.icon}
                        <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Each skill represents hours of dedication, countless projects, and a passion for continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group perspective-1000"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform group-hover:rotateX-5 group-hover:translateY-2 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{skill.name}</h3>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-blue-600 font-bold text-lg">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {skill.description}
                    </p>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">Education</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="perspective-1000">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-indigo-50 transform hover:rotateY-2 transition-all duration-500 hover:shadow-3xl">
              <CardContent className="p-12 md:p-16">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <FloatingElement delay={2}>
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 transform hover:rotate-12 transition-all duration-500">
                      <GraduationCap size={40} className="text-white" />
                    </div>
                  </FloatingElement>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Bachelor of Technology</h3>
                    <p className="text-2xl text-blue-600 font-semibold mb-3">Final Year Student</p>
                    <p className="text-xl text-gray-700 mb-6 font-medium">Kalasalingam Academy of Research and Education</p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Currently pursuing B.Tech with a specialized focus on software development and emerging technologies. 
                      Actively engaged in hands-on projects, research initiatives, and staying at the forefront of industry innovations. 
                      My academic journey has been enriched with practical experience in modern programming paradigms and cutting-edge technological solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">Let's Connect</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate, innovate, or just have a great conversation about technology? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="perspective-1000">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-3xl transition-all duration-500 transform hover:rotateY-5 group">
                <CardContent className="p-10 text-center">
                  <FloatingElement delay={3}>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Mail size={32} className="text-white" />
                    </div>
                  </FloatingElement>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email Me</h3>
                  <a 
                    href="mailto:vtvenkatesh28@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-lg hover:underline"
                  >
                    vtvenkatesh28@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="perspective-1000">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:rotateY-5 group">
                <CardContent className="p-10 text-center">
                  <FloatingElement delay={4}>
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Github size={32} className="text-white" />
                    </div>
                  </FloatingElement>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Profile</h3>
                  <a 
                    href="https://github.com/venkstack" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-lg hover:underline"
                  >
                    github.com/venkstack
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            © 2024 V T Venkatesh. Crafted with passion, powered by innovation, and built for the future.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotateY-2:hover {
          transform: rotateY(2deg);
        }
        
        .rotateY-5:hover {
          transform: rotateY(5deg);
        }
        
        .rotateX-5:hover {
          transform: rotateX(5deg);
        }
      `}</style>
    </div>
  );
};

export default Index;
