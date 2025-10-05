import { VerticalNavbar } from "./pages/VerticalNavbar";
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

// ========================
// Main Portfolio Component
// ========================
export default function Portfolio() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <VerticalNavbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Farhan R. Built with React, Tailwind, and Framer Motion.
      </footer>
    </div>
  );
}
