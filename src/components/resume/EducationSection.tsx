import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, BookOpen } from "lucide-react";

const certifications = [
  { title: "Introduction to Software Engineering", icon: BookOpen },
  { title: "Advance Programming In Swift", icon: Code },
  { title: "Get Started with Android App Development", icon: Smartphone },
  { title: "Best Student Voice Leader – Superior College", icon: Trophy },
];

import { Code, Smartphone } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">Education</h2>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group hover:shadow-hover transition-all"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-bl-full" />
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">Bachelor's Degree</h3>
                  <p className="text-primary font-medium mb-2">Virtual University of Pakistan</p>
                  <p className="text-muted-foreground">Lahore • Class of 2024</p>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-muted-foreground">Successfully completed while working full-time</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">Certifications</h2>
            </div>

            {/* Certifications Grid */}
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-hover transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{cert.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;