import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "console.log('Hello World!');";
  const [showCursor, setShowCursor] = useState(true);
  
  const roles = [
    "FRONTEND",
    "MERN FULLSTACK",
    "MEAN FULLSTACK",
    "NEXT.JS",
    "RESEARCH & DEV"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Work
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Hi, I'm <span className="text-foreground font-bold">RubeshKumar.S</span>
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                <div className="h-[1.2em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRole}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                    >
                      {roles[currentRole]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span>Developer</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Crafting robust and scalable web applications with modern technologies. 
              Specializing in the MERN stack and responsive UI design.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-all bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-all border border-border bg-card hover:bg-muted text-foreground rounded-lg hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              {[
                { Icon: RiNextjsFill, name: "Next.js", color: "text-foreground" },
                { Icon: FaReact, name: "React.js", color: "text-[#61DAFB]" },
                { Icon: FaNodeJs, name: "Node.js", color: "text-[#339933]" },
                { Icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
                { Icon: RiTailwindCssFill, name: "Tailwind", color: "text-[#06B6D4]" },
                { Icon: FaGitAlt, name: "Git", color: "text-[#F05032]" },
                { Icon: FaGithub, name: "GitHub", color: "text-foreground" },
              ].map(({ Icon, name, color }, index) => (
                <div key={index} className={`flex items-center gap-2 transition-colors duration-300 cursor-pointer ${color} group`}>
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal/Code Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-xl bg-[#1e1e1e] border border-border shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">rubesh@portfolio:~/dev</div>
                <Terminal size={14} className="text-muted-foreground" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm md:text-base space-y-4 min-h-[300px]">
                <div className="flex items-center gap-2 text-green-400">
                  <span>➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-foreground">{text}{showCursor && <span className="animate-pulse">|</span>}</span>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="space-y-2"
                >
                  <div className="text-gray-400">// Current Stack</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-yellow-400">frontend</span> = [
                      <br/>&nbsp;&nbsp;<span className="text-green-400">'React'</span>,
                      <br/>&nbsp;&nbsp;<span className="text-green-400">'Next.js'</span>,
                      <br/>&nbsp;&nbsp;<span className="text-green-400">'Tailwind'</span>
                      <br/>];
                    </div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-yellow-400">backend</span> = [
                      <br/>&nbsp;&nbsp;<span className="text-green-400">'Node.js'</span>,
                      <br/>&nbsp;&nbsp;<span className="text-green-400">'Express'</span>,
                      <br/>&nbsp;&nbsp;<span className="text-green-400">'MongoDB'</span>
                      <br/>];
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <span className="text-blue-400">await</span> <span className="text-yellow-400">hire</span>(<span className="text-foreground">Rubesh</span>);
                    <br/>
                    <span className="text-gray-500">{'// Result: "High Impact Developer"'}</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative Elements behind terminal */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/20 rounded-xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
