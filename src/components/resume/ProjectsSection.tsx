import { motion } from "framer-motion";
import { FolderGit2, Calendar } from "lucide-react";

const projects = [
  {
    title: "barq PK",
    tech: "Swift, Xcode",
    period: "2025 Jan – Present",
    description: "Fintech mobile application for payments and utilities",
    highlights: [
      "Modernized app rebranding using reusable UIKit components",
      "Implemented architecture using Combine + MVVM-R for smoother UI updates",
      "Optimized API handling for faster and more reliable payments",
    ],
    features: ["FT", "IBFT", "Topups", "Utility Bills", "Bus Ticketing"],
    figmaPrompt: "Create a fintech app portfolio screen showing a clean wallet dashboard with cyan accents, payment cards, transaction history with smooth gradients, and a modern dark theme. Include mockups of bill payment flow and mobile top-up screens.",
    images: ["/projects/fintech-1.png", "/projects/fintech-2.png", "/projects/fintech-3.png"],
    featured: true,
  },
  {
    title: "MyTM Consumer",
    tech: "Swift, Xcode",
    period: "2024 Jul – 2025",
    description: "Consumer telecom app for bundles and services",
    highlights: [
      "Updated and refreshed UI screens to match new design guidelines",
      "Migrated old modules from protocol–delegate to MVVM",
      "Implemented features like Mobile Bundles, Internet/Data Packages, and Bus Booking",
    ],
    features: ["Mobile Bundles", "Data Packages", "Bus Booking"],
    figmaPrompt: "Design a telecom consumer app portfolio screen with mobile bundle selection cards, data package comparison view, and bus booking interface. Use purple accents on dark background with glass morphism effects.",
    images: ["/projects/telecom-1.png", "/projects/telecom-2.png", "/projects/telecom-3.png"],
    featured: true,
  },
  {
    title: "Degn – Crypto Trading App",
    tech: "Swift, Xcode",
    period: "2024 Oct – 2025 Mar",
    description: "Personal crypto trading platform for meme coins",
    highlights: [
      "Designed and implemented complex UI for intuitive trading experience",
      "Added real-time price graphs and haptic feedback",
      "Integrated Intercom for real-time user support",
      "Optimized blockchain interactions for faster transactions",
    ],
    features: ["Real-time Charts", "Deep Linking", "Meme Coin Trading"],
    figmaPrompt: "Create a crypto trading app portfolio screen featuring live candlestick charts, buy/sell interface with green/red accents, portfolio balance card, and meme coin listing. Dark theme with neon glow effects.",
    images: ["/projects/crypto-1.png", "/projects/crypto-2.png", "/projects/crypto-3.png"],
    featured: true,
  },
  {
    title: "Reizor",
    tech: "Swift, Xcode",
    period: "2022 Apr – 2023 Jan",
    description: "Event ticketing and NFT platform",
    highlights: [
      "Designed and optimized user interfaces using MVVM",
      "Built advanced features using ARKit and MapKit",
      "Integrated Stripe, Rapyd, and Bitpay for crypto and fiat payments",
    ],
    features: ["ARKit", "Event Ticketing", "Crypto Payments"],
    figmaPrompt: "Design an event ticketing app with AR preview feature, event cards with venue maps, and NFT ticket gallery. Include payment flow screens with multiple crypto options. Use vibrant gradients on dark theme.",
    images: ["/projects/nft-1.png", "/projects/nft-2.png", "/projects/nft-3.png"],
    featured: false,
  },
  {
    title: "SpotHunter",
    tech: "Swift, Xcode",
    period: "2022 Mar – 2022 Sep",
    description: "Location-based spot sharing application",
    highlights: [
      "Updated UI to improve user experience",
      "Implemented MapKit for sharing spots",
      "Added social login with Facebook, Google, and Apple",
    ],
    features: ["MapKit", "Social Login", "Spot Sharing"],
    figmaPrompt: "Create a location-sharing app portfolio screen with interactive map view, spot cards with photos, and social features. Include login screen with social auth buttons. Use map-inspired color palette with location pins.",
    images: ["/projects/loc-share-1.png", "/projects/loc-share-2.png", "/projects/loc-share-3.png"],
    featured: false,
  },
];

const additionalProjects = [
  { name: "Hotline", desc: "Built UI and integrated Firebase authentication and swipe image features" },
  { name: "Family Picture", desc: "Created UI and integrated future messaging features" },
  { name: "YomiTech", desc: "Built UI aligned with Figma, added KYC verification and child wallet features" },
  { name: "MyTM Dukaan", desc: "Revamped with MVVM-R, integrated Ufone bundles and ticket booking" },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      
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
            <FolderGit2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 md:p-8 hover:shadow-hover transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">{project.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {project.period}
                </div>
              </div>

              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {project.images.slice(0, 3).map((src, imgIndex) => (
                    <div
                      key={src}
                      className="rounded-xl overflow-hidden border border-border/40 bg-muted/20"
                    >
                      <img
                        src={src}
                        alt={project.title}
                        className={`w-full h-56 ${imgIndex === 0 ? "object-contain" : "object-cover object-center"}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="inline-flex px-3 py-1 text-sm bg-primary/20 text-primary rounded-full mb-4">
                {project.tech}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 mt-2 rounded-full bg-primary flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((feature) => (
                  <span key={feature} className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded">
                    {feature}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold font-heading mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="glass rounded-xl p-5 hover:shadow-hover transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.images.slice(0, 3).map((src, imgIndex) => (
                      <div
                        key={src}
                        className="rounded-lg overflow-hidden border border-border/30 bg-muted/20"
                      >
                        <img
                          src={src}
                          alt={project.title}
                          className={`w-full h-32 ${imgIndex === 0 ? "object-contain" : "object-cover object-center"}`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {project.features.map((feature) => (
                    <span key={feature} className="px-2 py-0.5 text-xs bg-muted/30 text-muted-foreground rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold font-heading mb-4">Additional Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalProjects.map((project, index) => (
              <div key={project.name} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">{project.name}</span>
                  <span className="text-muted-foreground"> – {project.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;