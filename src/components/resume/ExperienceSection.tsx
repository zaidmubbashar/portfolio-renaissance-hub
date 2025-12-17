import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "iOS Developer",
    company: "barq Pk",
    location: "Lahore, Pakistan",
    period: "2025 Jan – Present",
    current: true,
    highlights: [
      "Developed major consumer and merchant features including Topups, Utility Bills, Bus Ticketing, and Wallet flows",
      "Improved app stability by reducing crash rate by 35% and load times by 40% through code refactoring",
      "Migrated core modules to Combine + MVVM-R, improving responsiveness and reducing UI bugs",
      "Performed complete UI/UX rebranding, converting Figma designs into reusable UIKit components",
      "Integrated high-volume REST APIs for secure transactions and smoother payment flows",
      "Implemented Deep Linking across referral and navigation flows",
    ],
  },
  {
    title: "iOS Developer",
    company: "Xint Solutions | MyTm",
    location: "Lahore, Pakistan",
    period: "2023 Apr – 2025 Jan",
    current: false,
    highlights: [
      "Updated and improved existing UI screens to enhance usability and visual consistency",
      "Migrated legacy code from protocol–delegate patterns to modern MVVM-based architecture",
      "Implemented new features including Mobile Bundles, Internet Packages, and Bus Booking flows",
      "Optimized code structure, removed redundancies, and improved API handling for better performance",
      "Collaborated with backend teams to ensure accurate data flow across bundle and ticketing features",
    ],
  },
  {
    title: "iOS Developer",
    company: "Coder Crew",
    location: "Lahore, Pakistan",
    period: "2021 May – 2023 Mar",
    current: false,
    highlights: [
      "Built and maintained iOS apps using UIKit, TableView, and REST APIs",
      "Integrated Stripe and Rapyd payment gateways for seamless in-app purchases",
      "Implemented advanced features using ARKit, MapKit, and WalletConnect",
      "Used Realm for local data storage, improving performance for offline users",
      "Contributed to architecture using MVVM pattern, improving code readability and testing",
    ],
  },
  {
    title: "iOS Developer (Internship)",
    company: "Coder Crew",
    location: "Lahore, Pakistan",
    period: "2021 Feb – 2021 Apr",
    current: false,
    highlights: [
      "Gained hands-on experience in Xcode and Swift by assisting with live iOS app development",
      "Contributed to building UI screens and debugging under senior developer guidance",
      "Learned to use Alamofire and other third-party libraries for API integration",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
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
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Work Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                  exp.current 
                    ? 'bg-primary border-primary shadow-glow' 
                    : 'bg-background border-muted-foreground'
                }`}>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Content Card */}
                <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-hover transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold font-heading group-hover:text-gradient transition-all">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;