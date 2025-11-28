import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitBranch, GitMerge, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Cognitive Mobiles",
      role: "Software Developer – R&D Team",
      duration: "Sep 2025 - Present",
      location: "Chennai, TamilNadu",
      description: "Working as a Frontend Developer using Angular. Developing scalable UI components, improving application performance, and contributing to product research and new feature prototypes within the R&D team.",
      type: "commit"
    },
    {
      company: "Vizion Systems",
      role: "Full Stack Developer / Frontend Developer",
      duration: "July 2023 - July 2024",
      location: "Bengaluru, Karnataka",
      description: "Front-End Developer involved in projects utilizing Html5, Css3, Bootstrap, JavaScript and React. Led a 3-member development team to successfully deliver scalable MERN stack applications within deadlines. Deployed a Management App on Vercel, ensuring high performance, security, and smooth CI/CD workflows. Optimized React components and improved application load speed by ~30%, enhancing overall user experience. Integrated RESTful APIs & role-based authentication that streamlined data flow and improved security in projects.",
      type: "merge"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-24"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 p-2 bg-background border border-border rounded-full z-10 group hover:border-primary transition-colors">
                  {exp.type === 'commit' && <GitCommit className="text-primary" size={24} />}
                  {exp.type === 'merge' && <GitMerge className="text-secondary" size={24} />}
                  {exp.type === 'branch' && <GitBranch className="text-accent" size={24} />}
                </div>

                {/* Content Card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative group">
                  {/* Connector Line */}
                  <div className="absolute top-6 -left-16 w-16 h-0.5 bg-border group-hover:bg-primary/50 transition-colors"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-primary font-medium">{exp.company}</div>
                      <div className="text-sm text-muted-foreground mt-1">{exp.location}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full w-fit">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
