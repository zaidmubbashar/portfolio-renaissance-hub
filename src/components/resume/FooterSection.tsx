import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I'm always open to discussing new iOS projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <motion.a
            href="mailto:kh.rehan2001@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:shadow-hover hover:scale-105 transition-all duration-300 text-lg"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a href="mailto:kh.rehan2001@gmail.com" className="group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                kh.rehan2001@gmail.com
              </p>
            </a>

            <a href="tel:+923274437510" className="group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                +92 327 4437510
              </p>
            </a>

            <div className="group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border/30"
        >
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Khawaja Rehan Jawed
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;