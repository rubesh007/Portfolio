import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cybot",
      role: "Frontend Developer (Angular)",
      description: "Migrated and optimized a high-performance dashboard using Angular 16-19, TypeScript, and SCSS. Redesigned the UI for a seamless, responsive experience across all devices, resolving key usability issues. Enhanced performance by optimizing change detection, significantly reducing load times. Collaborated with R&D and QA teams to deliver reliable features within Agile workflows.",
      tags: ["Angular 19", "TypeScript", "SCSS", "Angular Material"],
      image: "/images/cybot_dashboard.png",
      github: "#",
      demo: "#",
      stars: 12,
      forks: 4
    },
    {
      title: "Cricket Bat Selection App",
      role: "Next.js Developer",
      description: "Built a responsive bat selection app using Next.js, TypeScript, and Tailwind CSS with secure authentication. Designed an interactive comparison tool and recommendation logic to guide user choices. Implemented React Context for efficient state management and a premium UI. Ensured a seamless experience with optimized performance and intuitive navigation.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Context API"],
      image: "/images/cricket_bat_app.png",
      github: "https://github.com/rubesh007/BatSelector",
      demo: "#",
      stars: 8,
      forks: 2
    },
    {
      title: "Servo Desk",
      role: "Front-End Developer",
      description: "Built a comprehensive service management solution using React, Tailwind CSS, and Bootstrap. Developed reusable, modular components with React Hooks for maintainability. Integrated RESTful APIs for secure data handling and role-based authentication. Optimized performance and accessibility, featuring a custom dark/light mode toggle.",
      tags: ["React", "Tailwind CSS", "Bootstrap", "REST APIs"],
      image: "/images/servodesk_ui.png",
      github: "#",
      demo: "#",
      stars: 15,
      forks: 5
    },
    {
      title: "Management System Web App",
      role: "MERN Stack Developer",
      description: "Engineered a responsive ticket management system using React and Tailwind CSS with a clean UI. Implemented secure role-based access for ticket tracking and status updates. Built reusable UI elements to maintain design consistency across the application. Architected a robust Node.js/Express/MongoDB backend with JWT authentication.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/management_system.png",
      github: "https://github.com/rubesh007/ManageMent-System",
      demo: "#",
      stars: 10,
      forks: 3
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects that demonstrate my technical capabilities and problem-solving skills.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted border-b border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-fill object-center transition-transform duration-500 group-hover:scale-105 will-change-transform [backface-visibility:hidden] [transform:translateZ(0)] hover:contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="p-3 bg-background rounded-full text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg border border-border/50"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="p-3 bg-background rounded-full text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg border border-border/50"
                      title="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4 md:p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary/80 font-medium mt-1">{project.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50 text-xs text-muted-foreground mt-auto">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} className="text-primary" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
