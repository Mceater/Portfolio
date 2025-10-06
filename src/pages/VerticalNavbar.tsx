import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      {/* Desktop / Tablet: Hover-reveal vertical bar */}
      <motion.div
        initial={{ x: -60 }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hidden md:block fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
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
      </motion.div>

      {/* Mobile: Floating hamburger + slide-in drawer */}
      <div className="md:hidden">
        {/* Floating hamburger button */}
        <button
          aria-label="Open navigation"
          onClick={() => setIsOpen(true)}
          className="fixed left-4 bottom-6 z-50 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-xl p-3 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute inset-0 bg-black/40" />

              {/* Drawer */}
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative h-full w-64 bg-gray-900/90 backdrop-blur-xl border-r border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                  <span className="text-white/90 font-semibold">Navigation</span>
                  <button
                    aria-label="Close navigation"
                    onClick={() => setIsOpen(false)}
                    className="rounded-md p-1 text-white/80 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="p-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection(item.id);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-white/90 hover:bg-white/10"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}

                  <div className="mt-4 border-t border-white/10 pt-3 flex gap-3">
                    <a
                      href="https://github.com/Mceater"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/farhan-risan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
