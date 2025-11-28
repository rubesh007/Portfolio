import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Rocket, Zap, Lock } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: Users,
      title: "Team Leadership",
      description: "Led a 3-member development team to successfully deliver scalable MERN stack applications within deadlines.",
      color: "text-blue-500"
    },
    {
      id: 2,
      icon: Rocket,
      title: "Deployment & CI/CD",
      description: "Deployed a Management App on Vercel, ensuring high performance, security, and smooth CI/CD workflows.",
      color: "text-purple-500"
    },
    {
      id: 3,
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimized React components and improved application load speed by ~30%, enhancing overall user experience.",
      color: "text-yellow-500"
    },
    {
      id: 4,
      icon: Lock,
      title: "Security & Integration",
      description: "Integrated RESTful APIs & role-based authentication that streamlined data flow and improved security in projects.",
      color: "text-green-500"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-secondary/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Key <span className="text-primary">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-secondary/10 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
