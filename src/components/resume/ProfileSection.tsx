import { motion } from "framer-motion";
import { User } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Profile</h2>
          </div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              iOS Developer with{" "}
              <span className="text-foreground font-medium">years of experience</span> delivering 
              fast, stable, and user-friendly mobile apps across{" "}
              <span className="text-primary font-medium">Fintech</span>,{" "}
              <span className="text-primary font-medium">Utility</span>, and{" "}
              <span className="text-primary font-medium">Trading</span> domains. 
              Skilled in{" "}
              <span className="text-foreground font-medium">Swift, UIKit, Combine, and MVVM/MVVM-R</span>{" "}
              with hands-on experience improving legacy codebases, modernizing architecture, and 
              implementing high-impact features. Strong at UI updates, payment flows, API integrations, 
              and converting complex designs into clean, scalable components.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border/50">
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Apps Delivered", value: "10+" },
                { label: "Code Quality", value: "Clean" },
                { label: "Architecture", value: "MVVM" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient font-heading">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;