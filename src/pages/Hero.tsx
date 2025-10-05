import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// ========================
// Hero Section
// ========================
export function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Farhan R</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg mb-6 max-w-xl"
      >
        Front-End Developer | Building complex and scalable web and mobile applications using React and React Native.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex gap-4"
      >
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/resume.pdf" download="Farhan_Resume_Software_Developer.pdf">Download Resume</a>
        </Button>
      </motion.div>
    </section>
  );
}
