import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code2, Database, Terminal, GraduationCap, Award, Briefcase, ArrowRight, Copy, Check, Sparkles, ShieldCheck, Send, Loader2 } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import validifyImg from '../images/validify main final.png';
import goldenhourImg from '../images/goldenhour.png';
import aifitnessImg from '../images/aifitness.png';

const DATA = {
  name: "PARTH PAWAR",
  role: "Computer Engineering Student",
  email: "parth14118@gmail.com",
  phone: "+91-8623985804",
  location: "Pune, Maharashtra",
  github: "https://github.com/Parth-1606",
  linkedin: "https://www.linkedin.com/in/parth-pawar-2541a3314/",
  summary: "Computer Engineering student skilled in Java, Python, and AI/ML fundamentals, with experience building practical software and AI-based projects. Passionate about learning, problem-solving, and developing technology solutions for real-world applications.",
  skills: {
    languages: ["Python", "JavaScript", "SQL", "Java"],
    databases: ["MySQL", "SQLite", "MongoDB"],
    tools: ["Fast API", "Git", "GitHub", "Postman", "OpenCV", "Media Pipe", "LLM APIs", "Generative AI", "Machine Learning"],
    cloud: ["AWS"]
  },
  projects: [
    {
      title: "Validify",
      subtitle: "An AI-powered SaaS idea validation platform",
      description: "An AI-powered SaaS Validator web application using Streamlit, Python, and LLM integration for automated startup idea validation. It features comprehensive financial projections, competitive analysis, interactive Plotly visualizations, user authentication, and PDF export functionality.",
      tech: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
        { name: "Gemini API", icon: "https://www.vectorlogo.zone/logos/google_gemini/google_gemini-icon.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" }
      ],
      liveUrl: "https://validify-nine.vercel.app/",
      githubUrl: "https://github.com/Parth-1606/Validify",
      image: validifyImg
    },
    {
      title: "GoldenHour",
      subtitle: "Emergency Triage & Hospital Routing System",
      description: "Built a real-time emergency triage and hospital routing system that predicts patient severity using NEWS2 scoring and determines ICU, ventilator, and specialist requirements. Designed a constraint-based routing engine to select the optimal hospital by evaluating care capability, bed availability, specialist presence, hospital load, and transit time. Developed a scalable backend with PostgreSQL, Redis caching, and WebSocket-based real-time updates to dispatch ambulances efficiently and handle dynamic hospital capacity changes.",
      tech: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", invert: true },
        { name: "Joi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "OpenRouteService", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
      ],
      liveUrl: "https://emergency-triage-backend-622rvlq76.vercel.app/",
      githubUrl: "https://github.com/Parth-1606",
      image: goldenhourImg
    },
    {
      title: "AI Fitness Trainer",
      subtitle: "Real-time workout tracking",
      description: "An AI-powered platform enabling real-time workout tracking with automated rep counting and form correction using computer vision. Developed pose detection system using MediaPipe and OpenCV to analyze exercises, providing live voice feedback on biomechanics and form quality.",
      tech: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        { name: "MediaPipe", icon: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", invert: true },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" }
      ],
      liveUrl: "https://ai-trainer-pgmfihxt6-parths-projects-c363a2c4.vercel.app/",
      githubUrl: "https://github.com/Parth-1606",
      image: aifitnessImg
    }
  ],
  education: [
    {
      institution: "Ajeenkya DY Patil School of Engineering, Pune",
      degree: "Bachelor of Engineering (Computer Engineering)",
      duration: "2023-2027",
      score: "CGPA: 9.24/10"
    },
    {
      institution: "Dr. D.Y. Patil Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2021-2023",
      score: "Percentage: 73%"
    }
  ],
  certifications: [
    {
      title: "Develop Generative AI Applications",
      issuer: "IBM",
      date: "2024",
      description: "Getting started with generative AI applications using IBM's AI ecosystem.",
      featured: false,
      verifyUrl: "#"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "2024",
      description: "Fundamentals of Cloud Computing and IBM Cloud services.",
      featured: false,
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/XY3T1SDVU04D"
    }
  ],
  activities: [
    "Participated in Hackathon, rapidly prototyped a full-stack application with a team.",
    "Gained experience in collaboration, time-bound problem solving, and technical presentation.",
    "Maintained active github repositories for project tracking and collaborative coding."
  ],
  techStack: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true }
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-red-500 selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1] bg-[#0a0a0a]">
        {/* Subtle Star/Particle Pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '120px 120px'
          }}
        />
        {/* Mouse Spotlight */}
        <div 
          className="pointer-events-none absolute inset-0 z-[-1] transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239,68,68,0.07), transparent 80%)`
          }}
        />
        {/* Bottom Red Glow */}
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-red-600/20 blur-[120px]" />
      </div>

      {/* Floating Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0.4 }}
        className="fixed inset-x-0 top-6 mx-auto z-50 flex w-[90%] max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#111]/80 px-6 py-3 backdrop-blur-md overflow-hidden"
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-red-500 origin-left"
          style={{ width: "100%", scaleX }}
        />
        
        <div className="text-xl font-extrabold text-white tracking-tight relative z-10">
          Parth<span className="text-red-500">.</span>
        </div>
        
        <ul className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-sm font-medium text-zinc-400">
          {['home', 'about', 'projects', 'skills', 'certifications', 'education'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className={`rounded-full px-4 py-2 transition-colors ${activeSection === item ? 'bg-white/10 text-white' : 'hover:text-white'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="px-4 py-2 hover:text-white transition-colors">Contact</a>
          </li>
        </ul>

        <div className="hidden md:block relative z-10">
          <a href="#" className="px-4 py-2 text-red-500 hover:text-red-400 transition-colors font-medium text-sm">Resume</a>
        </div>
      </motion.nav>

      <main className="mx-auto max-w-5xl px-6 pb-24">
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-zinc-400"
          >
            Hey, I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            {DATA.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 rounded-full bg-red-500 px-5 py-2 text-sm font-semibold tracking-wide text-white"
          >
            {DATA.role}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-2xl text-xl text-zinc-400 sm:text-2xl"
          >
            I build and craft digital experiences that deliver <span className="font-serif italic text-red-400">real impact</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row"
          >
            <a 
              href="#contact" 
              className="flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-600"
            >
              Let's Connect <ArrowRight className="h-5 w-5" />
            </a>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              {DATA.email} {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-white">About Me.</h2>
            <div className="text-lg leading-relaxed text-zinc-400">
              <p className="mb-4">
                I'm a passionate Computer Engineering student with a strong foundation in <span className="font-medium text-white">Java, Python, and AI/ML</span>. I enjoy building practical software and AI-based projects that solve real-world problems.
              </p>
              <p>
                My focus is on continuous learning and applying my skills to develop innovative technology solutions. Whether it's creating an AI-powered SaaS platform or an interactive learning tool, I strive to deliver high-quality, user-centric applications.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 scroll-mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-3xl font-bold text-white"
          >
            Projects.
          </motion.h2>
          <div className="flex flex-col gap-32">
            {DATA.projects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                className={`flex flex-col gap-12 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">
                      <span className="text-zinc-500 mr-2">#{index + 1}</span> 
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-red-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      LAUNCH APP
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-zinc-300">
                        {tech.icon && (
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className={`w-4 h-4 object-contain ${tech.invert ? 'invert opacity-90' : ''}`}
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2a2a2a]">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full z-10 flex justify-center items-center">
                  <div className={`relative w-full group flex justify-center items-center ${project.title === 'Validify' ? '' : 'aspect-[4/3] sm:aspect-[16/10]'}`}>
                    {/* Ambient glow behind floating image */}
                    {project.title === 'Validify' && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-red-500/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    )}
                    
                    {/* Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`relative z-10 transition-all duration-700 ease-out group-hover:-translate-y-3 ${
                        project.title === 'Validify' 
                          ? 'w-full h-auto scale-[1.15] sm:scale-[1.25] object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)] group-hover:scale-[1.2] sm:group-hover:scale-[1.3]' 
                          : 'w-full h-full object-cover opacity-80 group-hover:opacity-100 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 group-hover:scale-105'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="py-24 scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-16 text-3xl font-bold text-white">My Tech Stack</h2>
            <div className="grid w-full max-w-4xl grid-cols-2 gap-y-12 sm:grid-cols-3 md:grid-cols-4">
              {DATA.techStack.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, type: "spring", bounce: 0.4 }}
                  className="group flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className={`max-h-full max-w-full object-contain ${tech.invert ? 'invert opacity-90' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 scroll-mt-20">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-red-500 mb-4"
            >
              <ShieldCheck className="h-4 w-4" /> ACHIEVEMENTS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl sm:text-5xl font-bold text-white tracking-tight"
            >
              Professional <span className="text-red-500">Certifications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-lg text-zinc-400"
            >
              Continuous learning and validation of expertise in AI, Cloud, and Software Engineering.
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-[#080808] p-8 transition-all hover:border-red-500/20 hover:bg-[#0c0c0c]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
                      <Award className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-red-400">
                    {cert.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-zinc-500">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {cert.description}
                  </p>
                </div>
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex w-max items-center gap-2 text-[0.65rem] font-bold tracking-widest text-zinc-600 transition-colors hover:text-white"
                >
                  VERIFY <ExternalLink className="h-3 w-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Extra-Curricular */}
        <section id="education" className="py-24 scroll-mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold text-white"
          >
            Education & More.
          </motion.h2>
          
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            >
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                <GraduationCap className="h-6 w-6 text-red-500" />
                Academic Background
              </h3>
              <ol className="relative ml-3 border-l border-white/10">
                {DATA.education.map((edu, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="mb-10 ml-6"
                  >
                    <span className="absolute -left-1.5 mt-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-red-500/20 ring-4 ring-[#0a0a0a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    </span>
                    <h4 className="mb-1 flex items-center text-base font-medium text-white">{edu.degree}</h4>
                    <time className="mb-2 block text-sm font-normal leading-none text-zinc-500">{edu.duration}</time>
                    <p className="mb-1 text-sm font-normal text-zinc-400">{edu.institution}</p>
                    <p className="text-sm font-medium text-red-400/90">{edu.score}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: 0.2 }}
              >
                <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                  <Briefcase className="h-6 w-6 text-red-500" />
                  Extra-Curricular
                </h3>
                <ul className="space-y-4">
                  {DATA.activities.map((act, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-red-500/70" />
                      <span className="text-sm text-zinc-400">{act}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Get in Touch.</h2>
            <p className="mb-10 max-w-xl text-lg text-zinc-400">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="w-full max-w-xl mx-auto mb-10 text-left">
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                {submitStatus.type && (
                  <div className={`p-3 rounded-xl text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-8 py-4 font-semibold text-white transition-all hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href={DATA.github} target="_blank" rel="noreferrer" className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-[#1a1a1a] text-zinc-400 hover:text-white hover:border-red-500/30 hover:bg-red-500/10 transition-all">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-[#1a1a1a] text-zinc-400 hover:text-white hover:border-red-500/30 hover:bg-red-500/10 transition-all">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href={`mailto:${DATA.email}`} className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-[#1a1a1a] text-zinc-400 hover:text-white hover:border-red-500/30 hover:bg-red-500/10 transition-all">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

