import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 tracking-tight"
          >
            <span className="text-foreground">Khawaja</span>{" "}
            <span className="text-gradient">Rehan</span>{" "}
            <span className="text-foreground">Jawed</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-muted-foreground">
              iOS Developer
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            <a href="mailto:kh.rehan2001@gmail.com" className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:shadow-hover transition-all duration-300 group">
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">kh.rehan2001@gmail.com</span>
            </a>
            <a href="tel:+923274437510" className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:shadow-hover transition-all duration-300 group">
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">+92 327 4437510</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Lahore, Pakistan</span>
            </div>
          </motion.div>

          {/* Social Links & Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:shadow-hover hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:shadow-hover hover:scale-105 transition-all duration-300 font-medium"
            >
              <Download className="w-5 h-5 text-primary" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;