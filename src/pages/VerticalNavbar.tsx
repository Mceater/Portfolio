import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Home, User, FolderOpen, Mail, Settings, Menu, X } from "lucide-react";

// ========================
// Vertical Navigation Bar
// ========================
type NavItem = { id: string; label: string; icon: React.ComponentType<{ className?: string }> };

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills", icon: Settings },
  { id: "contact", label: "Contact", icon: Mail },
];

export function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Observe sections to highlight active icon
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Unified side bar: hover on desktop; toggled open on mobile via hamburger */}
      <motion.div
        initial={{ x: -60 }}
        animate={{ x: isOpen ? 0 : -60 }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="block fixed left-0 top-1/2 transform -translate-y-1/2 z-[9999] pointer-events-auto"
      >
        <div className="bg-black/20 backdrop-blur-lg rounded-r-xl border-r border-white/10 shadow-xl">
          <div className="p-3 w-16">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center mb-3 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                    isActive 
                      ? "bg-white/20 text-white shadow-lg" 
                      : "hover:bg-white/10 text-white/80 hover:text-white"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              );
            })}
          </div>

          {/* Social icons (stacked) */}
          <div className="px-3 pb-3 flex flex-col items-center gap-3">
            <a 
              href="https://github.com/Mceater" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex w-12 h-12 items-center justify-center rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all duration-200 hover:scale-105" 
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/farhan-risan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex w-12 h-12 items-center justify-center rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all duration-200 hover:scale-105" 
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Floating hamburger toggles the same sidebar open/closed */}
      <div className="block">
        <button
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((v) => !v)}
          className="fixed top-4 left-4 z-[10000] rounded-xl bg-black/60 backdrop-blur-lg border border-white/20 shadow-xl px-4 py-3 text-white hover:bg-black/70 transition-all duration-200 hover:scale-105"
          style={{
            paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))",
            paddingLeft: "calc(1rem + env(safe-area-inset-left, 0px))",
          }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
