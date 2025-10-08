import { Github, Linkedin } from "lucide-react";

// ========================
// Contact Section
// ========================
export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Get In Touch</h2>
      <p className="mb-8 text-lg max-w-2xl mx-auto">Let's connect! Reach out for opportunities, collaborations, or to discuss your next project.</p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <a href="https://github.com/Mceater" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 text-white transition-all duration-200 hover:scale-105">
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/farhan-risan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105">
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a href="mailto:farhan@example.com" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-200 hover:scale-105">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Me
        </a>
      </div>
    </section>
  );
}
