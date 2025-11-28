import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout } from 'lucide-react';
import { FaReact, FaAngular } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  const skills = [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3",
    "Tailwind CSS", "Bootstrap", "Node.js", "Express.js",
    "MongoDB", "MySQL", "REST APIs", "Git & GitHub",
    "VS Code", "Postman", "Angular"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                About <span className="text-primary">Me</span>
              </motion.h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I am a <span className="text-foreground font-medium">Front-End / MERN Stack Developer</span> with 1 year of experience building responsive, secure, and scalable web applications.
              </p>
              <p>
                My journey involves translating complex requirements into clean, accessible UIs and integrating efficient server-side logic. I thrive in environments that challenge me to learn new technologies and improve my craft.
              </p>
            </motion.div>

            <div className="pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-primary flex items-center gap-2">
                <Code2 size={16} /> Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-md hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image & Stats */}
          <div className="relative group order-1 md:order-2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-full max-w-[280px] md:w-72"
            >
              {/* Tech Border Frame */}
              <div className="absolute -inset-4 border-2 border-dashed border-border rounded-xl animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-xl animate-[spin_15s_linear_infinite_reverse]"></div>

              <div className="relative rounded-xl overflow-hidden border-2 border-primary/50 shadow-2xl bg-card">
                <img
                  src="/profile.jpg"
                  alt="RubeshKumar.S"
                  className="w-full h-auto object-cover aspect-[3/4] hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
              </div>

              {/* Floating Badges */}
              
              {/* Top Left - Frontend */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 md:-left-8 top-4 md:top-8 bg-card border border-border p-2 md:p-2.5 rounded-lg shadow-xl flex items-center gap-2 md:gap-3 z-20 scale-90 md:scale-100"
              >
                <div className="p-1.5 md:p-2 bg-primary/10 rounded-md text-primary">
                  <Layout size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold">Frontend</div>
                </div>
              </motion.div>

              {/* Top Right - MERN */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 md:-right-8 top-12 md:top-8 bg-card border border-border p-2 md:p-2.5 rounded-lg shadow-xl flex items-center gap-2 md:gap-3 z-20 scale-90 md:scale-100"
              >
                <div className="p-1.5 md:p-2 bg-[#61DAFB]/10 rounded-md text-[#61DAFB]">
                  <FaReact size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold">MERN Stack</div>
                </div>
              </motion.div>

              {/* Bottom Left - MEAN */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -left-4 md:-left-8 bottom-12 md:bottom-8 bg-card border border-border p-2 md:p-2.5 rounded-lg shadow-xl flex items-center gap-2 md:gap-3 z-20 scale-90 md:scale-100"
              >
                <div className="p-1.5 md:p-2 bg-[#DD0031]/10 rounded-md text-[#DD0031]">
                  <FaAngular size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold">MEAN Stack</div>
                </div>
              </motion.div>

              {/* Bottom Right - Next.js */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 md:-right-8 bottom-4 md:bottom-8 bg-card border border-border p-2 md:p-2.5 rounded-lg shadow-xl flex items-center gap-2 md:gap-3 z-20 scale-90 md:scale-100"
              >
                <div className="p-1.5 md:p-2 bg-foreground/10 rounded-md text-foreground">
                  <RiNextjsFill size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold">Next.js</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
