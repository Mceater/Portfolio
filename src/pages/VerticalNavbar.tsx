import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Home, User, Code, Mail, Wrench, Menu, X } from "lucide-react";

// ========================
// Vertical Navigation Bar
// ========================
export function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Unified side bar: hover on desktop; toggled open on mobile via hamburger */}
      <motion.div
        initial={{ x: -60 }}
        animate={{ x: isOpen ? 0 : -60 }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="block fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
      >
        {/* Indicator dot when navbar is hidden */}
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white/40 rounded-full"></div>
        
        <div className="bg-black/20 backdrop-blur-lg border border-white/30 rounded-r-2xl shadow-2xl">
          <div className="p-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center mb-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
                  title={item.label}
                >
                  <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </motion.button>
              );
            })}
          </div>
          
          {/* Social Links */}
          <div className="border-t border-white/20 p-2">
            <motion.a
              href="https://github.com/Mceater"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center mb-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/farhan-risan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            </motion.a>
          </div>
        </div>

        {/* Mobile close button (shown when opened via hamburger) */}
        <button
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute -right-10 top-2 rounded-full bg-black/60 text-white p-2"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Floating hamburger toggles the same sidebar open/closed */}
      <div className="block">
        <button
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((v) => !v)}
          className="fixed top-4 left-4 z-[100] rounded-full bg-black/60 backdrop-blur-md border border-white/40 shadow-2xl p-3 text-white ring-1 ring-white/30"
          style={{
            paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))",
            paddingLeft: "calc(0.75rem + env(safe-area-inset-left, 0px))",
          }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
