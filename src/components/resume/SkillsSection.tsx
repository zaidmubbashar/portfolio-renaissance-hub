import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Database, Puzzle, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Swift", "SwiftUI"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Layers,
    title: "iOS Frameworks",
    skills: ["UIKit", "Combine", "Core Data", "MapKit", "ARKit", "AVPlayer"],
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Xcode", "Git/GitHub", "Figma", "Intercom"],
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Puzzle,
    title: "Architecture & Design",
    skills: ["MVVM", "MVVM-R", "Clean Architecture", "Singleton Pattern"],
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Database,
    title: "Networking & Storage",
    skills: ["RESTful APIs", "JSON", "Alamofire", "Kingfisher", "Realm", "Firebase"],
    color: "from-green-400 to-green-600",
  },
  {
    icon: Zap,
    title: "Integrations",
    skills: ["Stripe", "Rapyd", "WalletConnect", "Google/Facebook/Apple Sign-In"],
    color: "from-blue-400 to-blue-600",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Technical Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:shadow-hover transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-heading">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + sIndex * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 text-sm bg-muted/50 text-muted-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-semibold font-heading mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Swift", "UIKit", "MVVM", "Combine", "REST APIs", "Firebase", "Clean Architecture"].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                className="px-5 py-2.5 bg-gradient-primary text-primary-foreground font-medium rounded-full hover:shadow-hover hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;