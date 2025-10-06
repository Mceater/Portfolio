import { Github, Linkedin } from "lucide-react";

// ========================
// Contact Section
// ========================
export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Get In Touch</h2>
      <p className="mb-6">Let's connect! Reach out for opportunities or collaborations.</p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/Mceater" target="_blank"><Github className="w-6 h-6" /></a>
        <a href="https://linkedin.com/in/farhan-risan" target="_blank"><Linkedin className="w-6 h-6" /></a>
      </div>
    </section>
  );
}
