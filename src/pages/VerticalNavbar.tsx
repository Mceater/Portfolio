import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Home, User, Code, Mail, Wrench, Menu, X } from "lucide-react";

// ========================
// Vertical Navigation Bar
// ========================
export function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
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

  // Observe sections to highlight active icon
  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "skills", "contact"];
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
        <div className="p-2 w-14">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 flex items-center justify-center mb-2 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                    isActive ? "bg-white/20 ring-1 ring-white/30" : "hover:bg-white/10"
                  }`}
                  title={item.label}
                >
                  <Icon className={"w-5 h-5 " + (isActive ? "text-white" : "text-white/90")} />
                </motion.button>
              );
            })}
          </div>

          {/* Social icons (stacked) */}
          <div className="px-2 pb-2 flex flex-col items-center gap-2">
            <a href="https://github.com/Mceater" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/10 text-white/90" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/farhan-risan" target="_blank" rel="noopener noreferrer" className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/10 text-white/90" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        {/* No separate close button on mobile; hamburger toggles open/close */}
      </motion.div>

      {/* Floating hamburger toggles the same sidebar open/closed */}
      <div className="block">
        <button
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((v) => !v)}
          className="fixed top-4 left-4 z-[10000] rounded-md bg-black/60 backdrop-blur-md border border-white/40 shadow-2xl px-3 py-2 text-white ring-1 ring-white/30"
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
